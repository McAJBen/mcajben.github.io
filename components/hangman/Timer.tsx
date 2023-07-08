"use client";

import { Time } from "@/api/HangmanApi";
import { useMsRemaining } from "@/components/Hooks";
import styles from "./Timer.module.css";

type Props = {
  expirationTime: Time;
};

export default function Timer(props: Props) {
  const { expirationTime } = props;

  const msRemaining = useMsRemaining(expirationTime);

  return (
    <div className={styles.hangman_timer}>
      {new Date(msRemaining).toISOString().substring(14, 21)}
    </div>
  );
}
