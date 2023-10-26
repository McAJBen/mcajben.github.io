"use client";

import { useCallback, useState } from "react";
import { ChatMessage, MessageType, RoomInfo } from "@/api/ChatApi";

type Props = {
  nickname: string;
  room: RoomInfo;
  messages: ChatMessage[];
  onSubmitMessage(message: string): void;
};

export default function ChatSession(props: Props) {
  const [newMessage, setNewMessage] = useState("");

  const onSubmitMessage = useCallback(() => {
    props.onSubmitMessage(newMessage);
    setNewMessage("");
  }, [props, newMessage]);

  const onMessageChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setNewMessage(event.target.value);
    },
    [],
  );

  const onMessageKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        onSubmitMessage();
      }
    },
    [onSubmitMessage],
  );

  return (
    <div className="flex flex-auto flex-col items-center overflow-hidden text-white">
      <span className="w-full bg-primary-600 text-center text-lg">
        {props.room.name}
      </span>
      <div className="max-h-screen w-full">
        {props.messages.map((message) => (
          <div
            className="flex flex-row p-0.5"
            key={message.timestamp + ":" + message.user_id}
          >
            <span className="text-gray-500">{message.timestamp}</span>
            <span className="pe-2 ps-2 text-secondary">
              {message.user_name}
            </span>
            {message.type === MessageType.Message && (
              <span className="">{message.message}</span>
            )}
            {message.type === MessageType.DieRoll && (
              <span className="">
                {message.roll_function} -&gt; {message.result}
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="bottom-0 end-0 start-0 w-full flex-row bg-secondary">
        <input
          autoFocus
          className="m-2 rounded p-2 text-primary"
          type="text"
          onChange={onMessageChange}
          value={newMessage}
          placeholder="Enter Message..."
          onKeyDown={onMessageKeyDown}
        />
        <button
          onClick={onSubmitMessage}
          className="m-2 rounded bg-primary p-2 text-white hover:bg-white hover:text-primary"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
