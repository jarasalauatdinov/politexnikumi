import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { Flex, Stack } from "@mantine/core";
import { AuthContext } from "../../../context/auth-context";


const Admin = () => {
  const { isAuth } = useContext(AuthContext)

  if (!isAuth) {
    return <Navigate to="/login" replace />
  }

  return (
    <>
      <Flex>
        <Sidebar />
        <Stack>
          <Header />
          <Outlet />
        </Stack>
      </Flex>
    </>
  );
};

export default Admin;
