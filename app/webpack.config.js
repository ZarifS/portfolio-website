const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({ template: "./src/index.html", filename: "./index.html" });

module.exports = {
    output: {
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }, { // regular css files
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [htmlWebpackPlugin]
};