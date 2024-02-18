export type UserId = string;

export type RoomId = string;

export type Timestamp = number;

export type State =
  | {
      t: "unauthenticated";
    }
  | {
      t: "authenticated";
      // username: string;
    }
  | {
      t: "in_room";
    };

export type RoomMetaData = {
  id: RoomId;
  name: string;
  user_count: number;
};

export type UserMetaData = {
  id: UserId;
  username: string;
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
      rolls: string;
      result: number;
    }
) & {
  timestamp: Timestamp;
  user_id: UserId;
};

export type ChatApiResponse =
  | {
      type:
        | "create_user"
        | "login_user"
        | "create_room"
        | "join_room"
        | "send_die_roll"
        | "send_message";
      success: boolean;
    }
  | {
      type: "logout_user" | "leave_room";
    }
  | {
      type: "get_user";
      user_id: string;
      username: string;
    }
  | {
      type: "get_rooms";
      rooms: RoomMetaData[];
    }
  | {
      type: "get_room";
      name: string;
      users: UserMetaData[];
    }
  | {
      type: "receive_message";
      timestamp: Timestamp;
      user_id: UserId;
      message: string;
    }
  | {
      type: "receive_die_roll";
      timestamp: Timestamp;
      user_id: UserId;
      roll_function: string;
      rolls: string;
      result: number;
    };
