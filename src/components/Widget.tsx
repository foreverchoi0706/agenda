import React, { useEffect } from "react";

const Widget = () => {
  useEffect(() => {});

  return (
    <section className="grid grid-cols-2 gap-1 absolute z-50 top-3 right-3 w-72">
      <div className="col-start-1 col-end-3 font-bold bg-white rounded-sm text-center">
        안녕하세요 이름님!
      </div>
      <div className=" bg-white rounded-sm h-48 overflow-hidden">
        안녕하세요 이름님 안녕하세요 이름님 안녕하세요 이름님 안녕하세요 이름님
      </div>
      <div className=" bg-white rounded-sm h-48 overflow-hidden">
        안녕하세요 이름님
      </div>
    </section>
  );
};

export default Widget;
