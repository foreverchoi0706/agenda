import React from "react";
import { useDispatch } from "react-redux";
//reducers
import { SIGN_OUT } from "../reducers/user";

const theme = "bg-red-500";

const Config = () => {
  const dispatch = useDispatch();

  const signOut = () => {
    if (confirm("test")) {
      dispatch({ type: SIGN_OUT });
    }
  };

  return (
    <article className="w-full h-full absolute z-50 flex justify-center items-center">
      <form className="flex flex-col p-5 bg-white rounded-sm">
        <h2 className="text-center">설정</h2>

        <div>
          <h3 className="border-l-4 border-blue-500">테마 색 변경</h3>
          <ul className="grid grid-cols-4 grid-rows-2 gap-3">
            <li className={`w-8 h-8 cursor-pointer ${theme}`} />
            <li className="w-8 h-8 cursor-pointer bg-yellow-500" />
            <li className="w-8 h-8 cursor-pointer bg-green-500" />
            <li className="w-8 h-8 cursor-pointer bg-blue-500" />
            <li className="w-8 h-8 cursor-pointer bg-indigo-500" />
            <li className="w-8 h-8 cursor-pointer bg-purple-500" />
            <li className="w-8 h-8 cursor-pointer bg-gray-500" />
            <li className="w-8 h-8 cursor-pointer bg-pink-500" />
          </ul>
        </div>

        <div>
          <h3 className="border-l-4 border-blue-500">계정삭제하기</h3>
          <button className="agenda-btn" onClick={signOut}>
            계정삭제하기
          </button>
        </div>
      </form>
    </article>
  );
};

export default Config;
