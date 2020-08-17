import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { history } from "./routing/history";
import { router } from "./routing/router";

const render = async (location: any) => {
  const path = location.action ? location.location : location; //遷移が行われた場合locationの形式が変わる
  const element = await router.resolve(path);
  ReactDOM.render(
    <React.StrictMode>{element}</React.StrictMode>,
    document.getElementById("root"),
  );
};

render(history.location);
history.listen(render);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
