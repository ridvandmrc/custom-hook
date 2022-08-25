import React, { useRef } from "react";
import { useListData } from "./hooks";

export const App = () => {
  const { data, addData, resetData } = useListData();
  const title = useRef(null);
  const desc = useRef(null);
  return (
    <div className="App">
      {data.map((item, index) => (
        <div key={index} style={{ margin: "20px" }}>
          {item.title} - {item.desc}
        </div>
      ))}
      <input style={{ margin: "15px" }} placeholder="title" ref={title} />
      <input style={{ margin: "15px" }} placeholder="desc" ref={desc} /> <br />
      <button
        style={{ margin: "15px" }}
        onClick={() =>
          addData((title.current as any).value, (desc.current as any).value)
        }
      >
        Update Data
      </button>
      <button style={{ margin: "15px" }} onClick={() => resetData()}>
        Reset Data
      </button>
    </div>
  );
};
