import classNames from "classnames";
import { useEffect } from "react";
import { LETTERS, Letter } from "../../clients/HangmanApi";
import "./Keyboard.css";

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
          "keyboard-button",
          !isEnabled && isCorrect && "keyboard-button-disabled-correct",
          !isEnabled && !isCorrect && "keyboard-button-disabled-incorrect"
        )}
        onClick={isEnabled ? () => onClick(key) : undefined}
      >
        {key}
      </div>
    );
  }

  return (
    <div className="keyboard-grid">
      <div className="keyboard-row">
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
      <div className="keyboard-row">
        <div className="keyboard-spacer" />
        <Key type="a" />
        <Key type="s" />
        <Key type="d" />
        <Key type="f" />
        <Key type="g" />
        <Key type="h" />
        <Key type="j" />
        <Key type="k" />
        <Key type="l" />
        <div className="keyboard-spacer" />
      </div>
      <div className="keyboard-row">
        <div className="keyboard-spacer" />
        <div className="keyboard-spacer" />
        <div className="keyboard-spacer" />
        <Key type="z" />
        <Key type="x" />
        <Key type="c" />
        <Key type="v" />
        <Key type="b" />
        <Key type="n" />
        <Key type="m" />
        <div className="keyboard-spacer" />
        <div className="keyboard-spacer" />
        <div className="keyboard-spacer" />
      </div>
    </div>
  );
}
