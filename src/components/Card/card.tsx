import React from "react";

export const Card = ({
  width = "20",
  height = "20",
  borderRadius = "8px",
  backgroundColor = "lightgrey",
}) => (
  <div
    style={{
      width,
      height,
      display: "flex",
      borderRadius,
      background: backgroundColor,
    }}
  ></div>
);
