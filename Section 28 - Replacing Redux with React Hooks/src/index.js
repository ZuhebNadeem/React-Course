import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import configureProductStore from "./hooks-store/products-store";
import "./index.css";
import App from "./App";
import productReducer from "./store/reducers/products";

configureProductStore();

const rootReducer = combineReducers({
  shop: productReducer,
});

const store = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
