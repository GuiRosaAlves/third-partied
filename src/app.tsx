import { createRoot } from "react-dom/client";
import HomeController from "./containers/home.controller";
import { fetchGameInfo } from "./firebase";
import { Tool } from "./firebase/types";

const { ipcRenderer } = window.require("electron");
export const currentGame = "pathOfExile";

async function render() {
  let gameTools: { source: "cloud" | "local" } | Tool[] = [];
  let gameTags: string[] = [];

  const firebaseData = await fetchGameInfo(currentGame);
  const { tools: firebaseTools }: { tools: Tool[] } = firebaseData;
  const localData = await ipcRenderer.invoke("getLocalData", currentGame);
  const { tools: localTools }: { tools: Tool[] } = localData;

  const mappedFirebaseTools = firebaseTools
    ? firebaseTools.map((tool) => ({
        source: "cloud",
        isOpened: false,
        isInstalled: false,
        isOnToolbox: false,
        ...tool,
      }))
    : [];

  gameTools = !mappedFirebaseTools
    ? gameTools
    : [...gameTools, ...mappedFirebaseTools];
  gameTags = !firebaseData?.tags ? gameTags : [...firebaseData.tags];

  const mappedLocalTools = localTools
    ? localTools.map(({ tool }) => ({
        source: "local",
        isOpened: false,
        isInstalled: false,
        isOnToolbox: false,
        ...tool,
      }))
    : [];

  gameTools = !mappedLocalTools
    ? gameTools
    : [...gameTools, ...mappedLocalTools];
  gameTags = !localData?.tags ? gameTags : [...gameTags, ...localData.gameTags];

  const installedTools = await ipcRenderer.invoke(
    "getInstalledTools",
    currentGame,
    gameTools
  );

  const { toolbox: toolboxState = [] } = await getToolboxState(currentGame);

  const toolbox = toolboxState.map((toolRefId) => {
    const sourceTranslator = {
      cloud: mappedFirebaseTools,
      local: mappedLocalTools,
    };
    const [source, index, name]: ["cloud" | "local", string, string] =
      toolRefId.split("#");

    const tool = sourceTranslator[source]?.[+index];
    if (!tool && tool.toolName === name) {
      return;
    }
    tool.isOnToolbox = true;
    return { toolRefId, tool };
  });

  const container = document.getElementById("root") ?? document.body;
  const root = createRoot(container);
  const props = {
    gameTools,
    gameTags,
    installedTools,
    toolbox,
  };

  root.render(<HomeController {...props} />);
}

export async function getToolboxState(gameName: string) {
  return await ipcRenderer.invoke("getToolboxState", gameName);
}

export async function openTool(tool: Tool) {
  return (
    tool && (await ipcRenderer.invoke("openTool", currentGame, tool.toolPath))
  );
}
render();
