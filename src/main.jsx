import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home.jsx";
import { Router } from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
