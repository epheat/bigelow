const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
    },
    // alias for assets directory, use it instead of relative paths
    // usage: import Img from 'Assets/img.png'
    resolve: {
        alias: {
            Assets: path.resolve(__dirname, 'assets/'),
        }
    },
    module: {
        rules: [
            // javascript files
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.js', '.jsx']
                },
                use: ['babel-loader'],
            },
            // html files
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            // css and scss files
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }, {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            // images and other files
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        publicPath: 'https://s3.amazonaws.com/bglw.org/my-dist/dist/'
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // HtmlWebPackPlugin copies index.html from template in src to dist directory
        new HtmlWebPackPlugin({
            hash: true,
            inject: true,
            template: './src/index.html',
            filename: './index.html',
        }),
        new webpack.DefinePlugin({
            "DO_BIGELOW_PATH": JSON.stringify('/do-bigelow')
        })
    ]
};