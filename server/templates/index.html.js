const serialize = require('serialize-javascript');

const generatePreStreamHTML = ({ assets, head }) => `
    <!DOCTYPE html>
    <html ${head.htmlAttributes.toString()}>
        <head>
            <meta charset="utf-8">
            <meta http-equiv="x-ua-compatible" content="ie=edge">
            <meta id="viewport" name="viewport" content="width=device-width, initial-scale=1" />

            ${head.title.toString()}
            ${head.meta.toString()}
            ${head.link.toString()}

            <!-- App css assets -->
            ${assets.css.map(asset => `<link rel="stylesheet" href="${asset.url}">`).join('\n')}
        </head>
        <body ${head.bodyAttributes.toString()}>
            <!-- Root element where app goes -->
            <div id="root">`;

/* eslint-disable implicit-arrow-linebreak, indent */
const generatePostStreamHTML = ({ preloadedState, assets }) =>
            `</div>
            <!-- Write the store state to be used later by the client -->
            <!-- Also write the manifest build context for easier debugging -->
            <script>window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })}</script>

                <!-- App js assets -->
            ${assets.js.map(asset => `<script src="${asset}"></script>`).join('\n')}
        </body>
    </html>
`;
/* eslint-enable implicit-arrow-linebreak, indent */

module.exports = (response, serverRenderResponse) => {
    const { stream } = serverRenderResponse;

    response.write(generatePreStreamHTML(serverRenderResponse));
    stream.pipe(response, { end: false });

    stream.on('end', () => {
        response.end(generatePostStreamHTML(serverRenderResponse));
    });
};
