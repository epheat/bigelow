const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const webpack = require('webpack');
const S3Plugin = require('webpack-s3-plugin');
const dotenv = require('dotenv').config({
    path: __dirname + '/.env'
});

module.exports = merge(baseConfig, {
    plugins: [
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
});