import React from "react";
import { Card } from "../Card/card";

export const List = ({ color = "#fff", filter = "", data = [{}] }) => (
  <div
    style={{
      height: "100%",
      backgroundColor: color,
      overflow: "auto",
    }}
  >
    {data.map((value, index) => (
      <div //Card container
        key={`list-item-${index}`}
        className="container"
        style={{
          // background: "rgba(0,0,0,100%)",
          // backgroundColor: "green",
          // display: "flex",
          // height: "20%",
          width: "100%",
          // opacity: 0.2,
          // padding: "2px",
          // margin: "1%",
        }}
      >
        <div style={{ height: "100%", padding: "1%" }}>
          <Card width="100%" height="100px"></Card>
        </div>
      </div>
    ))}
  </div>
);
