import {
  faCalendar,
  faCalendarAlt,
  faLocationArrow,
  faSkull,
  faTag,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import produce from "immer";
import React, { ChangeEvent } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Event } from "react-big-calendar";
import { useSelector } from "react-redux";
//reducer
import { RootState } from "../reducers/root";

const dateToYyyymmddhh = (date: Date | undefined): string => {
  if (date == undefined) {
    return "";
  }
  return date.toString().slice(0, 10);
};

const Overview = () => {
  const [filter, setFilter] = useState<{ [index: string]: any }>({
    keyword: "",
    year: new Date().getFullYear(),
  });

  const { list } = useSelector((root: RootState) => root.event);

  const { themeColor } = useSelector((root: RootState) => root.user);

  const [radios, setRadios] = useState<Array<any>>([]);

  const [overViews, setOverViews] = useState<Array<Event>>([]);

  useEffect(() => {
    if (list && list.length) {
      // setRadios(
      //   list.map((item) => {
      //     return item.end?.toString().slice(0,4);
      //   })
      // );
      setOverViews(list);
      if (filter.keyword) {
        setOverViews(
          list.filter(
            (item) =>
              item.title?.includes(filter.keyword) ||
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
          className="px-2 focus:outline-none"
          name="keyword"
          type="text"
          placeholder="키워드를 입력해 주세요."
          autoComplete="off"
          value={filter.keyword}
          onChange={inputFilter}
        />
        {radios.length
          ? radios.map((item) => (
              <label>
                {item}&nbsp;
                <input type="radio" />
              </label>
            ))
          : null}
      </form>
      {overViews.length ? (
        overViews.map((item, index) => (
          <section key={index} className="p-2 md:p-4">
            <h2 className={`border-b-4 border-${themeColor} mb-4`}>
              <FontAwesomeIcon icon={faCalendarAlt} />
              &nbsp;
              {dateToYyyymmddhh(item?.start)} ~ {dateToYyyymmddhh(item?.end)}
            </h2>
            <h3 className="text-gray-500 text-sm">
              <a
                className="hover:underline"
                href={`https://map.kakao.com/link/to/${item.resource.placeName},${item.resource.position.Ma},${item.resource.position.La}`}
                target="_blank"
              >
                <FontAwesomeIcon icon={faLocationArrow} />
                &nbsp;{item.resource.addressName} [{item.resource.placeName}]
              </a>
            </h3>
            <h4 className="flex justify-between">
              {item.title}
              {item.resource.tags.length ? (
                <div>
                  <FontAwesomeIcon
                    className="text-gray-500 text-sm"
                    icon={faTags}
                  />
                  {item.resource.tags.map((item) => (
                    <span
                      className={`bg-${themeColor} rounded-md px-3 mx-1 text-white text-sm`}
                    >
                      {String(item)}
                    </span>
                  ))}
                </div>
              ) : null}
            </h4>
          </section>
        ))
      ) : (
        <>
          <h2 className="p-3 text-center text-gray-500 text-md">
            이런...이벤트가 없어요! &nbsp;
            <FontAwesomeIcon icon={faSkull} />
          </h2>
        </>
      )}
    </article>
  );
};

export default Overview;
