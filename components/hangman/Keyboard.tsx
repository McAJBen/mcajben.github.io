"use client";

import classNames from "classnames";
import { useEffect } from "react";
import { LETTERS, Letter } from "@/api/HangmanApi";
import styles from "./Keyboard.module.css";

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
          styles.keyboard_button,
          !isEnabled && isCorrect && styles.keyboard_button_disabled_correct,
          !isEnabled && !isCorrect && styles.keyboard_button_disabled_incorrect
        )}
        onClick={isEnabled ? () => onClick(key) : undefined}
      >
        {key}
      </div>
    );
  }

  return (
    <div className={styles.keyboard_grid}>
      <div className={styles.keyboard_row}>
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
      <div className={styles.keyboard_row}>
        <div className={styles.keyboard_spacer} />
        <Key type="a" />
        <Key type="s" />
        <Key type="d" />
        <Key type="f" />
        <Key type="g" />
        <Key type="h" />
        <Key type="j" />
        <Key type="k" />
        <Key type="l" />
        <div className={styles.keyboard_spacer} />
      </div>
      <div className={styles.keyboard_row}>
        <div className={styles.keyboard_spacer} />
        <div className={styles.keyboard_spacer} />
        <div className={styles.keyboard_spacer} />
        <Key type="z" />
        <Key type="x" />
        <Key type="c" />
        <Key type="v" />
        <Key type="b" />
        <Key type="n" />
        <Key type="m" />
        <div className={styles.keyboard_spacer} />
        <div className={styles.keyboard_spacer} />
        <div className={styles.keyboard_spacer} />
      </div>
    </div>
  );
}
