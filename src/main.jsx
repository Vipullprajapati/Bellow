import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// import App from "./App";
// import "./index.css";

const rootEl = document.querySelector("#app");
const root = createRoot(rootEl);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
