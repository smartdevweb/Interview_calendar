import React from "react";

import CreateBtn from "../CreateBtn";
import OptionContainer from "../OptionContainer";

import "./FilterBar.css";

export default function FilterBar() {
  return (
    <>
      <div
        className="d-none d-sm-flex flex-column  px-3 align-items-center"
        style={{
          backgroundColor: "white",
          minWidth: "15%",
          height: "90vh",
          justifyContent: "flex-start",
        }}
      >
        <div className="page-title" style={{ position: "relative" }}>
          <h3>Interview Calendar</h3>
        </div>
        <div className="d-flex flex-column justify-content-between flex-direction:">
          <CreateBtn />
          <OptionContainer title="Calendars" />
          <OptionContainer title="Interview Status" />
          <OptionContainer title="Interview Type" />
        </div>
      </div>
    </>
  );
}
