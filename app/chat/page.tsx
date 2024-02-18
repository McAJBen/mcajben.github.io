"use client";

import { useCallback, useEffect, useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import {
  ChatMessage,
  ChatApiResponse,
  MessageType,
  RoomId,
  RoomMetaData,
  State,
  UserMetaData,
  UserId,
} from "@/api/ChatApi";
import Loading from "@/components/Loading";
import ChatLogin from "@/components/chat/ChatLogin";
import RoomNavigator from "@/components/chat/RoomNavigator";
import ChatSession from "@/components/chat/ChatSession";

const OPTIONS = { retryOnError: true } as const;

const CHAT_API_URL = "wss://chat-api.mcajben.com/chat";

export default function Chat() {
  const [state, setState] = useState<State>({ t: "unauthenticated" });

  const [availableRooms, setAvailableRooms] = useState<RoomMetaData[]>([]);

  const [knownUsers, setKnownUsers] = useState<Record<UserId, UserMetaData>>(
    {},
  );

  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const { sendJsonMessage, lastJsonMessage, readyState } =
    useWebSocket<ChatApiResponse | null>(CHAT_API_URL, OPTIONS);

  useEffect(() => {
    console.log("----->>>>>", lastJsonMessage);
    switch (lastJsonMessage?.type) {
      case "create_user":
      case "login_user":
        if (lastJsonMessage.success) {
          setState({ t: "authenticated" });
          sendJsonMessage({ type: "get_rooms", filter: "" });
        }
        break;
      case "get_rooms":
        setAvailableRooms(lastJsonMessage.rooms);
        break;
      case "create_room":
      case "join_room":
        if (lastJsonMessage.success) {
          setState({ t: "in_room" });
        }
        break;
      case "get_user":
        setKnownUsers((prev) => ({
          ...prev,
          [lastJsonMessage.user_id]: {
            id: lastJsonMessage.user_id,
            username: lastJsonMessage.username,
          },
        }));
        break;
      case "get_room":
        break;
      case "leave_room":
        setState({ t: "authenticated" });
        break;
      case "receive_message":
        if (!Object.hasOwn(knownUsers, lastJsonMessage.user_id)) {
          sendJsonMessage({
            type: "get_user",
            user_id: lastJsonMessage.user_id,
          });
        }
        setMessages((prev) =>
          prev.concat([
            {
              type: MessageType.Message,
              timestamp: lastJsonMessage.timestamp,
              user_id: lastJsonMessage.user_id,
              message: lastJsonMessage.message,
            },
          ]),
        );
        break;
      case "receive_die_roll":
        if (!Object.hasOwn(knownUsers, lastJsonMessage.user_id)) {
          sendJsonMessage({
            type: "get_user",
            user_id: lastJsonMessage.user_id,
          });
        }
        setMessages((prev) =>
          prev.concat([
            {
              type: MessageType.DieRoll,
              timestamp: lastJsonMessage.timestamp,
              user_id: lastJsonMessage.user_id,
              roll_function: lastJsonMessage.roll_function,
              rolls: lastJsonMessage.rolls,
              result: lastJsonMessage.result,
            },
          ]),
        );
        break;
    }
  }, [sendJsonMessage, lastJsonMessage]);

  const onSendCreateUser = useCallback(
    (username: string, password: string) =>
      sendJsonMessage({ type: "create_user", username, password }),
    [sendJsonMessage],
  );

  const onSendLoginUser = useCallback(
    (username: string, password: string) =>
      sendJsonMessage({ type: "login_user", username, password }),
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

  const onSendDieRoll = useCallback(
    (roll_function: string) =>
      sendJsonMessage({ type: "send_die_roll", roll_function }),
    [sendJsonMessage],
  );

  const onExitRoom = useCallback(() => {
    sendJsonMessage({ type: "leave_room" });
  }, [sendJsonMessage]);

  if (readyState != ReadyState.OPEN) {
    return <Loading />;
  } else if (state.t === "unauthenticated") {
    return <ChatLogin onCreate={onSendCreateUser} onLogin={onSendLoginUser} />;
  } else if (state.t === "authenticated") {
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
        nickname={"test"}
        room={"room"}
        knownUsers={knownUsers}
        messages={messages}
        onSendMessage={onSendMessage}
        onSendDieRoll={onSendDieRoll}
        onExitRoom={onExitRoom}
      />
    );
  }
}
