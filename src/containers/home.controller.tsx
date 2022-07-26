import React, { useEffect, useState } from "react";
import { List } from "../components/List/list";
import { SearchBar } from "../components/SearchBar/searchBar";
import HomeScreen from "./home.screen";

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
    gameTags: ["build planner"],
  },
};
const HomeController = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    const mockArray = Object.values(mockData["pathOfExile"].tools);
    const filteredTools = filterToolList("", mockArray).length;
    setTools(filteredTools);
  }, []);
  // return <HomeScreen />;
  const handlers = {
    tools,
  };
  return <HomeScreen {...handlers} />;
};

//@ts-ignore
const filterToolList = (input, data) => {
  if (!input) {
    return [];
  }

  const filter = input.toLowerCase();

  //@ts-ignore
  const filteredData = data.filter(({ toolName }) =>
    toolName.toLowerCase().includes(filter)
  );

  return filteredData;
};

export default HomeController;
