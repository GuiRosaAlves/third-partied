import { colors } from "../config/palette";
import { List } from "../components/List/list";
import { SearchBar } from "../components/SearchBar/searchBar";
const { ipcRenderer } = window.require("electron");

//@ts-ignore
const HomeScreen = ({ searchBarText, handleFilterInput, tools }) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        // backgroundColor: "white",
        // paddingTop: "1px",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          // flexDirection: "row",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "100%",
            width: "10%",
            backgroundColor: colors.gray[1000],
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              // flex: 1,
              height: "8%",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              // backgroundColor: "lightblue",
              fontFamily: "monospace",
              fontSize: 20,
              fontWeight: "bold",
              color: colors.white,
              paddingBottom: 20,
            }}
          >
            TP
          </div>
          <div
            style={{ color: colors.white, paddingBottom: 20 }}
            onMouseUp={() => {
              ipcRenderer.invoke(
                "openToolsFolder",
                "pathOfExile",
                "Path of Building"
              );
            }}
          >
            Open Folder
          </div>
          <div
            style={{ color: colors.white, paddingBottom: 20 }}
            onMouseUp={() => {
              ipcRenderer.invoke("closeTool", "Path of Building*");
            }}
          >
            Close Tool
          </div>
          <div
            style={{ color: colors.white, paddingBottom: 20 }}
            onMouseUp={() => {
              ipcRenderer.invoke(
                "openTool",
                "pathOfExile",
                "Path of Building/Path of Building.json"
              );
            }}
          >
            Open Tool
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            height: "100%",
            width: "80%",
            backgroundColor: "white",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              height: "8%",
              width: "100%",
              backgroundColor: "red",
            }}
          >
            <SearchBar
              inputText={searchBarText}
              onChangeInput={handleFilterInput}
            />
          </div>
          <div
            style={{
              // display: "flex",
              flexDirection: "column",
              // flex: 1,
              height: "100%",
              backgroundColor: "cyan",
              overflow: "auto",
            }}
          >
            <List color={colors.gray[400]} data={tools} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeScreen;
