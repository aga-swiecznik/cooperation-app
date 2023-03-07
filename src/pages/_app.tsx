import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";
import { ConfigProvider, Layout } from "antd";
import GlobalStyle from "~/ui/styles/globalStyles";
import { Sider } from "~/ui/components/Sider";
import { Header } from "~/ui/components/Header";
import { UserMenu } from "~/ui/components/UserMenu";
import { Content } from "~/ui/components/Content";
import { theme } from "~/ui/theme";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ConfigProvider theme={theme}>
        <GlobalStyle />
        <Layout hasSider style={{ minHeight: "100vh" }}>
          <Sider />
          <Layout>
            <Header>
              <UserMenu />
            </Header>
            <Content>
              <Component {...pageProps} />
            </Content>
            <Layout.Footer>@ kooperatywa / next.js</Layout.Footer>
          </Layout>
        </Layout>
      </ConfigProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
