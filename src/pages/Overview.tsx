import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
//db
import localforage from "../db/localforage";
//interface
import { AgendaEvent } from "../types/Agenda";
//reducer
import { RootState } from "../reducers/root";

const data = {
  labels: ["1번 막대", "2번 막대", "3번 막대"],
  datasets: [
    {
      data: ["1번 막대", "2번 막대", "3번 막대"],
      lineTension: 0,
      backgroundColor: "rgba(15, 107, 255, 0.1)",
      borderWidth: 1,
      borderColor: "#0f6bff",
      fill: true,
    },
  ],
};

const Overview = () => {
  const { themeColor } = useSelector((root: RootState) => root.user);

  const [events, setEvents] = useState<Array<AgendaEvent>>([]);

  useEffect(() => {
    //이벤트가져오기
    localforage.getItem("EVENT").then((value: any) => {
      setEvents(() => value);
    });
  }, []);

  return (
    <article className="bg-gray-200 h-screen overflow-y-scroll flex flex-col">
      {events.map((event) => (
        <section className="bg-white">
          <Line
            type="line"
            data={data}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                },
                title: {
                  display: true,
                  text: event.start.toISOString().slice(0, 10),
                },
              },
            }}
          />
        </section>
      ))}
    </article>
  );
};

export default Overview;
