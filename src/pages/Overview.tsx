import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
//reducer
import { RootState } from "../reducers/root";

interface Temp {
  year: string | undefined,
  items: Array<any>
}

const Overview = () => {

  const { list } = useSelector((root: RootState) => root.event);

  const { themeColor } = useSelector((root: RootState) => root.user);

  const [datas, setDatas] = useState<Array<any>>([]);

  useEffect(() => {
    console.log(datas);
  }, [datas]);

  useEffect(() => {
    if (list && list.length) {
      const temp: Array<Temp> = list.map(item => {
        return {
          year: item.end?.toString().slice(0, 4),
          items: []
        }
      })
      list.map((item) => {
        setDatas(temp.map(item2 => {
          if (item2.year == item.end!.toString().slice(0, 4)) {
            item2.items = item2.items.concat(item);
          }
          return item2;
        }));
      });
    }
  }, [list]);

  return (
    <article className="bg-gray-200 h-screen overflow-y-scroll overflow-x-hidden">
      {/* {datas.map((data,index) =>
        <section key={index} className="p-2 md:p-4">
          <h2 className={`border-b-4 border-${themeColor} mb-4`}>{data.year}</h2>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-6">
          {data.items.map((item, index2) =>
              <div key={index2} className="rounded-md bg-white min-h-12 p-1">
                <h3>{index2 + 1 + "월"}</h3>
                {item.title}
              </div>)}
          </div>
        </section>
      )} */}
    </article>
  );
};

export default Overview;
