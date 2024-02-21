"use client";

import { useCallback, useState } from "react";
import { MdSend, MdCasino } from "react-icons/md";
import { ChatMessage, UserId, UserMetaData } from "@/api/ChatApi";
import ChatMessageComponent from "./ChatMessage";

type Props = {
  nickname: string;
  room: string;
  knownUsers: Record<UserId, UserMetaData>;
  messages: ChatMessage[];
  onSendMessage(message: string): void;
  onSendDieRoll(roll_function: string): void;
  onExitRoom(): void;
};

export default function ChatSession(props: Props) {
  const [newMessage, setNewMessage] = useState("");

  const onSubmitMessage = useCallback(() => {
    if (newMessage.startsWith("/roll ")) {
      props.onSendDieRoll(newMessage.substring(6));
    } else {
      props.onSendMessage(newMessage);
    }
    setNewMessage("");
  }, [props, newMessage]);

  const onSubmitRoll = useCallback(() => {
    props.onSendDieRoll(newMessage);
    setNewMessage("");
  }, [props, newMessage]);

  const onMessageChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setNewMessage(event.target.value);
    },
    [],
  );

  const onMessageKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        onSubmitMessage();
      }
    },
    [onSubmitMessage],
  );

  return (
    <div className="flex flex-auto flex-col items-center overflow-hidden text-white">
      <span className="w-full bg-primary-600 text-center text-lg">
        {props.room}
        <button
          onClick={props.onExitRoom}
          className="float-right m-2 rounded bg-primary p-2 text-white hover:bg-white hover:text-primary"
        >
          Exit
        </button>
      </span>
      <div className="max-h-screen w-full">
        {props.messages.map((message) => (
          <ChatMessageComponent
            key={message.timestamp}
            userCache={props.knownUsers}
            message={message}
          />
        ))}
      </div>
      <div className="bottom-0 end-0 start-0 flex w-full flex-row bg-secondary">
        <textarea
          autoFocus
          className="m-2 line-clamp-2 flex flex-1 resize-none rounded p-2 text-primary"
          onChangeCapture={onMessageChange}
          value={newMessage}
          placeholder="Enter Message..."
          onKeyDown={onMessageKeyDown}
        />
        <button
          onClick={onSubmitMessage}
          className="m-2 rounded bg-primary p-2 text-white hover:bg-white hover:text-primary"
        >
          <MdSend />
        </button>
        <button
          onClick={onSubmitRoll}
          className="m-2 rounded bg-primary p-2 text-white hover:bg-white hover:text-primary"
        >
          <MdCasino />
        </button>
      </div>
    </div>
  );
}
