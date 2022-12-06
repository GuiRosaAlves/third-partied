import React from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { Tool } from "../../firebase/types";
import "./card.css";

export const Card = ({
  width = "20",
  height = "20",
  borderRadius = "8px",
  backgroundColor = "lightgrey",
  textColor = "#ffffff",
  tool,
}: {
  width?: string;
  height?: string;
  borderRadius?: string;
  backgroundColor?: string;
  textColor?: string;
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
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <AiOutlineAppstoreAdd
            className="tooltip-on-hover"
            size={24}
            style={{ padding: 4, color: textColor }}
          />
          <a style={{ color: textColor }} className="tooltip">
            Verified
          </a>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flex: 3,
          padding: 8,
          alignItems: "flex-end",
          flexDirection: "column",
        }}
      >
        <a style={{ fontSize: 12, color: textColor }}>External/Local</a>
        <AiOutlineAppstoreAdd
          title="Open folder"
          size={16}
          style={{ color: textColor, paddingTop: 4 }}
        />
      </div>
    </div>
    <div
      style={{
        display: "flex",
        flex: 1,
        paddingBottom: 4,
        // backgroundColor: "purple",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <a
          style={{
            color: textColor,
            fontSize: 20,
            fontWeight: "bold",
            paddingLeft: 10,
          }}
        >
          {tool.toolName}
        </a>
      </div>
      <div
        style={{
          display: "flex",
          flex: 2,
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingRight: 4,
        }}
      >
        <div
          title="Additions to toolbox"
          style={{ display: "flex", alignItems: "center" }}
        >
          <AiOutlineAppstoreAdd size={16} style={{ color: textColor }} />
          <a
            style={{
              paddingLeft: 2,
              paddingRight: 8,
              fontSize: 8,
              color: textColor,
            }}
          >
            {tool.addedCount}
          </a>
        </div>
        <div
          title="Tool instalations"
          style={{ display: "flex", alignItems: "center" }}
        >
          <AiOutlineAppstoreAdd size={16} style={{ color: textColor }} />
          <a
            style={{
              paddingLeft: 2,
              paddingRight: 8,
              fontSize: 8,
              color: textColor,
            }}
          >
            {tool.installedCount}
          </a>
        </div>
        <div
          title="Amount of uses"
          style={{ display: "flex", alignItems: "center" }}
        >
          <AiOutlineAppstoreAdd size={16} style={{ color: textColor }} />
          <a
            style={{
              paddingLeft: 2,
              paddingRight: 8,
              fontSize: 8,
              color: textColor,
            }}
          >
            {tool.openedCount}
          </a>
        </div>
      </div>
    </div>
  </div>
);
