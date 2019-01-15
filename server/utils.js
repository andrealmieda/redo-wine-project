const path = require('path');
const requireFromString = require('require-from-string');

// Constants
const JS_FILE = /^.+\.js$/;
const CSS_FILE = /^.+\.css$/;

const parseManifestFile = buffer => JSON.parse(buffer);

const parseServerSource = buffer => requireFromString(buffer.toString()).default;

const createAssetRealPath = assetName => path.join(__dirname, '../dist/', assetName);

const createAssetServedPath = assetName => `/assets/${assetName}`;

const normalizeAssetsForTemplate = (manifest) => {
    const assets = {
        js: [],
        css: [],
    };

    Object.values(manifest).reduce((assetsAccumulator, asset) => {
        const { js, css } = assetsAccumulator;

        if (JS_FILE.test(asset)) {
            js.push(createAssetServedPath(asset));
        } else if (CSS_FILE.test(asset)) {
            css.push(createAssetServedPath(asset));
        }

        return assetsAccumulator;
    }, assets);

    return assets;
};

module.exports = {
    createAssetRealPath,
    createAssetServedPath,
    normalizeAssetsForTemplate,
    parseManifestFile,
    parseServerSource,
};
