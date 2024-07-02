import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./style/GlobalStyle";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer />
    <GlobalStyle />
    <Home />
  </React.StrictMode>
);
