import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons";
//reducers
import { RootState } from "../reducers/root";
import { SIGN_IN } from "../reducers/user";
//assets

const SignIn = () => {
  const { nickName, themeColor } = useSelector(
    (root: RootState) => root.user,
    shallowEqual
  );

  const dispatch = useDispatch();

  const [nickname, setNickname] = useState("");

  const signIn = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: SIGN_IN,
      payload: nickname,
    });
  };

  const inputName = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setNickname(() => e.target.value);

  const setName = (): void => {
    axios
      .get("https://foreverchoi0706.com/getNickname")
      .then((value: AxiosResponse<any>) => {
        setNickname(() => value.data.nickname);
      })
      .catch((reason: any) => {
        console.error(reason);
      });
  };

  if (nickName) return <Redirect to="/map" />;

  return (
    <article
      className={`bg-${themeColor} w-full h-full flex flex-col justify-center items-center`}
    >
      <h1 className="text-white p-4 animate-reverse-one-ping">
        당신을 위한 일정 매니저,<br /><div className="text-right">AGENDA</div>
      </h1>
      <form
        className="bg-white flex flex-col rounded-lg p-5 agenda-box"
        onSubmit={signIn}
      >
        <h2>이런! 처음이시군요. 이름을 알려주시겠어요?</h2>
        <div className="flex items-center">
          <input
            className="focus:outline-none text-center my-5 flex-grow"
            type="text"
            placeholder="ex) 허니 아메리카노"
            required
            value={nickname}
            onChange={inputName}
          />
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={faDice}
            onClick={setName}
          />
        </div>
        <button className={`bg-${themeColor} agenda-btn`} type="submit">
          이 이름 사용하기
        </button>
      </form>
      <h2 className="text-white p-4">
       &copy; foreverchoi
      </h2>
    </article>
  );
};

export default SignIn;
