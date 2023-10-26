export type UserId = string;

export type RoomId = string;

export type Timestamp = string;

export type RoomMetaData = {
  id: RoomId;
  name: string;
  user_count: number;
};

export type RoomInfo = {
  id: RoomId;
  name: string;
  users: {
    id: RoomId;
    name: string;
  }[];
};

export enum MessageType {
  Message,
  DieRoll,
}

export type ChatMessage = (
  | {
      type: MessageType.Message;
      message: string;
    }
  | {
      type: MessageType.DieRoll;
      roll_function: string;
      result: number;
    }
) & {
  timestamp: Timestamp;
  user_id: UserId;
  user_name: string;
};

export type ChatApiResponse =
  | {
      type: "get_nickname";
      nickname: string;
    }
  | {
      type: "get_room_list";
      rooms: RoomMetaData[];
    }
  | {
      type: "room_info";
      id: RoomId;
      name: string;
      users: {
        id: RoomId;
        name: string;
      }[];
    }
  | {
      type: "receive_message";
      timestamp: Timestamp;
      session_id: UserId;
      message: string;
    }
  | {
      type: "receive_die_roll";
      timestamp: Timestamp;
      session_id: UserId;
      roll_function: string;
      result: number;
    };
