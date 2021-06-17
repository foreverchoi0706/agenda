import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
//reducers
import { SIGN_OUT, CLICK_CONFIG } from "../reducers/user";

const theme = "bg-red-500";

const Config = () => {
  const dispatch = useDispatch();

  const signOut = () => {
    if (confirm("계정이 삭제되고 초기화면으로 이동해요. 계속하시겠어요?")) {
      dispatch({ type: SIGN_OUT });
    }
  };

  return (
    <article className="absolute z-50 flex">
      <form className="flex flex-col gap-3 p-3 bg-white rounded-sm">
        <div className="flex">
          <FontAwesomeIcon
            className="cursor-pointer ml-auto"
            icon={faTimes}
            onClick={() => dispatch({ type: CLICK_CONFIG })}
          />
        </div>
        <hr />
        <div>
          <h3 className="border-l-4 pl-2 border-blue-500 mb-2">테마 색 변경</h3>
          <div className="text-blue-500 text-sm font-bold my-2">
            테마색을 변경할 수 있어요.
          </div>
          <ul className="grid grid-cols-4 grid-rows-2 justify-items-center gap-5">
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
          <h3 className="border-l-4 pl-2 border-blue-500">계정삭제하기</h3>
          <div className="text-red-500 text-sm font-bold my-2">
            계정 및 모든 일정이 삭제되요. 계속하시겠어요?
          </div>
          <button className="agenda-btn my-auto" onClick={signOut}>
            네 삭제할게요
          </button>
        </div>
      </form>
    </article>
  );
};

export default Config;
