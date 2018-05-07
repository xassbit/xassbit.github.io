const CommonConfig = require('./dev.js');
const Merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

module.exports = Merge(CommonConfig, {
    devtool: false,
    plugins: [
        new webpack.LoaderOptionsPlugin({
            sourceMap: false,
            debug: false,
            comments: false,
            minimize: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                warnings: false,
                screw_ie8: true,
                drop_console: true
            },
            comments: false,
            parallel: false,
            output: {
                comments: false
            },
            warnings: false
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'docs'),
        compress: true,
        port: 9321,
        historyApiFallback: true,
    }
});