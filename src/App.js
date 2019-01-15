import React, { Fragment } from 'react';

import { Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

// Components
import { GlobalStyles } from './shared/styles';

const App = () => (
    <Fragment>
        <GlobalStyles />
        <Route path="/:lang">
            <div>
                Hello World!
                <span aria-label="earth icon" role="img">🌍</span>
            </div>
        </Route>
    </Fragment>
);

export default process.env.NODE_ENV === 'development' ?
    hot(App) :
    App;
