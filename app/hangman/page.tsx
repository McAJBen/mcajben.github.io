"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import HangmanApi, { Leaderboard } from "@/api/HangmanApi";
import Header from "@/components/Header";

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
    <main>
      <Header pathname="/hangman" />
      <div className="m-auto flex max-w-3xl flex-col items-center p-5 text-white">
        <input
          className="m-2 rounded p-2 text-[--color-primary-dark]"
          type="text"
          onChange={onUserNameChange}
          value={userName}
          placeholder="Your name"
          onKeyDown={onUserNameKeyDown}
        />
        <p className="max-w-md text-center">
          You will have a time limit to find the word, losing more time with
          every wrong guess, but gaining time with every correct guess. Good
          Luck.
        </p>
        <button
          onClick={loading ? undefined : onClick}
          className="m-2 rounded bg-[--color-primary] p-2 text-white hover:bg-white hover:text-[--color-primary]"
        >
          Start Game
        </button>
        {error}
        {leaderboard && (
          <>
            <div className="text-xl">Leaderboard</div>
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Answer</th>
                  <th>Total Time</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((boardItem, index) => {
                  const params = new URLSearchParams();
                  params.set("id", boardItem.game_id);
                  const href = `/hangman/game?${params.toString()}`;
                  return (
                    <tr
                      key={boardItem.game_id}
                      className="odd:bg-[--color-background-light]"
                    >
                      <td className="text-center">{index + 1}.</td>
                      <td className="text-center">{boardItem.user_name}</td>
                      <td className="text-center">
                        <Link
                          href={href}
                          className="text-[--color-primary-light]"
                        >
                          {boardItem.answer}
                        </Link>
                      </td>
                      <td className="text-center">
                        {Math.round(boardItem.total_time / 100) / 10}s
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
      </div>
    </main>
  );
}
