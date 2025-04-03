const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/scripts/main.js", // Entry point for JavaScript
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"), // Primary output to dist folder
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Use src/index.html as template
      filename: "index.html", // Output as index.html
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/components", to: "components" }, // Copy header/footer to dist
        { from: "src/styles", to: "styles" }, // Copy CSS files to dist
        { from: "images", to: "images" }, // Copy images to dist
        { from: "src/pages", to: "pages" }, // Copy other HTML pages to dist
        { from: "src/components", to: "../docs/components" }, // Copy header/footer to docs
        { from: "src/styles", to: "../docs/styles" }, // Copy CSS files to docs
        { from: "images", to: "../docs/images" }, // Copy images to docs
        { from: "src/pages", to: "../docs/pages" }, // Copy other HTML pages to docs
      ],
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "dist"), // Serve from dist folder
    port: 8080,
    open: true,
  },
};
