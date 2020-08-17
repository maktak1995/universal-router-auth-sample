import { createContext } from "react";
import firebase from "firebase/app";

interface User {
  loggedIn: boolean;
  firebaseUser: firebase.UserInfo | null;
}

export const AuthContext = createContext<User>({
  loggedIn: false,
  firebaseUser: null,
});
