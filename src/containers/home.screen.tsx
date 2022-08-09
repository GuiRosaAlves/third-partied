import { List } from "../components/List/list";
import { SearchBar } from "../components/SearchBar/searchBar";

//@ts-ignore
const HomeScreen = ({ tools }) => {
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
            backgroundColor: "gray",
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 1,
              height: "8%",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              // backgroundColor: "lightblue",
              fontFamily: "monospace",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            TP
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
            <SearchBar />
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
            <List
              // color="blue"
              data={tools}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeScreen;
