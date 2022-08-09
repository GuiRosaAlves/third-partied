import React, { useEffect, useState } from "react";
import { List } from "../components/List/list";
import { SearchBar } from "../components/SearchBar/searchBar";
import HomeScreen from "./home.screen";
import { createNode, deleteNode, readNode, updateNode } from "../firebase";

const mockData = {
  pathOfExile: {
    tools: {
      0: {
        toolName: "pathOfBuilding",
        addedCount: 0,
        appPath: "pob.exe",
        appUrl: "www.google.com",
        gitAPIUrl: "api.github.com",
        installedCount: 0,
        openedCount: 0,
        processName: "pob",
        tags: [0],
        uninstallPath: "uninstall.exe",
      },
      1: {
        toolName: "toolName",
        addedCount: 0,
        appPath: "pob.exe",
        appUrl: "www.google.com",
        gitAPIUrl: "api.github.com",
        installedCount: 0,
        openedCount: 0,
        processName: "pob",
        tags: [0],
        uninstallPath: "uninstall.exe",
      },
    },
    gamePath: "pathOfExile.exe",
    gameTags: { 0: "build planner" },
  },
};

const HomeController = () => {
  const [firebaseData, setFirebaseData] = useState({});
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    console.log("HOME CONTROLLER: ", firebaseData);
    // const mockArray = Object.values(mockData["pathOfExile"].tools);
    //@ts-ignore
    const temp = firebaseData["pathOfExile"]?.tools;
    // const filteredTools = filterToolList("tool", temp);
    setTools(temp);
  }, [firebaseData]);

  // if (firebaseData) {
  //   //@ts-ignore
  //   console.log("POE TOOLS: ", firebaseData["pathOfExile"]?.tools);
  // }
  // return <HomeScreen />;
  const handlers = {
    tools,
  };

  const fetchData = async () => {
    const data = await readNode();
    setFirebaseData(data);
  };

  return <HomeScreen {...handlers} />;
};

//@ts-ignore
const filterToolList = (input, data) => {
  console.log({ input, data });
  if (!input || !data) {
    return [];
  }

  const filter = input.toLowerCase();

  //@ts-ignore
  const filteredData = data.filter(({ toolName }) =>
    toolName.toLowerCase().includes(filter)
  );

  console.log("FILTERED DATA", { filteredData });
  return filteredData;
};

export default HomeController;
