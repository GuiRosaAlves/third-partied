import React, { useEffect, useState } from "react";
import HomeScreen from "./home.screen";
import { Tool } from "../firebase/types";

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
  installedTools,
}: {
  gameTools: Tool[];
  gameTags: string[];
  installedTools: Tool[];
}) => {
  const [searchBarText, setSearchBarText] = useState("");
  const [listTools, setListTools] = useState(gameTools || []);

  useEffect(() => {
    console.log({ installedTools });
  }, []);

  function handleFilterInput(newInput: string) {
    const filteredTools = filterToolList(newInput, gameTools);
    const filterResultsGreaterZero = filteredTools.length > 0;

    setListTools(filterResultsGreaterZero ? filteredTools : gameTools);
    setSearchBarText(newInput);
  }

  const handlers = {
    searchBarText,
    handleFilterInput,
    tools: listTools,
  };

  return <HomeScreen {...handlers} />;
};

const filterToolList = (input: any, data: any): any[] => {
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
