import { app, BrowserWindow, ipcMain, shell } from "electron";
import "../env-variables.ts";
import { Tool } from "./firebase/types";

// This allows TypeScript to pick up the magic constant that's auto-generated by Forge's Webpack
// plugin that tells the Electron app where to look for the Webpack-bundled app code (depending on
// whether you're running in development or production).
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

const createWindow = async () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    maximizable: false,
    resizable: false,
    closable: true,
    frame: true,
    backgroundColor: "#000",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      scrollBounce: false,
      navigateOnDragDrop: false,
      spellcheck: false,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

// const path = requireDynamically('path');
// function requireDynamically(value: string) {
//   value = value.split('\\').join('/'); // Normalize windows slashes
//   return eval(`require('${value}');`); // Ensure Webpack does not analyze the require statement
// }
const path = require("path");
const fs = require("fs");
const os = require("os");
const { exec } = require("child_process");

ipcMain.handle("getLocalData", (event, gameName) => {
  const documentsPath = app.getPath("documents");
  const localDataPath = path.join(
    documentsPath,
    "third-partied",
    gameName,
    "game-tools.json"
  );
  if (!fs.existsSync(localDataPath)) {
    fs.writeFileSync(localDataPath, "{}");
  }

  const localData = JSON.parse(fs.readFileSync(localDataPath));

  return localData;
});

ipcMain.handle("getInstalledTools", (event, gameName, tools: Tool[]) => {
  const homeDir = os.homedir();
  const documentsPath = app.getPath("documents");

  const installedTools = tools.filter((tool) => {
    const localToolsPath = path.join(
      documentsPath,
      `third-partied`,
      gameName,
      tool.toolPath
    );
    const isToolInstalled = fs.existsSync(localToolsPath);

    return isToolInstalled;
  });
  return installedTools;
});

ipcMain.handle("openTool", (event, gameName, toolPath: string) => {
  //TODO: CHECK IF IT IS A WEB TOOL
  // if(tool.toolWebApp){
  //  OPEN WEB PAGE
  //  return true;
  // }
  const documentsPath = app.getPath("documents");
  const localToolPath = path.join(
    documentsPath,
    "third-partied",
    gameName,
    toolPath
  );

  if (!fs.existsSync(localToolPath)) {
    console.log("File not found!");
    return false;
  }

  shell.openPath(localToolPath).then((error) => {
    if (error) {
      console.log({ error });
      return;
    }
    return;
  });
});

ipcMain.handle("closeTool", (event, tool) => {
  const isWin = process.platform === "win32";
  if (!isWin) {
    exec(
      `pkill -f -l ${tool.processName}`,
      (error: any, stdout: any, stderr: any) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
      }
    );
    return;
  }
  exec(
    `taskkill -f -im ${tool.processName}`,
    (error: any, stdout: any, stderr: any) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    }
  );
  return;
});

ipcMain.handle("openToolsFolder", (event, gameName, toolPath = "") => {
  const homeDir = os.homedir();
  const dirToOpen = path.resolve(
    `${homeDir}/documents/third-partied/${gameName}/${toolPath}`
  );

  shell.openPath(dirToOpen);
});

ipcMain.handle("getToolboxState", (event, gameName) => {
  const documentsPath = app.getPath("documents");
  const toolboxPath = path.join(
    documentsPath,
    "third-partied",
    gameName,
    "toolbox-state.json"
  );

  if (!fs.existsSync(toolboxPath)) {
    fs.writeFileSync(toolboxPath, "{}");
  }

  const state = JSON.parse(fs.readFileSync(toolboxPath));

  return state;
});

ipcMain.handle("saveToolboxState", (event, gameName, newState) => {
  const documentsPath = app.getPath("documents");
  const toolboxPath = path.join(
    documentsPath,
    "third-partied",
    gameName,
    "toolbox-state.json"
  );

  if (!fs.existsSync(toolboxPath)) {
    fs.writeFileSync(toolboxPath, "{}");
  }

  const state = fs.writeFileSync(toolboxPath, JSON.stringify(newState));
  return state;
});
