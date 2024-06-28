import React from "react";
import ReactDOM from "react-dom/client";
import "@radix-ui/themes/styles.css";
import '@fontsource/ubuntu';
import { Theme } from "@radix-ui/themes";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme appearance="dark">
      <App />
    </Theme>
  </React.StrictMode>
);
