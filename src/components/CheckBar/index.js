import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { BiDotsVerticalRounded } from "react-icons/bi";

import { setFilter } from "../../state/interviewPage/actions";

import "./Checkbox.css";

export default function Optionbox({
  checkboxColor,
  dotColor,
  optionName,
  menulist,
  Icon,
  id,
  type,
}) {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(false);

  const handleChanged = () => {
    let filter;
    if (type === "interviewStatus") {
      if (optionName === "All") {
        filter = "allStatus";
      } else {
        filter = optionName.toLowerCase().slice(0, -3);
      }
    } else if (type === "interviewType") {
      if (optionName === "All") {
        filter = "allType";
      } else {
        filter = optionName.toLowerCase();
      }
    }
    dispatch(setFilter({ filterName: filter, flag: !selected }));
    setSelected(!selected);
  };
  return (
    <div style={{ marginBottom: "10px" }}>
      <input
        type="checkbox"
        className="custom-control-input my-checkbox"
        value={optionName}
        checked={selected}
        onClick={handleChanged}
        id={id}
      />
      <label for={id} style={{ fontSize: "1rem" }}>
        {dotColor !== undefined ? (
          <>
            <span className="dot" style={{ backgroundColor: dotColor }}></span>
          </>
        ) : Icon !== undefined ? (
          <span style={{ marginRight: "4px" }}>
            <Icon />
          </span>
        ) : null}
        {optionName}
        {menulist ? (
          <BiDotsVerticalRounded
            style={{
              fontSize: "1.2rem",
              marginLeft: "10px",
              cursor: "pointer",
            }}
          />
        ) : null}
      </label>
    </div>
  );
}
