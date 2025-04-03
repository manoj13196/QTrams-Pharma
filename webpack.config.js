const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/scripts/main.js", // Entry point for JavaScript
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "docs"), // Change dist → docs for GitHub Pages
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Use src/index.html as template
      filename: "index.html", // Output as index.html in docs/
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/components", to: "components" }, // Ensure header/footer work
        { from: "src/styles", to: "styles" }, // Copy CSS files
        { from: "images", to: "images" }, // Copy images
        { from: "src/pages", to: "pages" }, // Copy other HTML pages
      ],
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "docs"), // Serve from docs (now matches GitHub Pages)
    port: 8080,
    open: true,
  },
};
