import React, { useContext } from "react";
import { AuthContext } from "../../../auth";

export const UserStatus: React.FunctionComponent = () => {
  const auth = useContext(AuthContext);
  return (
    <div>
      {auth.firebaseUser ? (
        <div>
          <p>UserName: {auth.firebaseUser.displayName}</p>
          <p>UserEmail: {auth.firebaseUser.email}</p>
        </div>
      ) : (
        <div>
          <p> User Data is not found. </p>
        </div>
      )}
    </div>
  );
};
