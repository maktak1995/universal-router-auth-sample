import React from "react";
import UniversalRouter from "universal-router";
import { AuthLayout } from "../components/layout/AuthLayout";
import { Login } from "../components/pages/Login";
import { UserStatus } from "../components/pages/UserStatus";

const routes = {
  path: "",
  async action({ next }: { next: any }) {
    const children = await next();
    return <AuthLayout>{children}</AuthLayout>;
  },
  children: [
    {
      path: "",
      async action() {
        return <UserStatus />;
      },
    },
    {
      path: "/login",
      async action() {
        return <Login />;
      },
    },
    {
      path: "/userStatus",
      async action() {
        return <UserStatus />;
      },
    },
  ],
};

export const router = new UniversalRouter(routes);
