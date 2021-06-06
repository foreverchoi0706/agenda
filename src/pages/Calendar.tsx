import React from "react";
import { Calendar as RBC, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

const myEventsList: any[] = [];

const Calendar = () => {
  return (
    <article>
      <RBC
        className="h-screen"
        localizer={localizer}
        events={myEventsList}
        messages={{
          today: "↩",
          previous: "↓",
          next: "↪",
        }}
      />
    </article>
  );
};

export default Calendar;
