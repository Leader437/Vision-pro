/*  "start": "webpack-dev-server --config webpack.dev.js --open"  */

const path = require('path');     
const common = require('./webpack.config');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "main.js",       // Js file name that's to be added in the main directory
        path: path.resolve(__dirname, "docs"),       // Final Directory
        assetModuleFilename: "./imgs/[name].[ext]"   // directory and file name templates of image/SVG
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',      // 3. JS injected into DOM
                    'css-loader',        // 2. Css to Js
                    'sass-loader'        // 1. Sass to Css
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',      // 2. JS injected into DOM
                    'css-loader',        // 1. Css to Js
                ]
            }
        ]
    }
});