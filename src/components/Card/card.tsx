import React from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { Tool } from "../../firebase/types";

export const Card = ({
  width = "20",
  height = "20",
  borderRadius = "8px",
  backgroundColor = "lightgrey",
  tool,
}: {
  width?: string;
  height?: string;
  borderRadius?: string;
  backgroundColor?: string;
  tool: Tool;
}) => (
  <div
    style={{
      width,
      height,
      display: "flex",
      borderRadius,
      background: backgroundColor,
      flexDirection: "column",
    }}
  >
    <div
      style={{
        display: "flex",
        flex: 3,
        // backgroundColor: "red",
      }}
    >
      <div
        style={{
          flex: 2,
          // backgroundColor: "cyan"
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flex: 3,
          // backgroundColor: "green",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          flexDirection: "column",
        }}
      >
        {/* <div
          style={{ height: 10, aspectRatio: "1", backgroundColor: "blue" }}
        ></div> */}

        <a>
          <AiOutlineAppstoreAdd />
          {tool.addedCount} Additions to toolbox
        </a>
        <a>
          <AiOutlineAppstoreAdd />
          {tool.installedCount} Tool instalations
        </a>
        <a>
          <AiOutlineAppstoreAdd />
          {tool.openedCount} Additions to toolbox
        </a>
      </div>
    </div>
    <div
      style={{
        flex: 1,
        // backgroundColor: "purple",
      }}
    >
      <a>{tool.toolName}</a>
    </div>
  </div>
);
