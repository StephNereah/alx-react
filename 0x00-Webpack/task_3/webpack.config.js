const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development", // Development mode
    entry: {
        header: "./modules/header/header.js",
        body: "./modules/body/body.js",
        footer: "./modules/footer/footer.js",
    },
    output: {
        filename: "[name].bundle.js", // Output files named after entry points
        path: path.resolve(__dirname, "public"), // Output directory
    },
    devtool: "inline-source-map", // Enable source maps
    devServer: {
        static: "./public", // Serve files from "public" directory
        port: 8564, // Port for dev server
        open: true, // Automatically open in the browser
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html", // Template file for HTML
        }),
        new CleanWebpackPlugin(), // Clean the output directory
    ],
};
