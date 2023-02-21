import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import PopupPropvider from "./contexts/PopupProvider";
import "./css/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <PopupPropvider>
    <App />
  </PopupPropvider>
);
