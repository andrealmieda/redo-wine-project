import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Components;
import { GlobalStyles } from '../../src/shared/styles';

const Wrapper = ({ children }) => (
    <Fragment>
        <GlobalStyles />
        {children}
    </Fragment>
);

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Wrapper;
