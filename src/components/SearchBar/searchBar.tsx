import React, { useState } from "react";

export const SearchBar = () => {
  const [text, setText] = useState("");
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        height: "100%",
        backgroundColor: "lightgrey",
      }}
    >
      <input
        value={text}
        onInput={(event) => {
          const { target } = event;
          setText((target as HTMLInputElement).value);
        }}
        type="text"
        style={{
          flex: 1,
          backgroundColor: "white",
          border: 0,
          borderRadius: "0.5vh",
          fontSize: 10,
          margin: "1%",
          color: "red",
        }}
      ></input>
    </div>
  );
};
