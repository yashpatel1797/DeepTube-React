import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';

import { makeServer } from "./server";
import { VideoProvider } from "context";

// Call make Server
makeServer();

ReactDOM.render(
  <VideoProvider>
    <React.StrictMode>

      <BrowserRouter>
        <App />
      </BrowserRouter>

    </React.StrictMode>
  </VideoProvider>,
  document.getElementById("root")
);
