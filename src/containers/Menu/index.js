import React from "react";

import { AiOutlineCalendar } from "react-icons/ai";
import { MdOutlineInsertChartOutlined } from "react-icons/md";
import { BsBriefcase } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { MdOutlinePermContactCalendar } from "react-icons/md";

import { useLocation, useNavigate } from "react-router-dom";

import logo from "../../assets/images/logo.png";

import "./Sidebar.css";

const LinkItems = [
  {
    icon: AiOutlineHome,
    title: "Home",
    path: "/home",
  },
  {
    icon: BsBriefcase,
    title: "Brief",
    path: "/brief",
  },
  {
    icon: MdOutlinePermContactCalendar,
    title: "Contact",
    path: "/contact",
  },
  {
    icon: BiMessageDetail,
    title: "Message",
    path: "/message",
  },
  {
    icon: AiOutlineCalendar,
    title: "Calendar",
    path: "/calendar",
  },
  {
    icon: MdOutlineInsertChartOutlined,
    title: "Chart",
    path: "/chart",
  },
];

export default function Sidebar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div
      className="d-none d-sm-flex flex-column justify-content-start
		 px-3 sidebar"
      style={{ minWidth: "7%" }}
    >
      <div className="logo">
        <img src={logo} alt="logo" style={{ height: "100%" }} />
      </div>
      <div className="sidebar-linklist">
        {LinkItems.map((link, index) => (
          <div
            key={`sidebar-link-${index}`}
            className={`d-flex flex-row align-items-center gap-2 sidebar-link
						${pathname === link.path ? "sidebar-link-selected" : ""}`}
            onClick={() => {
              navigate(link.path);
            }}
          >
            <link.icon size={24} />
          </div>
        ))}
      </div>
    </div>
  );
}
