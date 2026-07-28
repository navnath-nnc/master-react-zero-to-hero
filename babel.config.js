const jsxRuntime = require("react/jsx-runtime");

module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { jsxRuntime: "automatic" }],
  ],
};
