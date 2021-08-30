import {
  faCalendarAlt,
  faLocationArrow,
  faSkull,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import produce from "immer";
import React, { ChangeEvent, FormEvent } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Event } from "react-big-calendar";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { PAN_TO } from "../reducers/event";
//reducer
import { RootState } from "../reducers/root";

const dateToYyyymmddhh = (date: Date | undefined): string => {
  if (date == undefined) {
    return "";
  }
  return date.toString().slice(0, 10);
};

const Overview = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const { list } = useSelector((root: RootState) => root.event);

  const { themeColor } = useSelector((root: RootState) => root.user);

  const [overViews, setOverViews] = useState<Array<Event>>([]);

  const [filter, setFilter] = useState<{ [index: string]: any }>({
    keyword: "",
    year: new Date().getFullYear(),
  });

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

  const goMarker = (resource: any) => {
    dispatch({
      type: PAN_TO,
      payload: resource,
    });
    history.push("/map");
  };

  return (
    <article className="bg-gray-200 h-screen overflow-x-hidden">
      <form
        className="flex gap-2 w-auto p-2 sm:w-2/5 md:p-4"
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
        }}
      >
        <input
          className="p-2 flex-grow rounded-md focus:outline-none"
          name="keyword"
          type="text"
          placeholder="키워드를 입력해 주세요."
          autoComplete="off"
          value={filter.keyword}
          onChange={inputFilter}
        />
        {/* {radios.length
          ? radios.map((item) => (
              <label>
                {item}&nbsp;
                <input type="radio" />
              </label>
            ))
          : null} */}
      </form>
      {overViews.length ? (
        overViews.map((item, index) => (
          <section key={index} className="p-2 md:p-4">
            <h2 className={`border-b-4 border-${themeColor} mb-4`}>
              <FontAwesomeIcon icon={faCalendarAlt} />
              &nbsp;
              {dateToYyyymmddhh(item?.start)} ~ {dateToYyyymmddhh(item?.end)}
            </h2>
            <h3 className="text-gray-500">
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
              <strong className="cursor-pointer hover:underline" onClick={() => goMarker(item.resource)}>
                {item.title}
              </strong>
              {item.resource.tags.length ? (
                <div className="flex  items-center ">
                  <FontAwesomeIcon className="text-gray-500 " icon={faTags} />
                  {item.resource.tags.map((item, index) => (
                    <span
                      key={index}
                      className={`bg-${themeColor} flex items-center rounded-md px-4 mx-1 text-white`}
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
