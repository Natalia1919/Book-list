import React from "react";
import ReactDOM from "react-dom/client";

import { ModeProvider } from "./context/ThemeContext";
import { Provider } from "react-redux";

import store from "./redux/store";

import "./index.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ModeProvider>
        <App />
      </ModeProvider>
    </Provider>
  </React.StrictMode>
);
