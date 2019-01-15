const webpack = require('webpack');
const express = require('express');

const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const { createAssetRealPath, parseManifestFile, parseServerSource } = require('./utils');

// Webpack configuration
const configFile = require('../webpack/config.dev.js');

const compiler = webpack(configFile);
const middlewareConfig = {
    stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false,
    },
};

module.exports = () => {
    const app = express();
    const middleware = webpackMiddleware(compiler, middlewareConfig);

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));

    // Make server wait for webpack to finish building to resolve the request.
    app.use((req, res, next) => {
        middleware.waitUntilValid(() => {
            next();
        });
    });

    const getManifest = () => {
        const manifestFilePath = createAssetRealPath('client/manifest.json');

        return parseManifestFile(middleware.fileSystem.readFileSync(manifestFilePath));
    };

    const getServerRender = () => parseServerSource(middleware.fileSystem.readFileSync(createAssetRealPath('server.js')));

    return {
        app,
        getManifest,
        getServerRender,
    };
};
