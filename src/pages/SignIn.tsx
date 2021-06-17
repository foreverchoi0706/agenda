import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons";
//reducers
import { RootState } from "../reducers/root";
import { SIGN_IN } from "../reducers/user";
//assets

const SignIn = () => {
  const { name } = useSelector((root: RootState) => root.user);

  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");

  const signIn = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: SIGN_IN,
      payload: inputValue,
    });
  };

  const inputName = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setInputValue(() => e.target.value);

  const setName = (): void => {
    axios
      .get("https://nickname.hwanmoo.kr/?format=text&count=1", {
        headers: {},
      })
      .then((value: AxiosResponse<any>) => {
        console.log(value);
      })
      .catch((reason) => {
        console.error(reason);
      });
  };

  if (name) return <Redirect to="/map" />;

  return (
    <article className="bg-blue-500 w-full h-full flex justify-center items-center">
      <form
        className="bg-white flex flex-col rounded-lg p-5 agenda-box"
        onSubmit={signIn}
      >
        <h2>이런! 처음이시군요. 이름을 알려주시겠어요?</h2>
        <div className="flex items-center">
          <input
            className="focus:outline-none text-center my-5 flex-grow"
            type="text"
            value={inputValue}
            onChange={inputName}
            placeholder="ex) 허니 아메리카노"
            required
          />
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={faDice}
            onClick={setName}
          />
        </div>

        <button className="agenda-btn" type="submit">
          이 이름 사용하기
        </button>
      </form>
    </article>
  );
};

export default SignIn;
