import React from "react";
import { useSelector } from "react-redux";
import { Calendar as RBC, momentLocalizer } from "react-big-calendar";
import moment from "moment";
//rducers
import { RootState } from "../reducers/root";

const localizer = momentLocalizer(moment);

const message = {};

const Calendar = () => {
  const { list } = useSelector((root: RootState) => root.event);

  return (
    <article>
      <RBC
        className="h-screen"
        localizer={localizer}
        events={list ? list : []}
        views={{ month: true }}
        messages={message}
      />
    </article>
  );
};

export default Calendar;
