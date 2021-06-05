import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

const myEventsList: any[] = [];

const About = () => {
  return (
    <article>
      <Calendar
        style={{ height: "100vh" }}
        localizer={localizer}
        events={myEventsList}
      />
    </article>
  );
};

export default About;
