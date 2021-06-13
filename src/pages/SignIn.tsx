import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
//reducers
import { RootState } from "../reducers/root";
import { SIGN_IN } from "../reducers/user";
//assets

const SignIn = () => {
  const { name } = useSelector((root: RootState) => root.user);

  const dispatch = useDispatch();
  //상호작용
  const [inputValue, setInputValue] = useState("");

  const signIn = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: SIGN_IN,
      payload: inputValue,
    });
  };

  const inputName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(() => e.target.value);

  if (name) return <Redirect to="/map" />;

  return (
    <article className="bg-blue-500 w-full flex justify-center items-center">
      <form
        className="bg-white flex flex-col rounded-lg p-5 agenda-box"
        onSubmit={signIn}
      >
        <h2>이런! 처음이시군요. 이름을 알려주시겠어요?</h2>
        <input
          className="focus:outline-none text-center my-5"
          type="text"
          value={inputValue}
          onChange={inputName}
          placeholder="허니 아메리카노"
          required
        />
        <button className="agenda-btn" type="submit">
          이 이름 사용하기
        </button>
      </form>
    </article>
  );
};

export default SignIn;
