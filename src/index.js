import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./css/root.css";
import "./css/custom-components.css";
import "./css/layout.css";
import "./css/grid.css";
import "./css/display.css";
import "./css/footer.css";

import { registerSW } from "./register";
registerSW();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
