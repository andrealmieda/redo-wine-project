import React from 'react';

import { mount as enzymeMount } from 'enzyme';
import { merge } from 'lodash-es';

export const configureMount = ({ defaultProps = {}, defaultMount = enzymeMount }) => {
    const mountComponent = (Component, { props = {}, mount = defaultMount, mergeProps = true } = {}) => {
        const componentProps = mergeProps ? merge({}, defaultProps, props) : props;

        return mount(<Component {...componentProps} />);
    };

    return mountComponent;
};

export const createDataTestSelector = dataTest => `[data-test]=${dataTest}`;

export const getElementsByDataTest = (tree, dataTest) => {
    const elementSelector = createDataTestSelector(dataTest);

    return tree.find(elementSelector);
};
