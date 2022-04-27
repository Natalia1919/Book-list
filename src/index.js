import React from "react";
import ReactDOM from "react-dom/client";

import { ModeProvider } from "./context/ThemeContext";

import "./index.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ModeProvider>
      <App />
    </ModeProvider>
  </React.StrictMode>
);
