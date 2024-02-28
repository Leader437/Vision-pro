/*  "build": "webpack --config webpack.prod.js"  */

const path = require('path');
const common = require('./webpack.config');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin");


module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "app.[contenthash].js",
        path: path.resolve(__dirname, "docs"),
        assetModuleFilename: "./imgs/[name].[hash].[ext]"
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),     // Minify Css file
            new TerserPlugin()            // Minify Js file    // Although it's Default but since we added Css minifier we overwrite it so now we have to mention it again
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css',       // The name of extracted Css file
        }),
        new CleanWebpackPlugin(),      // Clean or Delete every thing from dist folder once we run webpack to load new files
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,        // Extract Css
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
});