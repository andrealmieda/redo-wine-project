module.exports = {
    codeSandbox: false,
    modifyBabelRc: babelrc => Object.assign({}, babelrc, { plugins: [] }),
    wrapper: 'config/docz/wrapper',
};
