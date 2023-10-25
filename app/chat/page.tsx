"use client";

import { useCallback, useEffect, useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import classNames from "classnames";

const connectionStatusLabels = {
  [ReadyState.CONNECTING]: "Connecting",
  [ReadyState.OPEN]: "Open",
  [ReadyState.CLOSING]: "Closing",
  [ReadyState.CLOSED]: "Closed",
  [ReadyState.UNINSTANTIATED]: "Uninstantiated",
} as const;

const OPTIONS = { retryOnError: true } as const;

const apiUrl = "wss://chat-api.mcajben.com/chat";

export default function Chat() {
  const [messageHistory, setMessageHistory] = useState<any[]>([]);
  const [nickname, setNickname] = useState<string>();
  const [nicknameText, setNicknameText] = useState("");

  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket<any>(
    apiUrl,
    OPTIONS,
  );

  console.log(
    "---last",
    JSON.stringify(lastJsonMessage),
    nickname,
    nicknameText,
    messageHistory,
  );

  useEffect(() => {
    if (lastJsonMessage !== null) {
      if (lastJsonMessage.type === "get_nickname") {
        setNickname(lastJsonMessage.nickname);
        sendJsonMessage({ type: "get_room_list", filter: "" });
      }
      setMessageHistory((prev) => prev.concat(lastJsonMessage));
    }
  }, [setMessageHistory, sendJsonMessage, lastJsonMessage]);

  const onSendMessage = useCallback(
    () => sendJsonMessage("Hello"),
    [sendJsonMessage],
  );

  const onSendNickname = useCallback(
    () => sendJsonMessage({ type: "set_nickname", nickname: nicknameText }),
    [sendJsonMessage, nicknameText],
  );

  const connectionStatus = connectionStatusLabels[readyState];

  return (
    <div className="flex flex-1 flex-col items-center p-3 text-white">
      <button
        onClick={onSendMessage}
        disabled={readyState !== ReadyState.OPEN}
        className={classNames(
          "m-0.5 flex flex-1 select-none items-center justify-center rounded text-center text-xl uppercase text-white",
          true
            ? "cursor-pointer bg-primary hover:bg-white hover:text-primary"
            : "cursor-not-allowed bg-success",
        )}
      >
        Click Me to send &apos;Hello&apos;
      </button>
      <span>The WebSocket is currently {connectionStatus}</span>
      {nickname === undefined ? (
        <>
          <input type="text" className="text-black" />
          <button onClick={onSendNickname}>Submit</button>
        </>
      ) : (
        <>
          <button
            onClick={() =>
              sendJsonMessage({ type: "create_room", name: "my_room" })
            }
          >
            Create Room
          </button>
        </>
      )}
      <ul>
        <span>Last message: {JSON.stringify(lastJsonMessage)}</span>
        {messageHistory.map((message, idx) => (
          <span key={idx}>{message ? message.data : null}</span>
        ))}
      </ul>
    </div>
  );
}
