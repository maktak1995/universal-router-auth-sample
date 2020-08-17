import React, { useContext } from "react";
import { AuthContext } from "../../../auth";
import * as firebase from "firebase";
import { history } from "../../../routing/history";

const config = {
  apiKey: "AIzaSyC35I2RS-ya8tLBQLxnE3lJpM95Gt_ycl0",
  authDomain: "universal-router-auth-sample.firebaseapp.com",
  databaseURL: "https://universal-router-auth-sample.firebaseio.com",
  projectId: "universal-router-auth-sample",
  storageBucket: "universal-router-auth-sample.appspot.com",
  messagingSenderId: "914200619427",
  appId: "1:914200619427:web:a15bf0c02ef46cd6e9d216",
};

firebase.initializeApp(config);

export const Login: React.FunctionComponent = () => {
  const auth = useContext(AuthContext);

  const handleGoogleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
      await firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.SESSION);
      const result = await firebase.auth().signInWithPopup(provider);
      if (result.user === null) {
        throw new Error("firebaseからユーザ情報が取得できません。");
      }
      auth.loggedIn = true;
      auth.firebaseUser = result.user;
      history.push("/userStatus");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <button onClick={handleGoogleLogin}>ログイン</button>
    </div>
  );
};
