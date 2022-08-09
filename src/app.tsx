import * as React from "react";
import { createRoot } from "react-dom/client";
import HomeController from "./containers/home.controller";
import "./firebase";
import { readNode, updateNode } from "./firebase";

function render() {
  const container = document.getElementById("root") ?? document.body;
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(<HomeController />);
}

render();
