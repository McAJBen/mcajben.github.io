"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import HangmanApi, { GameState } from "@/api/HangmanApi";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import Keyboard, { Key } from "@/components/hangman/Keyboard";
import Answer from "@/components/hangman/Answer";
import History from "@/components/hangman/History";
import Timer from "@/components/hangman/Timer";
import { useIsExpired } from "@/components/Hooks";
import styles from "./styles.module.css";

export default function HangmanGame() {
  const searchParams = useSearchParams();
  const gameId = searchParams.get("id");
  const router = useRouter();
  const [gameState, setGameState] = useState<GameState>();

  const onLetterClick = useCallback(
    async (letter: string) => {
      if (!gameId) return;
      const response = await HangmanApi.createGuess(gameId, letter);
      if (response) {
        setGameState(response);
      }
    },
    [gameId]
  );

  const getKeyInfo = useCallback(
    (key: Key) => {
      if (!gameState) return { isEnabled: false, isCorrect: false };
      const guess = gameState.guesses.find((g) => g.letter === key);

      return {
        isEnabled: !guess,
        isCorrect: guess?.is_correct ?? false,
      };
    },
    [gameState]
  );

  const isExpired = useIsExpired(gameState?.expiration_time);

  useEffect(() => {
    if (!gameId) {
      router.push("/hangman");
      return;
    }
    const call = async () => {
      const response = await HangmanApi.getGame(gameId);
      setGameState(response);
    };
    call();
  }, [gameId, router]);

  if (!gameState || !gameId) {
    return (
      <>
        <Header pathname="/hangman/game" />
        <Loading />
      </>
    );
  }

  const isGameWon = gameState.answer.indexOf("_") === -1;

  return (
    <>
      <Header pathname="/hangman/game" />
      <div className={styles.hangman_content}>
        <Answer answer={gameState.answer} />
        {!isGameWon && isExpired && <div>You lost...</div>}
        {!isGameWon && !isExpired && gameState.expiration_time && (
          <Timer expirationTime={gameState.expiration_time} />
        )}
        {isGameWon || isExpired ? (
          <History gameState={gameState} />
        ) : (
          <Keyboard onClick={onLetterClick} getKeyInfo={getKeyInfo} />
        )}
      </div>
    </>
  );
}
