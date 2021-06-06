import React from "react";
import { useDispatch } from "react-redux";
import Calendar from "react-calendar";
//reducers
import { CLICK_ADD } from "../reducers/user";

const Add = () => {
  const dispatch = useDispatch();

  return (
    <article className="w-full h-full absolute z-50 flex justify-center items-center">
      <form className="flex flex-col p-5 bg-blue-100 rounded-sm">
        <h3>다음으로 일정을 추가합니다.</h3>
        <Calendar calendarType="US" />
        <input type="text" placeholder="일정을 입력해주세요" />
        <textarea></textarea>
        <div className="">
          <button
            className="agenda-btn w-1/2"
            type="submit"
            onClick={() => dispatch({ type: CLICK_ADD })}
          >
            일정 추가하기
          </button>
          <button
            className="agenda-btn w-1/2"
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
