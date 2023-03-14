import { type User } from "@prisma/client";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Row } from "antd";
import { useSession } from "next-auth/react";
import { Role } from "~/enums/Role";
import { api } from "~/utils/api";
import { RoleLabel } from "~/ui/components/RoleLabel";

interface UserListElementProps {
  user: User;
  setUsers: (users: User[]) => void;
}

export const UserListElement = ({ user, setUsers }: UserListElementProps) => {
  const { data } = useSession();
  const { isLoading, mutate: _changeRole } = api.user.changeRole.useMutation({
    onSuccess: (users: User[] | undefined) => {
      if (users) {
        setUsers(users);
      }
    },
    onError() {
      console.log("error");
    },
  });

  const changeRole = (role: Role) => {
    _changeRole({ id: user.id, role });
  };

  return (
    <Row align="middle">
      <Col xs={4} lg={2}>
        <Avatar size="large" src={user?.image} icon={<UserOutlined />} />
      </Col>
      <Col xs={8} lg={6}>
        {user.name}
      </Col>
      <Col xs={8} lg={6}>
        <RoleLabel role={user.role as Role} />
      </Col>
      {data?.user.role === Role.admin && (
        <Col xs={4} lg={10}>
          {user.role === Role.unauthorized ? (
            <Button loading={isLoading} onClick={() => changeRole(Role.user)}>
              Akceptuj
            </Button>
          ) : null}
          {user.role === Role.user ? (
            <>
              <Button
                loading={isLoading}
                onClick={() => changeRole(Role.unauthorized)}
              >
                Odrzuć
              </Button>{" "}
              <Button
                loading={isLoading}
                onClick={() => changeRole(Role.admin)}
              >
                Zrób adminem
              </Button>
            </>
          ) : null}
        </Col>
      )}
    </Row>
  );
};
