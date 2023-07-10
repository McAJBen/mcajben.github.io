"use client";

import { useCallback, useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import { GameState } from "@/api/HangmanApi";

type Props = {
  gameState: GameState;
};

export default function History(props: Props) {
  const { gameState } = props;

  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const onShare = useCallback(async () => {
    const params = new URLSearchParams();
    params.set("id", gameState.game_id);
    await navigator.clipboard.writeText(
      `${window.location.origin}/hangman/game?${params.toString()}`
    );
    setIsLinkCopied(true);
  }, [gameState]);

  return (
    <>
      <div className="text-center m-3 max-w-lg">{gameState.description}</div>
      <div className="w-full flex flex-wrap container justify-center max-w-md uppercase gap-1 m-3">
        {gameState.guesses.map(({ letter, is_correct }, index) => (
          <div
            key={index}
            className={classNames(
              "flex justify-center content-center aspect-square items-center rounded select-none w-[3rem]",
              is_correct
                ? "bg-[--color-text-success]"
                : "bg-[--color-primary-light]"
            )}
          >
            {letter}
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-evenly w-full max-w-lg m-3">
        <button
          onClick={onShare}
          className="rounded p-2 mx-2 bg-[--color-secondary] hover:bg-white text-white hover:text-[--color-secondary] w-40"
        >
          {isLinkCopied ? "Link Copied!" : "Share"}
        </button>
        <Link
          href="/hangman"
          className="mx-2 w-40 rounded bg-[--color-primary] p-2 text-center text-white hover:bg-white hover:text-[--color-primary]"
        >
          Play Again
        </Link>
      </div>
    </>
  );
}
