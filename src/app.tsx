import { electron } from "process";
import * as React from "react";
import { createRoot } from "react-dom/client";
import HomeController from "./containers/home.controller";
import { fetchGameInfo } from "./firebase";

const { ipcRenderer } = window.require("electron");
export const currentGame = "pathOfExile";

async function render() {
  const firebaseData = await fetchGameInfo(currentGame);
  const localData = await ipcRenderer.invoke("getLocalData", currentGame);

  const gameTools = [...firebaseData.tools, ...localData.tools];
  const gameTags = [...firebaseData.gameTags, ...localData.gameTags];

  const container = document.getElementById("root") ?? document.body;
  const root = createRoot(container);
  root.render(<HomeController gameTools={gameTools} gameTags={gameTags} />);
}

render();
