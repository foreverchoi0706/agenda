import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Event } from "react-big-calendar";
import DatePicker, { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
//reducers
import { RootState } from "../reducers/root";
import { CLICK_ADD } from "../reducers/user";
import { ADD_EVENT } from "../reducers/event";

registerLocale("ko", ko);

const Add = () => {
  const { themeColor, resource } = useSelector(
    (root: RootState) => root.user,
    shallowEqual
  );

  const dispatch = useDispatch();

  const [event, setEvent] = useState<Event>({
    title: "",
    start: new Date(),
    end: new Date(),
    resource: {
      detail: "",
      tags: [],
    },
  });

  //이벤트추가시
  const addEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: ADD_EVENT,
      payload: event,
    });
  };

  //날짜선택시
  const selectDate = (
    date: Date | [Date, Date],
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setEvent({
      ...event,
      [e.target.name]: date,
    });
  };

  //텍스트입력시
  const inputEvent = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

  const addTag = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      console.dir(e.target);
      setEvent({
        ...event,
        resource: {
          tags: event.resource.tags.concat("test"),
        },
      });
    }
  };

  return (
    <article className="absolute z-50">
      <form
        className="flex flex-col gap-3 p-3 bg-gray-100 rounded-md"
        onSubmit={addEvent}
        onKeyPress={(e) => e.key === "Enter" && e.preventDefault()}
      >
        <h2 className={`text-${themeColor} font-bold text-center`}>
          다음으로 일정을 추가합니다.
        </h2>
        {resource?.position && (
          <React.Fragment>
            <h3 className="text-center">
              <strong>{resource.placeName}</strong>
            </h3>
            <h3>
              <FontAwesomeIcon icon={faLocationArrow} />
              <strong className="ml-3">{resource.addressName}</strong>
            </h3>
          </React.Fragment>
        )}
        <hr />
        <strong className={`border-${themeColor} border-l-4 pl-2`}>
          날짜를 선택해 주세요.
        </strong>
        <div className="flex">
          <DatePicker
            className="text-center border-2 border-gray-300"
            name="start"
            required
            locale="ko"
            value={event.start?.toISOString().substring(0, 10)}
            onChange={selectDate}
          />
          부터
          <DatePicker
            className="text-center border-2 border-gray-300"
            name="end"
            required
            locale="ko"
            value={event.end?.toISOString().substring(0, 10)}
            onChange={selectDate}
          />
          까지
        </div>

        <strong className={`border-${themeColor} border-l-4 pl-2`}>
          일정 타이틀은 필수예요.
        </strong>
        <input
          className="focus:outline-none border-2 border-gray-300"
          name="title"
          type="text"
          required
          autoComplete="off"
          onChange={inputEvent}
        />

        <strong className={`border-${themeColor} border-l-4 pl-2`}>
          일정에 대한 태그를 달 수 있어요.(3개까지)
        </strong>
        <div className="flex justify-between border-2 border-gray-300">
          <input
            name=""
            className="focus:outline-none"
            type="text"
            onChange={inputEvent}
            onKeyPress={addTag}
          />
          <span></span>
        </div>

        <strong className={`border-${themeColor} border-l-4 pl-2`}>
          상세 일정은 선택이예요.
        </strong>
        <textarea
          className="focus:outline-none border-2 border-gray-300 max-h-96"
          name="detail"
          value={event.resource.detail}
          onChange={inputEvent}
        />
        <div>
          <button
            className={`bg-${themeColor} text-sm text-white w-1/2 p-2`}
            type="submit"
          >
            일정 추가하기
          </button>
          <button
            className="bg-white text-sm w-1/2 p-2"
            type="button"
            onClick={() => dispatch({ type: CLICK_ADD })}
          >
            취소
          </button>
        </div>
      </form>
    </article>
  );
};

export default Add;
