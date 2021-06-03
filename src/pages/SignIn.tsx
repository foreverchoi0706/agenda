import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
//reducers
import { SIGN_IN } from "../reducers/user";
//assets

const SignIn = () => {
  const { isLogined } = useSelector((root: any) => root.user);

  const dispatch = useDispatch();

  const signIn = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: SIGN_IN,
    });
  };

  if (isLogined) return <Redirect to="/home" />;

  return (
    <article className="bg-blue-500 w-full h-screen flex justify-center items-center">
      <form
        className="bg-white flex flex-col rounded-lg p-5 agenda-box"
        onSubmit={signIn}
      >
        <h2>이런! 처음이시군요. 이름을 알려주시겠어요?</h2>
        <input
          className="focus:outline-none text-center my-5"
          type="text"
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
