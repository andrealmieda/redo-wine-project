const { normalizeAssetsForTemplate } = require('./utils');

const createHTMLPage = require('./templates/index.html');

const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 8000;

const createServer = isProduction ?
    require('./server-production') :
    require('./server-development');

const { app, getManifest, getServerRender } = createServer();

app.get('*', (req, res) => {
    const manifest = getManifest();
    const clientAssets = normalizeAssetsForTemplate(manifest);

    const serverSideRender = getServerRender();

    const serverData = {
        url: req.originalUrl,
    };

    const { preloadedState, stream, head } = serverSideRender(serverData);

    createHTMLPage(res, {
        assets: clientAssets,
        head,
        preloadedState,
        stream,
    });
});

app.listen(port, '0.0.0.0', (err) => {
    if (err) {
        console.log(err);
    }
    console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
