import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
//components
import { confirm } from "../components/Alert";
//reducers
import { RootState } from "../reducers/root";
import { SIGN_OUT, CLICK_CONFIG, CHANGE_THEME_COLOR } from "../reducers/user";

const themeColors = [
  {
    id: "red-500",
    className: "w-8 h-8 cursor-pointer",
  },
  {
    id: "yellow-500",
    className: "w-8 h-8 cursor-pointer",
  },
  {
    id: "green-500",
    className: "w-8 h-8 cursor-pointer",
  },
  {
    id: "blue-500",
    className: "w-8 h-8 cursor-pointer",
  },
  {
    id: "indigo-500",
    className: "w-8 h-8 cursor-pointer",
  },
  {
    id: "purple-500",
    className: "w-8 h-8 cursor-pointer",
  },
  {
    id: "gray-500",
    className: "w-8 h-8 cursor-pointer",
  },
  {
    id: "pink-500",
    className: "w-8 h-8 cursor-pointer",
  },
];

const Config = () => {
  const { themeColor } = useSelector((root: RootState) => root.user);

  const dispatch = useDispatch();

  //계정삭제클릭시
  const signOut = () => {
    const callback = () => dispatch({ type: SIGN_OUT });
    confirm("정말 삭제하시겠어요?", callback);
  };

  //테마색클릭시
  const clickColor = (e: any) => {
    dispatch({
      type: CHANGE_THEME_COLOR,
      payload: e.target.id,
    });
  };

  return (
    <article
      className={`absolute z-50 border-2 border-${themeColor} rounded-md`}
    >
      <form className="flex flex-col gap-3 p-3 bg-white">
        <div className="flex">
          <FontAwesomeIcon
            className="cursor-pointer ml-auto"
            icon={faTimes}
            onClick={() => dispatch({ type: CLICK_CONFIG })}
          />
        </div>
        <hr />
        <div>
          <strong className={`border-${themeColor} border-l-4 pl-2`}>
            테마 색 변경
          </strong>
          <div className={`text-${themeColor} text-sm font-bold my-2`}>
            테마색을 변경할 수 있어요.
          </div>
          <ul className="grid grid-cols-4 grid-rows-2 justify-items-center gap-5">
            {themeColors.map((themeColor, index) => (
              <li
                id={themeColor.id}
                className={`bg-${themeColor.id}`}
                key={index}
                style={{ width: "32px", height: "32px", cursor: "pointer" }}
                onClick={clickColor}
              />
            ))}
          </ul>
        </div>

        <div>
          <strong className={`border-${themeColor} border-l-4 pl-2`}>
            계정 삭제하기
          </strong>
          <div className="text-red-500 text-sm font-bold my-2">
            저장된 모든 일정들이 삭제되요. 계속하시겠어요?
          </div>
          <button className={`bg-${themeColor} agenda-btn w-full`} type="button" onClick={signOut}>
            네 삭제할게요.
          </button>
        </div>
      </form>
    </article>
  );
};

export default Config;
