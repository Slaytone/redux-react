const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index.js",
        publicPath: "/"
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test:/\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'imgs/[name].[ext]'
                }
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin( {
                template: "./src/index.html"
            }
        )
    ]
}