import React from "react";

import { BsPerson } from "react-icons/bs";
import { IoMdPhonePortrait } from "react-icons/io";
import { RiComputerLine } from "react-icons/ri";

import CheckBar from "../CheckBar";

import "./OptionContainer.css";

const StatusFilters = [
  {
    title: "All",
    menulist: false,
  },
  {
    title: "Confirmed(C)",
    dotColor: "LimeGreen",
    menulist: false,
  },
  {
    title: "Pending(P)",
    dotColor: "Peru",
    menulist: false,
  },
  {
    title: "Rescheduled(R)",
    dotColor: "DodgerBlue",
    menulist: false,
  },
  {
    title: "Available(A)",
    dotColor: "grey",
    menulist: false,
  },
];
const TypeFilters = [
  {
    title: "All",
  },
  {
    icon: BsPerson,
    title: "Person",
  },
  {
    icon: IoMdPhonePortrait,
    title: "Phone",
  },
  {
    icon: RiComputerLine,
    title: "Online",
  },
];
const InterviewStatus = () => {
  return (
    <>
      {StatusFilters.map((states, index) => (
        <CheckBar
          key={index}
          optionName={states.title}
          menulist={states.menulist}
          dotColor={states.dotColor}
          id={index}
          type="interviewStatus"
        />
      ))}
    </>
  );
};
const InterviewTypes = () => {
  return (
    <>
      {TypeFilters.map((states, index) => (
        <CheckBar
          key={states.title}
          optionName={states.title}
          menulist={states.menulist}
          Icon={states.icon}
          id={(index + 1) * 5}
          type="interviewType"
        />
      ))}
    </>
  );
};
export default function Optioncontainer({ title }) {
  return (
    <div className="filter-container">
      <div className="filter-title">{title}</div>
      <div className="options">
        {title === "Calendars" ? (
          <CheckBar optionName="Admin's Calendar" menulist={true} />
        ) : title === "Interview Status" ? (
          <InterviewStatus />
        ) : title === "Interview Type" ? (
          <InterviewTypes />
        ) : null}
      </div>
    </div>
  );
}
