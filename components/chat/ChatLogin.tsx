"use client";

import { useCallback, useState } from "react";

type Props = {
  onCreate(username: string, password: string): void;
  onLogin(username: string, password: string): void;
};

export default function ChatLogin(props: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onCreate = useCallback(() => {
    props.onCreate(username, password);
  }, [props, username, password]);

  const onLogin = useCallback(() => {
    props.onLogin(username, password);
  }, [props, username, password]);

  const onUsernameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(event.target.value);
    },
    [],
  );

  const onPasswordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    [],
  );

  const onPasswordKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        onLogin();
      }
    },
    [onLogin],
  );

  return (
    <div className="m-auto flex max-w-3xl flex-col items-center p-5 text-white">
      <input
        autoFocus
        className="m-2 rounded p-2 text-primary"
        type="text"
        onChange={onUsernameChange}
        value={username}
        placeholder="Username"
      />
      <input
        className="m-2 rounded p-2 text-primary"
        type="password"
        onChange={onPasswordChange}
        value={password}
        placeholder="Password"
        onKeyDown={onPasswordKeyDown}
      />
      <div>
        <button
          onClick={onCreate}
          className="m-2 rounded bg-secondary p-2 text-white hover:bg-white hover:text-secondary"
        >
          Create Account
        </button>
        <button
          onClick={onLogin}
          className="m-2 rounded bg-primary p-2 text-white hover:bg-white hover:text-primary"
        >
          Login
        </button>
      </div>
    </div>
  );
}
