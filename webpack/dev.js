const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const extractSass = new ExtractTextPlugin({
    filename: 'build/[name].[hash].bundle.css',
    ignoreOrder: true,
    allChunks: true,
    publicPath: './src'
});

module.exports = {
    resolve: {
        modules: [
            path.resolve('./node_modules')
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    entry: ['babel-polyfill', './src/index.tsx'],
    output: {
        filename: 'build/[name].[hash].bundle.js',
        path: path.resolve(__dirname, '../'),
        publicPath: '/',
    },
    devtool: false,
    plugins: [
        extractSass,
        new CleanWebpackPlugin(['../build']),
        new HtmlWebpackPlugin({
            title: 'Daniel Matias Ferrer',
            template: 'src/index.html'
        }),
        new webpack.DefinePlugin({
            'process.ENVIRONMENT': JSON.stringify(global.ENVIRONMENT),
        })
    ],
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: extractSass.extract({
                    use: [
                        {loader: 'css-loader', options: {sourceMap: false, minimize: true}},
                        {loader: 'resolve-url-loader'},
                        {loader: 'sass-loader', options: {sourceMap: true}}
                    ]
                })
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader',
            },
            {
                test: /\.tsx?$/,
                use: [
                    {loader: 'awesome-typescript-loader'},
                ],
                exclude: /(node_modules)/,
            },
            {
                test: /.(jpe?g|gif|png|svg|woff2?|ttf|eot|otf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1000,
                            outputPath: 'build/',
                        },
                    }
                ]
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, '../'),
        compress: true,
        port: 9876,
        historyApiFallback: true,
    }
};