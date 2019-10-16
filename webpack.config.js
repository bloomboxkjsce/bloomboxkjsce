const path = require("path");

module.exports = {
  entry: {
    app: ["babel-polyfill", "./server/app.js"]
  },
  output: {
    // server babel config.js files
    path: path.resolve(__dirname, "./distBabel"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          // strawsman stage-0 extensions
          presets: ["env", "stage-0"]
        }
      },
      {
        test: /\.html?$/,
        exclude: /node_modules/
      }
    ]
  }
};
