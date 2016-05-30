var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        app: './src/boot.ts',
        vendor: './src/vendor.ts'
    },
    output: {
        path: path.resolve(__dirname, "app", "js"),
        publicPath: '/js/',
        filename: 'app.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'deps.js'),
        new webpack.optimize.UglifyJsPlugin({
            // disable mangling due to bug in beta.1, beta.2, beta.3
            comments: false,
            compress: {
                screw_ie8 : true,
                warnings: false
            },
            sourceMap: false
        })
    ],
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' },
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /\.css$/, loader: 'raw-loader' }
        ],
        noParse: [
            path.join(__dirname, 'node_modules', 'angular2', 'bundles')
        ]
    }
};
