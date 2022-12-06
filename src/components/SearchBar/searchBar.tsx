import React, { useState } from "react";
import { colors } from "../../config/palette";

interface SearchBarType {
  inputText: string;
  onChangeInput: (newInput: string) => void;
}
export const SearchBar = ({ inputText, onChangeInput }: SearchBarType) => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        height: "100%",
        backgroundColor: colors.gray[1000],
      }}
    >
      <input
        value={inputText}
        onChange={({ target }) => {
          onChangeInput(target.value);
        }}
        type="text"
        style={{
          flex: 1,
          backgroundColor: "white",
          border: 0,
          borderRadius: "0.5vh",
          fontSize: 10,
          margin: "1%",
          color: "black",
        }}
      ></input>
    </div>
  );
};
