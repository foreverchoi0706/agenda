import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Calendar from "react-calendar";
import DatePicker, { registerLocale } from "react-datepicker";
//reducers
import { CLICK_ADD } from "../reducers/user";
import ko from "date-fns/locale/ko";

registerLocale("ko", ko);

const Add = () => {
  const dispatch = useDispatch();

  const [event, setEvent] = useState({
    title: "",
    detail: "",
    label: 0,
    start: new Date().toISOString().substring(0, 10),
    end: new Date().toISOString().substring(0, 10),
  });

  const [label, setLabel] = useState<string | null>(null);

  const addEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(event);
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

  //라벨선택시
  const selectLabel = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setLabel(e.target.value);
  };

  return (
    <article className="absolute z-50">
      <form
        className="flex flex-col gap-3 p-3 bg-white rounded-sm"
        onSubmit={addEvent}
      >
        <h2 className="text-blue-500 font-bold text-center">
          다음으로 일정을 추가할 수 있어요.
        </h2>
        <hr/>
        <div className="flex">
          <DatePicker
            name="start"
            value={event.start}
            placeholderText="일정시작일"
            locale="ko"
            onChange={selectDate}
          />
          ~
          <DatePicker
            name="end"
            value={event.end}
            placeholderText="일정종료일"
            locale="ko"
            onChange={selectDate}
          />
        </div>

        <input
          className="focus:outline-none border-2 border-gray-300"
          name="title"
          type="text"
          placeholder="일정 타이틀은 필수예요."
          onChange={inputEvent}
        />

        <div className="flex justify-between border-2 border-gray-300">
          <select
            className="focus:outline-none"
            name="label"
            onChange={selectLabel}
          >
            <option>선택</option>
            <option value="1">투두</option>
            <option value="2">정기</option>
            <option value="3">중요</option>
          </select>
          <span>{label}</span>
        </div>

        <textarea
          className="focus:outline-none border-2 border-gray-300 max-h-96"
          name="detail"
          placeholder="상세 일정은 선택이예요."
          value={event.detail}
          onChange={inputEvent}
        />
        <div>
          <button
            className="bg-blue-500 text-sm text-white w-1/2 p-2"
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
