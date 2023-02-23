import { Layout, Menu } from "antd";
import Link from "next/link";
import { useState } from "react";
import { useMenuItems } from "../hooks/useMenuItems";
import { LogoStyled } from "./styles";

export const Sider = () => {
  const [collapsed, setCollapsed] = useState(false);
  const menuItems = useMenuItems();
  return (
    <Layout.Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <LogoStyled>
        <Link href="/">Kooperatywa</Link>
      </LogoStyled>
      <Menu theme="dark" mode="inline" items={menuItems} />
    </Layout.Sider>
  );
};
