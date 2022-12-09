import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { colors } from "../../config/palette";
import { Tool } from "../../firebase/types";
import { Button } from "../Button/button";
import "./card.css";

export const Card = ({
  width = "20",
  height = "20",
  borderRadius = "8px",
  backgroundColor = "lightgrey",
  textColor = "#ffffff",
  tool,
  onPressOpen,
  onPressClose,
  onPressInstall,
  onPressUninstall,
  onPressAddToToolbar,
  onPressRemoveFromToolbar,
}: {
  width?: string;
  height?: string;
  borderRadius?: string;
  backgroundColor?: string;
  textColor?: string;
  tool: Tool;
  onPressOpen: () => void;
  onPressClose: () => void;
  onPressInstall: () => void;
  onPressUninstall: () => void;
  onPressAddToToolbar: () => void;
  onPressRemoveFromToolbar: () => void;
}) => (
  <div
    onMouseUp={() => {}}
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
            // onMouseUp={() => {
            //   if (!tool.isInstalled) {
            //     return;
            //   }
            //   ipcRenderer.invoke(
            //     "openToolFolder",
            //     "pathOfExile",
            //     tool.toolPath
            //   );
            // }}
            className="tooltip-on-hover"
            size={24}
            style={{
              padding: 4,
              color: tool.source === "cloud" ? colors.cyan[500] : textColor,
            }}
          />

          {tool.source === "cloud" && (
            <a
              style={{
                fontSize: 10,
                color: textColor,
              }}
              className="tooltip"
            >
              Verified
            </a>
          )}
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
        <a style={{ fontSize: 12, color: textColor }}>
          {tool.toolWebApp ? "Web Tool" : "Executable Tool"}
        </a>
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
        <Button
          onPress={tool.isOpened ? onPressOpen : onPressClose}
          width={80}
          style={{ marginLeft: 2 }}
        >
          <a
            style={{
              color: colors.gray[1000],
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            {!tool.isOpened ? "Open" : "Close"}
          </a>
        </Button>
        {!tool.isInstalled && tool.gitApiUrl && (
          <Button onPress={onPressInstall} width={80} style={{ marginLeft: 2 }}>
            <a
              style={{
                color: colors.gray[1000],
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              Install
            </a>
          </Button>
        )}
        {tool.isInstalled && (
          <Button
            onPress={onPressUninstall}
            width={80}
            style={{ marginLeft: 2 }}
          >
            <a
              style={{
                color: colors.gray[1000],
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              Uninstall
            </a>
          </Button>
        )}
        <Button
          onPress={
            !tool.isOnToolbox ? onPressAddToToolbar : onPressRemoveFromToolbar
          }
          style={{ marginLeft: 2 }}
        >
          <a
            style={{
              color: colors.gray[1000],
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            {!tool.isOnToolbox ? "Add to Toolbar" : "Remove from Toolbar"}
          </a>
        </Button>
      </div>
    </div>
  </div>
);
