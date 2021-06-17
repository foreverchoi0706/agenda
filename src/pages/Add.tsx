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

  const [date, setDate] = useState({
    start: null,
    end: null,
  });

  const [label, setLabel] = useState<string | null>(null);

  const selectDate = (
    date: Date | [Date, Date],
    e: React.SyntheticEvent<any, Event>
  ) => {
    console.log(e.target);
  };

  const selectLabel = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setLabel(e.target.value);
  };

  return (
    <article className="w-full h-full absolute z-50 flex justify-center items-center">
      <form className="flex flex-col gap-3 p-3 bg-white rounded-sm">
        <h2 className="text-blue-500 font-bold text-center">
          다음으로 일정을 추가할 수 있어요.
        </h2>
        <div className="flex">
          <DatePicker
            name="start"
            locale="ko"
            onChange={selectDate}
            placeholderText="일정시작일"
          />
          ~
          <DatePicker
            name="end"
            locale="ko"
            onChange={selectDate}
            placeholderText="일정종료일"
          />
        </div>

        <input
          className="focus:outline-none border-2 border-gray-300"
          type="text"
          placeholder="일정 타이틀은 필수예요."
        />

        <div className="flex justify-between border-2 border-gray-300">
          <select className="focus:outline-none" onChange={selectLabel}>
            <option>선택</option>
            <option value="1">투두</option>
            <option value="2">정기</option>
            <option value="3">중요</option>
          </select>
          <span>{label}</span>
        </div>

        <textarea
          className="focus:outline-none border-2 border-gray-300 max-h-96"
          placeholder="상세 일정은 선택이예요."
        ></textarea>
        <div className="">
          <button
            className="bg-blue-500 text-sm text-white w-1/2 p-2"
            type="submit"
            onClick={() => dispatch({ type: CLICK_ADD })}
          >
            일정 추가하기
          </button>
          <button
            className="bg-white text-sm w-1/2 p-2"
            type="submit"
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
