import React from "react";
import { Outlet } from "react-router-dom";

import Menu from "./Menu";
import Footer from "../containers/Footer";

function Layout() {
  return (
    <div
      className="d-flex flex-row justify-content-start"
      style={{ flex: 1, minHeight: "100vh" }}
    >
      <Menu />
      <div
        className="d-flex flex-column justify-content-between"
        style={{ minWidth: "90%" }}
      >
        <Footer type="header" />
        <Outlet />
        <Footer type="footer" />
      </div>
    </div>
  );
}

export default Layout;
