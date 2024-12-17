import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
import { Provider } from "react-redux";
import store from './redux/store'

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
  <Provider store={store}>
  <App />

  </Provider>
  </BrowserRouter>
);
