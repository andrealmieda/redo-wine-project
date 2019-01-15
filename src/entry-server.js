import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { ServerStyleSheet } from 'styled-components';
import { StaticRouter } from 'react-router-dom';

import App from './App';

// State management
import createReduxStore from './state';
import mapServerDataToState from './state/mapServerDataToState';

export default (serverData) => {
    const initialState = mapServerDataToState(serverData);
    const store = createReduxStore(initialState);

    // TODO: Add proper redirect with server.
    const routerContext = {};

    const wrappedApp = (
        <Provider store={store}>
            <StaticRouter context={routerContext} location={serverData.url}>
                <App />
            </StaticRouter>
        </Provider>
    );

    const sheet = new ServerStyleSheet();
    const wrappedAppWithStyles = sheet.collectStyles(wrappedApp);

    const stream = sheet.interleaveWithNodeStream(
        ReactDOMServer.renderToNodeStream(wrappedAppWithStyles),
    );
    const head = Helmet.renderStatic();

    return ({
        preloadedState: store.getState(),
        stream,
        head,
    });
};
