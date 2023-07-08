"use client";

import { useCallback, useState } from "react";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { GameState } from "@/api/HangmanApi";
import styles from "./History.module.css";

type Props = {
  gameState: GameState;
};

export default function History(props: Props) {
  const { gameState } = props;

  const router = useRouter();
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const onShare = useCallback(async () => {
    await navigator.clipboard.writeText(
      `${window.location.origin}/hangman/${gameState.game_id}`
    );
    setIsLinkCopied(true);
  }, [gameState]);

  const onRestart = useCallback(() => {
    router.push("/hangman");
  }, [router]);

  return (
    <>
      <div className={styles.hangman_history_description}>
        {gameState.description}
      </div>
      <div className={styles.hangman_history}>
        {gameState.guesses.map(({ letter, is_correct }, index) => (
          <div
            key={index}
            className={classNames(
              styles.hangman_history_square,
              is_correct && styles.hangman_history_correct
            )}
          >
            {letter}
          </div>
        ))}
      </div>
      <div className={styles.hangman_history_options}>
        <div onClick={onShare} className={styles.hangman_history_option}>
          {isLinkCopied ? "Link Copied!" : "Share"}
        </div>
        <div onClick={onRestart} className={styles.hangman_history_option}>
          Play again
        </div>
      </div>
    </>
  );
}
