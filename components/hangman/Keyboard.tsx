"use client";

import { useEffect } from "react";
import classNames from "classnames";
import { LETTERS, Letter } from "@/api/HangmanApi";

export type Key = Letter;

type Props = {
  onClick(key: Key): unknown;
  getKeyInfo(key: Key): { isEnabled: boolean; isCorrect: boolean };
};

export default function Keyboard(props: Props) {
  const { onClick, getKeyInfo } = props;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key as Key;
      if (LETTERS.includes(key) && getKeyInfo(key).isEnabled) {
        onClick(key);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClick, getKeyInfo]);

  function Key(props: { type: Key }) {
    const { type: key } = props;
    const { isEnabled, isCorrect } = getKeyInfo(key);

    return (
      <div
        className={classNames(
          "flex flex-1 justify-center items-center m-0.5 rounded text-white text-xl text-center uppercase select-none",
          isEnabled
            ? "bg-[--color-primary] hover:bg-white hover:text-[--color-primary] cursor-pointer"
            : isCorrect
            ? "bg-[--color-text-success] cursor-not-allowed"
            : "bg-transparent text-[--color-primary] cursor-not-allowed"
        )}
        onClick={isEnabled ? () => onClick(key) : undefined}
      >
        {key}
      </div>
    );
  }

  return (
    <div className="w-full block max-w-lg">
      <div className="flex w-full">
        <Key type="q" />
        <Key type="w" />
        <Key type="e" />
        <Key type="r" />
        <Key type="t" />
        <Key type="y" />
        <Key type="u" />
        <Key type="i" />
        <Key type="o" />
        <Key type="p" />
      </div>
      <div className="flex w-full">
        <div className="flex-[0.5]" />
        <Key type="a" />
        <Key type="s" />
        <Key type="d" />
        <Key type="f" />
        <Key type="g" />
        <Key type="h" />
        <Key type="j" />
        <Key type="k" />
        <Key type="l" />
        <div className="flex-[0.5]" />
      </div>
      <div className="flex w-full">
        <div className="flex-[1.5]" />
        <Key type="z" />
        <Key type="x" />
        <Key type="c" />
        <Key type="v" />
        <Key type="b" />
        <Key type="n" />
        <Key type="m" />
        <div className="flex-[1.5]" />
      </div>
    </div>
  );
}
