const express = require('express');
const fs = require('fs');

const { createAssetRealPath, parseManifestFile, parseServerSource } = require('./utils');

const getManifest = () => {
    const manifestFilePath = createAssetRealPath('client/manifest.json');

    return parseManifestFile(fs.readFileSync(manifestFilePath));
};

const getServerRender = () => parseServerSource(fs.readFileSync(createAssetRealPath('server.js')));

module.exports = () => {
    const app = express();

    app.use('/assets', express.static(createAssetRealPath('client')));

    return {
        app,
        getManifest,
        getServerRender,
    };
};
