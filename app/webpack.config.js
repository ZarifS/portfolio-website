const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({template: "./src/index.html", filename: "./index.html"});

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
            }, { // regular scss files to css
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }, {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url-loader',
                options: {
                    limit: 8000, // Convert images < 8kb to base64 strings
                    name: 'images/[name].[ext]'
                }
            }, {
                test: /\.(pdf|docx)$/,
                loader: 'file-loader?name=documents/[name].[ext]',
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [htmlWebpackPlugin]
};