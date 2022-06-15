import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { GoTriangleDown } from "react-icons/go";

import "./Createbtn.css";

export default function CreateBtn() {
  return (
    <div className="create-btn">
      <span style={{ margin: "0 15px", cursor: "pointer" }}>
        <AiOutlinePlusCircle />
      </span>
      <span style={{ fontWeight: "600" }}>Create</span>
      <span style={{ margin: "0 15px", cursor: "pointer" }}>
        <GoTriangleDown />
      </span>
    </div>
  );
}
