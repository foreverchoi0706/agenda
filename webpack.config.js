const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  // mode: "production",
  entry: ["babel-polyfill", path.resolve(__dirname, "src/index.tsx")],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    chunkFilename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /.jsx?$/,
        include: [path.resolve(__dirname, "src")],
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader",
      },
      {
        test: /.css?$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".json", ".js", ".jsx"],
  },
  plugins: [
    // 빌드 과정을 알려줌
    new webpack.ProgressPlugin(),
    // 배너를 정해줌
    new webpack.BannerPlugin({
      banner: `build time : ${new Date().toLocaleTimeString()}`,
    }),
    // 타겟된 템블릿을 빌드될 때 베이스템플릿로 정해줌
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "index.html",
      favicon: path.resolve(__dirname, "public/favicon.ico"),
    }),
    // 전의 빌드를 삭제함
    new CleanWebpackPlugin(),
  ],
  devtool: "source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    publicPath: "/",
    host: "localhost",
    port: 8080,
    inline: true,
    hot: true,
    open: true,
    overlay: true,
  },
};
