"use client";

import { useCallback, useState } from "react";
import { ChatMessage, MessageType, UserId, UserMetaData } from "@/api/ChatApi";

type Props = {
  userCache: Record<UserId, UserMetaData>;
  message: ChatMessage;
};

function getReadableTimestamp(date: Date) {
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  if (date <= startOfToday) {
    return date.toLocaleString();
  } else {
    return date.toLocaleTimeString();
  }
}

export default function ChatMessage({ userCache, message }: Props) {
  const readableTimestamp = getReadableTimestamp(
    new Date(message.timestamp * 1000),
  );

  const username = userCache[message.user_id]?.username ?? message.user_id;

  return (
    <div className="p-0.5" key={message.timestamp + ":" + message.user_id}>
      <div className="flex flex-row">
        <span className="text-xl text-secondary">{username}</span>
        <span className="self-center ps-2 text-sm text-gray-400">
          {readableTimestamp}
        </span>
      </div>
      {message.type === MessageType.Message && (
        <div className="whitespace-pre-line ps-2">{message.message}</div>
      )}
      {message.type === MessageType.DieRoll && (
        <div className="ps-2">
          <div className="text-pretty break-all">
            <span className="text-highlight">Request: </span>
            {message.roll_function}
          </div>
          <div className="text-pretty break-all">
            <span className="text-highlight">Rolls: </span>
            {message.rolls}
          </div>
          <div className="text-pretty break-all">
            <span className="text-highlight">Total: </span>
            {message.result}
          </div>
        </div>
      )}
    </div>
  );
}
