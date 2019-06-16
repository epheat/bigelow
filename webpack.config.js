const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
var S3Plugin = require('webpack-s3-plugin')
var dotenv = require('dotenv').config({path: __dirname + '/.env'});

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
            },
            {
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
		    },
		}],
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
	new S3Plugin({
	    s3Options: {
		accessKeyId: process.env.API_ACCESS_KEY, // Your AWS access key
		secretAccessKey: process.env.API_SECRET_ACCESS_KEY, // Your AWS secret key
		region: 'us-east-1' // The region of your S3 bucket
	    },
	    s3UploadOptions: {
		Bucket: 'bglw.org', // Your bucket name
		// Here we set the Content-Encoding header for all the gzipped files to 'gzip'
		ContentEncoding(fileName) {
		    if (/\.gz/.test(fileName)) {
			return 'gzip'
		    }
		},
		// Here we set the Content-Type header for the gzipped files to their appropriate values, so the browser can interpret them properly
		ContentType(fileName) {
		    if (/\.css/.test(fileName)) {
			return 'text/css'
		    }
		    if (/\.js/.test(fileName)) {
			return 'text/javascript'
		    }
		}
	    },
	    basePath: 'my-dist', // This is the name the uploaded directory will be given
	    directory: './dist' // This is the directory you want to upload
	}),
	new webpack.DefinePlugin({
	    "process.env": dotenv.parsed
	})
    ]
};
