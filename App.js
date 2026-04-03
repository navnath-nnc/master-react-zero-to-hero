import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement("h1", { id: "heading1", key: "h1" }, "I am h1 tag"),
    React.createElement("h2", { id: "heading2", key: "h2" }, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", { id: "heading1", key: "h3" }, "I am h1 tag"),
    React.createElement("h2", { id: "heading2", key: "h4" }, "I am h2 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
