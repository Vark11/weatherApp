import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./styles/index.css";
import Main from "./pages/Main";
import DayInfoPage from "./pages/DayInfoPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/main" />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/day/:params" element={<DayInfoPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
