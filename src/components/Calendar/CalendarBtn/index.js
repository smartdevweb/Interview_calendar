import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { GoTriangleDown } from "react-icons/go";
import { AiOutlineCheck } from "react-icons/ai";

import "./CalendarBtn.css";
import { setFilter } from "../../../state/interviewPage/actions";
export default function CalendarBtn({ title, selectIcon, clickEvent }) {
  const dispatch = useDispatch();
  const [showWeekend, setShowWeekend] = useState(false);
  let n = useSelector((state) => state.interviewPage);
  const toggleFilterdate = () => {
    document.getElementById("dropdown").classList.toggle("dropdown-show");
    console.log(n);
  };
  return (
    <>
      <div style={{ display: "inline-block" }}>
        <div
          className="calendar-btn"
          onClick={clickEvent === "filterdays" ? toggleFilterdate : null}
        >
          <span style={{ margin: "0 10px" }}>{title}</span>
          {selectIcon !== undefined ? (
            <>
              <span style={{ fontSize: "0.9rem", position: "relative" }}>
                <GoTriangleDown />
              </span>
            </>
          ) : null}
        </div>
        {selectIcon !== undefined ? (
          <div id="dropdown" className="dropdown-content">
            <div className="dropdown-hover" onClick={toggleFilterdate}>
              Day
            </div>
            <div className="dropdown-hover" onClick={toggleFilterdate}>
              Week
            </div>
            <div className="dropdown-hover" onClick={toggleFilterdate}>
              Month
            </div>
            <div
              className="dropdown-hover border"
              onClick={() => {
                setShowWeekend((showWeekend) => !showWeekend);
                dispatch(
                  setFilter({
                    filterName: "weekEnd",
                    flag: !showWeekend,
                  })
                );
              }}
            >
              {showWeekend ? (
                <AiOutlineCheck
                  style={{ fontSize: "1.6rem", marginRight: "10px" }}
                />
              ) : null}
              <span>Show weekend</span>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
