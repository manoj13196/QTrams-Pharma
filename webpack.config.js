const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/scripts/main.js", // Entry point for JavaScript
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"), // Default output to dist
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // Ensure this path matches the location of index.html
      filename: "index.html", // Output index.html in the dist directory
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/components", to: "components" }, // Copy header.html and footer.html
        { from: "src/styles", to: "styles" }, // Copy CSS files
        { from: "images", to: "images" }, // Copy images from the root directory
        { from: "src/pages", to: "pages" }, // Copy other HTML pages
      ],
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "dist"), // Serve from the dist folder
    port: 8080,
    open: true, // Automatically open the browser
  },
};
