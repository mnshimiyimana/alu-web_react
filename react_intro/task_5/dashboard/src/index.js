import React from "react";
import ReactDOM from "react-dom/client";
import "./App/App.css";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";
import { Notifications } from "./Notifications/Notifications";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div id="root-notifications">
      <Notifications />
    </div>
    <App />
  </React.StrictMode>
);
reportWebVitals();
