import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./styles";
import { App } from "./App.tsx";

import "@/svcs/i18n";

const $root = document.getElementById("root")!;

ReactDOM.createRoot($root).render(
  <React.StrictMode>
    <>
      <GlobalStyles />
      <App />
    </>
  </React.StrictMode>,
);
