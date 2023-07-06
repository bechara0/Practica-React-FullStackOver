import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Total } from "./components/Total";

const App = () => {
  return (
    <div>
      <Header />;
      <Content />
      <Total />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
