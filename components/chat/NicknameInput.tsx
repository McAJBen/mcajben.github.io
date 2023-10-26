"use client";

import { useCallback, useState } from "react";

type Props = {
  onSubmit(nickname: string): void;
};

export default function NicknameInput(props: Props) {
  const [newNickname, setNewNickname] = useState("");

  const onSubmit = useCallback(
    () => props.onSubmit(newNickname),
    [props, newNickname],
  );

  const onNicknameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setNewNickname(event.target.value);
    },
    [],
  );

  const onNicknameKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        onSubmit();
      }
    },
    [onSubmit],
  );

  return (
    <div className="m-auto flex max-w-3xl flex-col items-center p-5 text-white">
      <input
        autoFocus
        className="m-2 rounded p-2 text-primary"
        type="text"
        onChange={onNicknameChange}
        value={newNickname}
        placeholder="Your nickname"
        onKeyDown={onNicknameKeyDown}
      />
      <button
        onClick={onSubmit}
        className="m-2 rounded bg-primary p-2 text-white hover:bg-white hover:text-primary"
      >
        Submit
      </button>
    </div>
  );
}
