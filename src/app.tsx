import { electron } from "process";
import * as React from "react";
import { createRoot } from "react-dom/client";
import HomeController from "./containers/home.controller";
import { fetchGameInfo } from "./firebase";

const { ipcRenderer } = window.require("electron");
export const currentGame = "pathOfExile";

async function render() {
  let gameTools: any[] = [];
  let gameTags: any[] = [];

  const firebaseData = await fetchGameInfo(currentGame);
  gameTools = !firebaseData?.tools
    ? gameTools
    : [...gameTools, ...firebaseData.tools];
  gameTags = !firebaseData?.tags ? gameTags : [...firebaseData.tags];

  const localData = await ipcRenderer.invoke("getLocalData", currentGame);
  gameTools = !localData?.tools
    ? gameTools
    : [...gameTools, ...localData.tools];
  gameTags = !localData?.tags ? gameTags : [...gameTags, ...localData.gameTags];

  const container = document.getElementById("root") ?? document.body;
  const root = createRoot(container);
  root.render(<HomeController gameTools={gameTools} gameTags={gameTags} />);
}

render();
