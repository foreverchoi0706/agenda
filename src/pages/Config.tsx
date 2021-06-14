import React from "react";
import { useDispatch } from "react-redux";
import Calendar from "react-calendar";
//reducers
import { CLICK_CONFIG } from "../reducers/user";

const Config = () => {
  const dispatch = useDispatch();

  return (
    <article className="w-full h-full absolute z-50 flex justify-center items-center">
      <form className="flex flex-col p-5 bg-blue-100 rounded-sm">
        <h2 className="text-center">다음으로 일정을 추가합니다.</h2>
        <Calendar calendarType="US" />
        <div>
          <label>
            긴급
            <input name="division" type="radio" />
          </label>
          <label>
            긴급
            <input name="division" type="radio" />
          </label>
          <label>
            긴급
            <input name="division" type="radio" />
          </label>
        </div>
        <input type="text" placeholder="일정을 입력해주세요" />
        <textarea></textarea> 
      </form>
    </article>
  );
};

export default Config;
