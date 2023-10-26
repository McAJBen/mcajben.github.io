"use client";

import { useCallback, useEffect, useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import {
  ChatMessage,
  ChatApiResponse,
  MessageType,
  RoomId,
  RoomInfo,
  RoomMetaData,
} from "@/api/ChatApi";
import Loading from "@/components/Loading";
import NicknameInput from "@/components/chat/NicknameInput";
import RoomNavigator from "@/components/chat/RoomNavigator";
import ChatSession from "@/components/chat/ChatSession";

const OPTIONS = { retryOnError: true } as const;

const CHAT_API_URL = "wss://chat-api.mcajben.com/chat";

export default function Chat() {
  const [currentNickname, setCurrentNickname] = useState<string>();

  const [availableRooms, setAvailableRooms] = useState<RoomMetaData[]>([]);

  const [currentRoom, setCurrentRoom] = useState<RoomInfo>();
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const { sendJsonMessage, lastJsonMessage, readyState } =
    useWebSocket<ChatApiResponse | null>(CHAT_API_URL, OPTIONS);

  useEffect(() => {
    console.log("----->>>>>", lastJsonMessage);
    switch (lastJsonMessage?.type) {
      case "get_nickname":
        setCurrentNickname(lastJsonMessage.nickname);
        sendJsonMessage({ type: "get_room_list", filter: "" });
        break;
      case "get_room_list":
        setAvailableRooms(lastJsonMessage.rooms);
        break;
      case "room_info":
        setCurrentRoom({
          id: lastJsonMessage.id,
          name: lastJsonMessage.name,
          users: lastJsonMessage.users,
        });
        break;
      case "receive_message":
        setMessages((prev) =>
          prev.concat([
            {
              type: MessageType.Message,
              timestamp: lastJsonMessage.timestamp,
              user_id: lastJsonMessage.session_id,
              user_name:
                currentRoom?.users.find(
                  (user) => user.id === lastJsonMessage.session_id,
                )?.name ?? "unknown",
              message: lastJsonMessage.message,
            },
          ]),
        );
        break;
      case "receive_die_roll":
        setMessages((prev) =>
          prev.concat([
            {
              type: MessageType.DieRoll,
              timestamp: lastJsonMessage.timestamp,
              user_id: lastJsonMessage.session_id,
              user_name:
                currentRoom?.users.find(
                  (user) => user.id === lastJsonMessage.session_id,
                )?.name ?? "unknown",
              roll_function: lastJsonMessage.roll_function,
              result: lastJsonMessage.result,
            },
          ]),
        );
        break;
    }
  }, [sendJsonMessage, lastJsonMessage, currentRoom]);

  const onSendNickname = useCallback(
    (newNickname: string) =>
      sendJsonMessage({ type: "set_nickname", nickname: newNickname }),
    [sendJsonMessage],
  );

  const onSendJoinRoom = useCallback(
    (id: RoomId) => sendJsonMessage({ type: "join_room", room_id: id }),
    [sendJsonMessage],
  );

  const onSendCreateRoom = useCallback(
    (name: string) => sendJsonMessage({ type: "create_room", name }),
    [sendJsonMessage],
  );

  const onSendMessage = useCallback(
    (message: string) => sendJsonMessage({ type: "send_message", message }),
    [sendJsonMessage],
  );

  if (readyState != ReadyState.OPEN) {
    return <Loading />;
  } else if (currentNickname === undefined) {
    return <NicknameInput onSubmit={onSendNickname} />;
  } else if (currentRoom === undefined) {
    return (
      <RoomNavigator
        rooms={availableRooms}
        onCreateRoom={onSendCreateRoom}
        onJoinRoom={onSendJoinRoom}
      />
    );
  } else {
    return (
      <ChatSession
        nickname={currentNickname}
        room={currentRoom}
        messages={messages}
        onSubmitMessage={onSendMessage}
      />
    );
  }
}
