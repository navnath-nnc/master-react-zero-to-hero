import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1", key: "child1" }, [
//     React.createElement("h1", { id: "heading1", key: "h1" }, "I am h1 tag"),
//     React.createElement("h2", { id: "heading2", key: "h2" }, "I am h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2", key: "child2" }, [
//     React.createElement("h1", { id: "heading1", key: "h3" }, "I am h1 tag"),
//     React.createElement("h2", { id: "heading2", key: "h4" }, "I am h2 tag"),
//   ]),
// ]);

const heading1 = React.createElement(
  "h1",
  { id: "heading1" },
  "I am h1 heading",
);
console.log(heading1);

const Title = () => (
  <div>
    <h1 className="title">I am title component🚀</h1>;{heading1}
  </div>
);

const HeadingComponent = () => (
  <div className="container">
    <Title />
    <h1 id="heading1">This is react header component🚀</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
