import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./layout.jsx";
import { BrowserRouter } from "react-router-dom";
import "../css/main.css";

const basename = import.meta.env.VITE_BASENAME || "";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <Layout />
    </BrowserRouter>
  </React.StrictMode>
);
