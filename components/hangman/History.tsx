"use client";

import { useCallback, useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import { MdContentCopy, MdRefresh } from "react-icons/md";
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
      <div className="m-3 max-w-lg text-center">{gameState.description}</div>
      <div className="container m-3 flex w-full max-w-md flex-wrap justify-center gap-1 uppercase">
        {gameState.guesses.map(({ letter, is_correct }, index) => (
          <div
            key={index}
            className={classNames(
              "flex aspect-square w-[3rem] select-none content-center items-center justify-center rounded",
              is_correct ? "bg-success" : "bg-primary-100"
            )}
          >
            {letter}
          </div>
        ))}
      </div>
      <div className="m-3 flex w-full max-w-lg flex-row justify-evenly">
        <button
          onClick={onShare}
          className="mx-2 flex w-40 flex-row items-center justify-center rounded bg-secondary p-2 text-white hover:bg-white hover:text-secondary"
        >
          {isLinkCopied ? "Link Copied!" : "Share"}
          {!isLinkCopied && <MdContentCopy className="ml-2" />}
        </button>
        <Link
          href="/hangman"
          className="mx-2 flex w-40 flex-row items-center justify-center rounded bg-primary p-2 text-center hover:bg-white hover:text-primary"
        >
          Play Again
          <MdRefresh className="ml-2" />
        </Link>
      </div>
    </>
  );
}
