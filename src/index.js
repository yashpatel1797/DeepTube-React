import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';

import { makeServer } from "./server";
import { VideoProvider, PlayListProvider, AuthProvider } from "context";

// Call make Server
makeServer();

ReactDOM.render(
  <AuthProvider>
    <VideoProvider>
      <PlayListProvider>
        <React.StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </React.StrictMode>
      </PlayListProvider>
    </VideoProvider>
  </AuthProvider>,
  document.getElementById("root")
);
