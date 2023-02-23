import { Avatar, Dropdown, MenuProps } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useSession } from "next-auth/react";

export const UserMenu = () => {
  const { data, status } = useSession();
  const items: MenuProps["items"] = [
    {
      label: "Log out",
      key: "logout",
      onClick: () => {},
    },
  ];

  if (status !== "authenticated") {
    return null;
  }

  return (
    <Dropdown menu={{ items }}>
      <>
        {data.user ? `Hello, ${data.user.name} ` : ""}
        <Avatar size="large" src={data.user?.image} icon={<UserOutlined />} />
      </>
    </Dropdown>
  );
};
