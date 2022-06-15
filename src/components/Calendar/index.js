import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";

import CalendarBtn from "./CalendarBtn";
import ScheduleInfo from "./ScheduleInfo";

import { TESTDATA_SCHEDULE } from "../../constants/testdata";
import { TESTDATA_DAY } from "../../constants/testdata";

import "./Calendar.css";
import { useSelector } from "react-redux";

const dayOfweek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const Navigation = () => {
  return (
    <div
      style={{
        fontSize: "2rem",
        margin: "0 20px",
        alignItems: "center",
        display: "flex",
        color: "DodgerBlue",
        cursor: "pointer",
      }}
    >
      <MdArrowBackIos style={{ margin: "0 15px" }} />
      <MdArrowForwardIos style={{ margin: "0 15px" }} />
    </div>
  );
};
// I made this function for generating schedules from test data.Becasuse there aren't any database of interview schedule, so I had to use this method.
// Although I could made schedules manually but I thought that's not a professional way

const DailySchedule = ({ counts }) => {
  return (
    <>
      {Array.from({
        length: counts > 2 ? 2 : counts,
      }).map((_, index) => (
        <ScheduleInfo
          key={index}
          timeFrom={TESTDATA_SCHEDULE[counts % 7][index].timeFrom}
          timeTo={TESTDATA_SCHEDULE[counts % 7][index].timeTo}
          type={TESTDATA_SCHEDULE[counts % 7][index].type}
          status={TESTDATA_SCHEDULE[counts % 7][index].status}
          candidate="Eric Hahn"
        />
      ))}
      {counts > 2 ? (
        <p style={{ fontSize: "8px", marginLeft: "10px" }}>+2 Interivews</p>
      ) : null}
    </>
  );
};

export default function Calendar() {
  const showWeekend = useSelector((state) => state.interviewPage.weekEnd);
  console.log(showWeekend);
  return (
    <div className="d-flex flex-column flex-start " style={{ width: "80%" }}>
      <div className="d-flex flex-row flex-start date-select ">
        <div className="d-flex">
          <CalendarBtn title="Today" />
          <Navigation />
          <span style={{ fontSize: "1.6vw", fontWeight: "600" }}>
            June &nbsp;&nbsp;&nbsp;2022
          </span>
        </div>
        <CalendarBtn title="Month" selectIcon="icon" clickEvent="filterdays" />
      </div>
      <div style={{ overflowX: "auto" }}>
        <table>
          <tbody>
            <tr>
              {dayOfweek.map((day, index) => (
                <td key={index} style={{ border: "none", height: "20px" }}>
                  <span className="weekdays">{day}</span>
                </td>
              ))}
            </tr>
            {Array.from({ length: 5 }).map((_, week) => (
              <tr>
                {Array.from({ length: 7 }).map((_, days) => (
                  <td
                    key={days}
                    className={
                      ((days + 1) % 6 === 0 || (days + 1) % 7 === 0) &&
                      !showWeekend
                        ? "weekend"
                        : ""
                    }
                  >
                    <>
                      <div style={{ color: "grey", marginLeft: "14px" }}>
                        {week * 7 + days + 1 > 9 ? null : 0}
                        {week * 7 + days + 1 < 32 ? week * 7 + days + 1 : null}
                      </div>
                      {week * 7 + days + 1 < 32 ? (
                        <DailySchedule
                          counts={TESTDATA_DAY[week * 7 + days + 1]}
                        />
                      ) : null}
                    </>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
