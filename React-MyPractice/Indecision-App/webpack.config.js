const path = require('path')
const webpack = require('webpack'); 
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            use: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test: /\.scss$/,
            use: [
                'style-loader',
                  'css-loader',
                  'sass-loader'
                ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
       contentBase: path.join(__dirname, 'public')
    }
}