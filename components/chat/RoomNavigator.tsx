"use client";

import { useCallback, useState } from "react";
import { RoomId, RoomMetaData } from "@/api/ChatApi";

type Props = {
  rooms: RoomMetaData[];
  onJoinRoom(id: RoomId): void;
  onCreateRoom(name: string): void;
  onLogout(): void;
};

export default function RoomNavigator(props: Props) {
  const [newRoomName, setNewRoomName] = useState("");

  const onCreateRoom = useCallback(
    () => props.onCreateRoom(newRoomName),
    [props, newRoomName],
  );

  const onRoomNameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setNewRoomName(event.target.value);
    },
    [],
  );

  const onRoomNameKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        onCreateRoom();
      }
    },
    [onCreateRoom],
  );

  return (
    <div className="flex flex-1 flex-col items-center p-3 text-white">
      <div>
        <input
          className="m-2 rounded p-2 text-primary"
          type="text"
          onChange={onRoomNameChange}
          value={newRoomName}
          placeholder="New Room Name..."
          onKeyDown={onRoomNameKeyDown}
        />
        <button
          onClick={onCreateRoom}
          className="m-2 rounded bg-primary p-2 text-white hover:bg-white hover:text-primary"
        >
          Create New Room
        </button>
        <button
          onClick={props.onLogout}
          className="m-2 rounded bg-primary p-2 text-white hover:bg-white hover:text-primary"
        >
          Logout
        </button>
      </div>
      {props.rooms.length > 0 && (
        <table className="w-full table-auto">
          <thead className="w-full">
            <tr>
              <th>Room Name</th>
              <th># Users</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.rooms.map((room) => (
              <tr key={room.id} className="odd:bg-primary-800">
                <td className="text-center">{room.name}</td>
                <td className="text-center">{room.user_count}</td>
                <td className="text-center">
                  <button
                    onClick={() => props.onJoinRoom(room.id)}
                    className="m-2 rounded bg-primary p-2 text-white hover:bg-white hover:text-primary"
                  >
                    Join
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
