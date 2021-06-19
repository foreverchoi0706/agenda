import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
//reducers
import { SIGN_OUT, CLICK_CONFIG, CHANGE_THEME_COLOR } from "../reducers/user";

const Config = () => {
  const dispatch = useDispatch();

  //로그아웃
  const signOut = () => {
    if (confirm("계정이 삭제되고 초기화면으로 이동해요. 계속하시겠어요?")) {
      dispatch({ type: SIGN_OUT });
    }
  };

  const clickColor = (e: React.MouseEvent<HTMLLIElement>) => {
    console.log(e);
  };

  const themeColors = [
    {
      id: "bg-red-500",
      className: "w-8 h-8 cursor-pointer",
    },
    {
      id: "bg-yellow-500",
      className: "w-8 h-8 cursor-pointer",
    },
    {
      id: "bg-green-500",
      className: "w-8 h-8 cursor-pointer",
    },
    {
      id: "bg-blue-500",
      className: "w-8 h-8 cursor-pointer",
    },
    {
      id: "bg-indigo-500",
      className: "w-8 h-8 cursor-pointer",
    },
    {
      id: "bg-purple-500",
      className: "w-8 h-8 cursor-pointer",
    },
    {
      id: "bg-gray-500",
      className: "w-8 h-8 cursor-pointer",
    },
    {
      id: "bg-pink-500",
      className: "w-8 h-8 cursor-pointer",
    },
  ];

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
          <strong className="border-blue-500 border-l-4 pl-2">
            테마 색 변경
          </strong>
          <div className="text-blue-500 text-sm font-bold my-2">
            테마색을 변경할 수 있어요.
          </div>
          <ul className="grid grid-cols-4 grid-rows-2 justify-items-center gap-5">
            {themeColors.map((themeColor, index) =>
              React.createElement("li", {
                style: { width: "32px", height: "32px", cursor: "pointer" },
                key: index,
                id: themeColor.id,
                className: `${themeColor.id}`,
                onClick: clickColor,
              })
            )}
          </ul>
        </div>

        <div>
          <strong className="border-blue-500 border-l-4 pl-2">
            계정삭제하기
          </strong>
          <div className="text-red-500 text-sm font-bold my-2">
            계정 및 모든 일정이 삭제되요. 계속하시겠어요?
          </div>
          <button className="agenda-btn my-auto" onClick={signOut}>
            네 삭제할게요.
          </button>
        </div>
      </form>
    </article>
  );
};

export default Config;
