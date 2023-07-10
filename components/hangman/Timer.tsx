"use client";

import { Time } from "@/api/HangmanApi";
import { useMsRemaining } from "@/components/Hooks";

type Props = {
  expirationTime: Time;
};

export default function Timer(props: Props) {
  const { expirationTime } = props;

  const msRemaining = useMsRemaining(expirationTime);

  return (
    <div className="select-none text-xl">
      {new Date(msRemaining).toISOString().substring(14, 21)}
    </div>
  );
}
