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

const HomeController = ({
  gameTools,
  gameTags,
}: {
  gameTools: any[];
  gameTags: any[];
}) => {
  const [firebaseData, setFirebaseData] = useState({});
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const handlers = {
    tools,
  };

  const fetchData = async () => {
    const data = await readNode();
    setFirebaseData(data);
  };

  return <HomeScreen {...handlers} />;
};

const filterToolList = (input: any, data: any) => {
  if (!input || !data) {
    return [];
  }

  const filter = input.toLowerCase();

  const filteredData = data.filter(({ toolName }: { toolName: string }) =>
    toolName.toLowerCase().includes(filter)
  );

  return filteredData;
};

export default HomeController;
