import React, { useRef, useState } from "react";
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
import { AgendaEvent } from "../types/Agenda";

registerLocale("ko", ko);

const Add = () => {
  const { themeColor, resource } = useSelector(
    (root: RootState) => root.user,
    shallowEqual
  );

  const dispatch = useDispatch();

  const [event, setEvent] = useState<AgendaEvent>({
    title: "",
    start: new Date(),
    end: new Date(),
    resource: {
      position: resource!.position,
      addressName: resource!.addressName,
      placeName: resource!.placeName,
      tags: [],
    },
  });

  const refInput = useRef<HTMLInputElement | null>(null);

  //이벤트추가시
  const addEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (event.start.getTime() > event.end.getTime()) {
      alert("일정의 시작 일자는 종료일자보다 클 수 없어요.");
      return;
    }
    dispatch({
      type: ADD_EVENT,
      payload: event,
    });
    dispatch({
      type: CLICK_ADD,
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

  //태그추가시
  const addTag = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (
      e.key === "Enter" &&
      event.resource.tags!.length < 3 &&
      e.currentTarget.value
    ) {
      setEvent({
        ...event,
        resource: {
          ...event.resource,
          tags: event.resource.tags!.concat(e.currentTarget.value),
        },
      });
      if (refInput.current) refInput.current.value = "";
    }
  };

  //태그삭제시
  const delTag = (arg: number): void => {
    setEvent({
      ...event,
      resource: {
        ...event.resource,
        tags: event.resource.tags!.filter((_, index) => index !== arg),
      },
    });
  };

  return (
    <article
      className={`absolute z-50 border-2 border-${themeColor} rounded-md`}
    >
      <form
        className="flex flex-col gap-3 p-3 bg-white"
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
            id="start"
            required
            locale="ko"
            selected={event.start}
            dateFormat="yyyy-MM-dd"
            onChange={(date: Date) =>
              setEvent({
                ...event,
                start: date,
              })
            }
          />
          <strong>부터</strong>
          <DatePicker
            className="text-center border-2 border-gray-300"
            id="end"
            required
            locale="ko"
            dateFormat="yyyy-MM-dd"
            selected={event.end}
            onChange={(date: Date) =>
              setEvent({
                ...event,
                end: date,
              })
            }
          />
          <strong>까지</strong>
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
          일정에 대한 태그를 달 수 있어요. ex) 긴급,정기,투두
        </strong>
        <div className="flex justify-between border-2 border-gray-300">
          <input
            name="tags"
            className="focus:outline-none"
            type="text"
            autoComplete="off"
            onChange={inputEvent}
            onKeyPress={addTag}
            ref={refInput}
          />
          <div className="flex-grow flex justify-around">
            {event.resource.tags!.map((tag, index) => (
              <span
                className={`bg-${themeColor} rounded-md text-white px-3 my-1 text-xs cursor-pointer`}
                key={index}
                onClick={() => delTag(index)}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div>
          <button
            className={`bg-${themeColor} agenda-btn text-sm text-white w-1/2 p-2`}
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
