const path = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-assets-manifest');

const clientConfig = {
    name: 'client',
    devtool: 'eval-source-map',
    mode: 'development',
    devServer: {
        hot: true,
    },
    entry: [
        'webpack-hot-middleware/client?name=client',
        'react-hot-loader/patch',
        path.join(__dirname, '../src/entry-client.js'),
    ],
    output: {
        path: path.join(__dirname, '../dist/client'),
        filename: '[name].js',
        publicPath: '/assets/',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
        new ManifestPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(jsx?)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
                loader: 'file-loader',
            },
        ],
    },
    target: 'web',
};

const serverConfig = {
    name: 'server',
    devtool: 'eval-source-map',
    mode: 'development',
    entry: {
        server: path.join(__dirname, '../src/entry-server.js'),
    },
    output: {
        path: path.join(__dirname, '../dist/'),
        filename: 'server.js',
        libraryTarget: 'commonjs2',
        /* create the same "web-path" for the client assets (fonts, img, ...) */
        publicPath: '/assets/',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(jsx?)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
                loader: 'file-loader',
                options: {
                    /* prevent the client assets to be build twice */
                    emitFile: false,
                },
            },
        ],
    },
    target: 'node',
};

module.exports = [clientConfig, serverConfig];
