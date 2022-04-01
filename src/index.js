import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';

import { makeServer } from "./server";
import { VideoProvider, PlayListProvider } from "context";

// Call make Server
makeServer();

ReactDOM.render(
  <VideoProvider>
    <PlayListProvider>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </PlayListProvider>
  </VideoProvider>,
  document.getElementById("root")
);
