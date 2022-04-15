import * as React from "react";
import { createRoot } from "react-dom/client";

function render() {
  const container = document.getElementById("root") ?? document.body;
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(<h2>Hello from React!</h2>);
}

render();
