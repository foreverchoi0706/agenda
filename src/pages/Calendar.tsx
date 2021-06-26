import React from "react";
import { useSelector } from "react-redux";
import { Calendar as RBC, momentLocalizer, Messages } from "react-big-calendar";
import "moment/locale/ko"
import moment from "moment";
//rducers
import { RootState } from "../reducers/root";

const localizer = momentLocalizer(moment);

const message: Messages = {
  today: "▼",
  previous: "◀︎",
  next: "▶︎"
};

const Calendar = () => {

  const { themeColor } = useSelector((root: RootState) => root.user);

  const { list } = useSelector((root: RootState) => root.event);

  return (
    <article className="h-screen">
      <RBC
        localizer={localizer}
        events={list ? list : []}
        views={{ month: true }}
        messages={message}
        eventPropGetter={(event) => {
          const className = `bg-${themeColor}`;
          const style = {
            borderRadius: '0px',
          };
          return {
            className,
            style
          };
        }
        }
      />
    </article>
  );
};

export default Calendar;
