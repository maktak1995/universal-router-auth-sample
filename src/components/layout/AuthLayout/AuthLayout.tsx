import React, { useContext } from "react";
import { AuthContext } from "../../../auth";
import { history } from "../../../routing/history";

//認可の状態を管理するコンポーネント
export const AuthLayout: React.FunctionComponent = ({ children }) => {
  const auth = useContext(AuthContext);

  if (!auth.loggedIn && history.location.pathname !== "/login") {
    history.push("/login");
  }

  return <div>{children}</div>;
};
