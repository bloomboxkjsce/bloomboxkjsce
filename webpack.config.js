const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
// config for express
const externals = require("webpack-node-externals");
const Uglify = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js"
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "index.js"
  },
  target: "web",
  devtool: "source-map",
  optimization: {
    minimizer: [
      new Uglify({
        cache: true,
        parallel: true,
        sorceMap: true
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
            //options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: ["file-loader", "raw-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/html/404Error.html",
      template: "./src/html/about.html",
      template: "./src/html/campus-company.html",
      template: "./src/html/events.html",
      template: "./src/html/index.html",
      template: "./src/html/partners.html",
      template: "./src/html/team.html",
      // bundled file names
      filename: "./404Error.html",
      filename: "./about.html",
      filename: "./campus-company.html",
      filename: "./events.html",
      filename: "./index.html",
      filename: "./partners.html",
      filename: "./team.html",
      excludeChunks: ["server"]
    }),
    new MiniCssExtractPlugin({
      ignoreOrder: false
    })
  ]
};
