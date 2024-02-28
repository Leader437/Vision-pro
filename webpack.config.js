const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: "./Assets/javascript/script.js",
    plugins: [new HtmlWebpackPlugin({
        template: './Assets/Html/template.html',      // The main Js code written by developer
        filename: 'index.html',      // The name of the html file created by webpack
        inject: 'body'              // place the script tag just before the closing of body tag in html
    })],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']      // Create an empty file of html put Css, Js tags for us, Requires a template file that includes the inner content of the file
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                type: "asset/resource"
            }
        ],
    },
}