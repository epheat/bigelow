const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

module.exports = merge(baseConfig, {
    plugins: [
        new webpack.DefinePlugin({
            "BIGELOW_SERVICE_URL": JSON.stringify('http://localhost:3000')
            //"BIGELOW_SERVICE_URL": JSON.stringify('https://6wi0yq2lyk.execute-api.us-east-1.amazonaws.com/dev')
        })
    ]
});