import React from "react";
import { useSelector } from "react-redux";

import { BsPerson } from "react-icons/bs";
import { IoMdPhonePortrait } from "react-icons/io";
import { RiComputerLine } from "react-icons/ri";

import avatar from "../../../assets/images/avatar.jpg";
import "./ScheduleInfo.css";

export default function ScheduleInfo({
  status,
  timeFrom,
  timeTo,
  type,
  candidate,
}) {
  if (type === undefined) {
    type = "available";
  }
  const interviewStatus = useSelector((state) => state.interviewPage[status]);
  const interviewType = useSelector((state) => state.interviewPage[type]);

  return (
    <div
      className={
        interviewStatus || interviewType
          ? "status-container"
          : "status-container status-container-hidden"
      }
    >
      <div
        className="status-bar"
        style={{
          backgroundColor:
            status === "confirmed"
              ? "LimeGreen"
              : status === "pending"
              ? "Peru"
              : status === "rescheduled"
              ? "DodgerBlue"
              : "grey",
        }}
      ></div>
      <span>
        {status === "available" ? null : type === "person" ? (
          <BsPerson style={{ marginRight: "10px" }} />
        ) : type === "online" ? (
          <RiComputerLine style={{ marginRight: "10px" }} />
        ) : type === "phone" ? (
          <IoMdPhonePortrait style={{ marginRight: "10px" }} />
        ) : null}
      </span>

      <div className="d-flex flex-column flex-start item-align-center">
        <p
          style={{
            fontWeight: "600",
            marginTop: "0.4rem",
            marginBottom: "0",
            fontSize: "13px",
          }}
        >
          {status === "available" ? (
            <span>Available(A)</span>
          ) : (
            <span>
              {candidate}
              {status === "confirmed"
                ? "(C)"
                : status === "pending"
                ? "(P)"
                : status === "rescheduled"
                ? "(R)"
                : null}
            </span>
          )}
        </p>
        <p
          style={{
            color: "grey",
            marginTop: "0",
            fontSize: "10px",
          }}
        >
          {timeFrom} - {timeTo}
        </p>
      </div>
      {status !== "available" ? (
        <div className="d-flex avatar">
          <img
            src={avatar}
            alt="avatar"
            style={{ width: "100%", borderRadius: "50%" }}
          />
        </div>
      ) : null}
    </div>
  );
}
