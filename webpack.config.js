let webpack = require('webpack');
module.exports = {
    entry: ["./src/mgrs.js"],
    output: {
        path: './dist',
        filename: "angular-mgrsConverter.min.js"
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};