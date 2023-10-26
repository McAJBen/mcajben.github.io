"use client";

import { useCallback, useState } from "react";
import { RoomId, RoomMetaData } from "@/api/ChatApi";

type Props = {
  rooms: RoomMetaData[];
  onJoinRoom(id: RoomId): void;
  onCreateRoom(name: string): void;
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
          autoFocus
          className="m-2 rounded p-2 text-primary"
          type="text"
          onChange={onRoomNameChange}
          value={newRoomName}
          placeholder="New Room Name"
          onKeyDown={onRoomNameKeyDown}
        />
        <button
          onClick={onCreateRoom}
          className="m-2 rounded bg-primary p-2 text-white hover:bg-white hover:text-primary"
        >
          Create New Room
        </button>
      </div>
      {props.rooms.length > 0 && (
        <div>
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th>Name</th>
                <th># Users</th>
              </tr>
            </thead>
            <tbody>
              {props.rooms.map((room) => (
                <tr
                  key={room.id}
                  className="cursor-pointer odd:bg-primary-800"
                  onClick={() => props.onJoinRoom(room.id)}
                >
                  <td className="text-center">{room.name}</td>
                  <td className="text-center">{room.user_count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
