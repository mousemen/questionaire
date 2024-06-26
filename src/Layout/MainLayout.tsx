import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { useRequest } from "ahooks";
import Logo from "../component/Logo";
import UserInfo from "../component/UserInfo";
import useLoadUserData from "../hooks/useLoadUserData";
import useNavePage from "../hooks/useNavePage";
import styles from "./MainLayout.module.scss";

const { Header, Content, Footer } = Layout;
const MainLayout: FC = () => {
  const { waitingUserData } = useLoadUserData();
  useNavePage(waitingUserData);
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.left}>
          <Logo></Logo>
        </div>
        <div className={styles.right}>
          <UserInfo />
        </div>
      </Header>
      <Layout className={styles.main}>
        <Content>{!waitingUserData && <Outlet />}</Content>
      </Layout>
      <Footer className={styles.footer}>
        问卷星 &copy;2023-present. Created by Zihao Guo
      </Footer>
    </Layout>
  );
};
export default MainLayout;
