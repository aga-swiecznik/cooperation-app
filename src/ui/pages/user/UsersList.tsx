import { type User } from "@prisma/client";
import { Typography } from "antd";
import { useState } from "react";
import { UserListElement } from "./components/UserListElement";

const { Title } = Typography;

export const UsersList = ({ users }: { users: User[] }) => {
  const [usersList, setUsers] = useState(users);
  return (
    <>
      <Title>Użytkownicy</Title>
      {usersList.map((user) => (
        <UserListElement key={user.id} user={user} setUsers={setUsers} />
      ))}
    </>
  );
};
