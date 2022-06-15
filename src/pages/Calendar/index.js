import React from "react";

import FilterBar from "../../components/FilterBar";
import Calendar from "../../components/Calendar";
import "./Calendar.css";

function Create() {
  return (
    <>
      <div className="d-flex flex-row flex-start item-align-center schedule-container">
        <FilterBar />
        <Calendar />
      </div>
    </>
  );
}

export default Create;
