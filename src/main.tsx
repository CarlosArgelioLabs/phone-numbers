import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { config } from "./../config.ts";

let REACT_MODE;

if (config.isProd) {
  REACT_MODE = (
    <React.Fragment>
      {" "}
      <App />{" "}
    </React.Fragment>
  );
} else if (config.isDev) {
  REACT_MODE = (
    <React.StrictMode>
      {" "}
      <App />{" "}
    </React.StrictMode>
  );
} else {
  REACT_MODE = (
    <React.StrictMode>
      {" "}
      <App />{" "}
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(REACT_MODE);
