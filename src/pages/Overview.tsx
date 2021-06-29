import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
//interface
import { AgendaEvent } from "../types/Agenda";
//reducer
import { RootState } from "../reducers/root";

const data = {
  labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
  datasets: [
    {
      data: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
      lineTension: 0,
      backgroundColor: "rgba(15, 107, 255, 0.1)",
      width: "100%"
    },
  ],
};

const Overview = () => {
  const { themeColor } = useSelector((root: RootState) => root.user);

  const [events, setEvents] = useState<Array<AgendaEvent>>([]);

  useEffect(() => {

  }, []);

  return (
    <article className="bg-gray-200 h-screen overflow-y-scroll flex flex-col">
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
            },
          },
        }}
      />
    </article>
  );
};

export default Overview;
