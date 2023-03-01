import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { GlobalStorage } from "./GlobalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStorage>
      <App />
    </GlobalStorage>
  </React.StrictMode>,
);
