import React, { useState, useEffect } from "react";
import { Calendar as RBC, momentLocalizer } from "react-big-calendar";
//db
import localforage from "../db/localforage";
//interface
import { AgendaEvent } from "../types/Agenda";

import moment from "moment";

const localizer = momentLocalizer(moment);

const Calendar = () => {
  const [events, setEvents] = useState<Array<AgendaEvent>>([]);
  useEffect(() => {
    //이벤트가져오기
    localforage.getItem("EVENT").then((value: any) => {
      setEvents(() => value);
    });
  }, []);

  return (
    <article>
      <RBC
        className="h-screen"
        localizer={localizer}
        events={events}
        views={{ month: true }}
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
