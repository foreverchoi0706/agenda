import React from "react";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { SIGN_IN } from "../reducers/user";

const SignIn = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const signIn = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: SIGN_IN,
    });
    history.push("/home");
  };

  return (
    <article className="bg-blue-500 w-full h-screen flex justify-center items-center">
      <form className="bg-white flex flex-col rounded-lg p-5" onSubmit={signIn}>
        <input
          className="focus:outline-none"
          type="text"
          placeholder="허니 아메리카노"
        />
        <button>TEST</button>
      </form>
    </article>
  );
};

export default SignIn;
