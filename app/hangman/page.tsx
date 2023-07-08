"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import HangmanApi, { Leaderboard } from "@/api/HangmanApi";
import Header from "@/components/Header";
import styles from "./styles.module.css";

export default function HangmanStart() {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  const [leaderboard, setLeaderboard] = useState<Leaderboard[]>();
  const [error, setError] = useState<string>();

  const onUserNameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserName(event.target.value);
    },
    []
  );

  const onClick = useCallback(async () => {
    setLoading(true);
    localStorage.setItem("userName", userName);
    const response = await HangmanApi.createGame(userName);
    if (!response) {
      setError("Error creating game");
      setLoading(false);
      return;
    }
    const params = new URLSearchParams();
    params.set("id", response.game_id);
    router.push(`/hangman/game?${params.toString()}`);
  }, [router, userName]);

  const onUserNameKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        onClick();
      }
    },
    [onClick]
  );

  useEffect(() => {
    const prevUserName = localStorage.getItem("userName");
    if (prevUserName) {
      setUserName(prevUserName);
    }
    async function loadLeaderboard() {
      const response = await HangmanApi.getLeaderboard();
      if (response) {
        setLeaderboard(response);
      }
    }
    loadLeaderboard();
  }, []);

  return (
    <>
      <Header pathname="/hangman" />
      <div className={styles.hangman_start_content}>
        <input
          className={styles.hangman_start_user_input}
          type="text"
          onChange={onUserNameChange}
          value={userName}
          placeholder="Your name"
          onKeyDown={onUserNameKeyDown}
        />
        <div
          onClick={loading ? undefined : onClick}
          className={styles.hangman_start_button}
        >
          Start Game
        </div>
        {error}
        {leaderboard && (
          <table className={styles.hangman_start_leaderboard}>
            <thead>
              <tr>
                <th>Place</th>
                <th>User Name</th>
                <th>Answer</th>
                <th>Total Time</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((boardItem, index) => (
                <tr key={index}>
                  <td>{index + 1}.</td>
                  <td>{boardItem.user_name}</td>
                  <td>{boardItem.answer}</td>
                  <td>{Math.round(boardItem.total_time / 100) / 10}s</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
