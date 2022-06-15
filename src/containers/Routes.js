import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Calendar from "../pages/Calendar";

import Layout from "./Layout";

export default function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/calendar" exact element={<Calendar />} />
        <Route index element={<Navigate replace to="/calendar" />} />
        <Route path="*" element={<Navigate replace to="/calendar" />} />
      </Route>
    </Routes>
  );
}
