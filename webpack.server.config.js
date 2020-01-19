const path = require("path");
const webpack = require("webpack");
const externals = require("webpack-node-externals");

module.exports = (env, argv) => {
  const Mode =
    argv.mode === "production"
      ? "./src/server/server-production.js"
      : "./src/server/server-development.js";
  return {
    entry: {
      server: "./src/server/server.js"
    },
    output: {
      // create new bundle file
      // deploy all assets on public path for data mounting /
      path: path.join(__dirname, "dist"),
      publicPath: "/",
      filename: "server.js"
    },
    //   web server engine
    target: "node",
    node: {
      //   mounting for express dev server
      __dirname: false,
      _filename: false
    },
    externals: [externals()],
    module: {
      //  create the module for bundle alll the assets handling
      rules: [
        {
          // for server.js
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
          // transpile to es5
        }
      ]
    }
  };
};
