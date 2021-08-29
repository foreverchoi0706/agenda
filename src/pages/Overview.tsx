import produce from "immer";
import React, { ChangeEvent } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Event } from "react-big-calendar";
import { useSelector } from "react-redux";
//reducer
import { RootState } from "../reducers/root";
import { AgendaEvent } from "../types/Agenda";

const setZero = (number: number): string => (number < 10 ? "0" : "" + number);

const dataToYyyymmddhh = (date: Date | undefined): string => {
  if (date == undefined) {
    return "정보가 없습니다.";
  }
  const temp = new Date(date);
  return `${temp.getFullYear()}-${setZero(temp.getMonth() + 1)}-${setZero(
    temp.getDate()
  )} / ${setZero(temp.getHours())}:${setZero(temp.getMinutes())}`;
};

const Overview = () => {
  const [filter, setFilter] = useState<{ [index: string]: any }>({
    keyword: "",
    year: new Date().getFullYear(),
  });

  const { list } = useSelector((root: RootState) => root.event);

  const { themeColor } = useSelector((root: RootState) => root.user);

  const [data, setData] = useState<Array<Event>>([]);

  useEffect(() => {
    if (list && list.length) {
      setData(list);
      if (filter.keyword) {
        setData(
          list.filter(
            (item) =>
              item.resource.placeName?.includes(filter.keyword) ||
              item.resource.addressName?.includes(filter.keyword)
          )
        );
      }
    }
  }, [list, filter]);

  const inputFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(
      produce(filter, (draft) => {
        draft[e.target.name] = e.target.value;
      })
    );
  };

  return (
    <article className="bg-gray-200 h-screen overflow-x-hidden">
      <form className="flex gap-2 w-3/5 p-2 md:p-4">
        <input
          className="px-2"
          name="keyword"
          type="text"
          placeholder="키워드를 입력해 주세요."
          value={filter.keyword}
          onChange={inputFilter}
        />
        <label>
          2020&nbsp;
          <input type="radio" />
        </label>
        <label>
          2021&nbsp;
          <input type="radio" />
        </label>
      </form>
      {data && data.length
        ? data.map((item, index) => (
            <section key={index} className="p-2 md:p-4">
              <h2 className={`border-b-4 border-${themeColor} mb-4`}>
                {dataToYyyymmddhh(item?.end)} [{item.resource.placeName}]
              </h2>
              <div>{item.resource.addressName}</div>
            </section>
          ))
        : null}
    </article>
  );
};

export default Overview;
