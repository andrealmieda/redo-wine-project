import React from 'react';
import PropTypes from 'prop-types';


import styled from 'styled-components';
import { rgba } from 'polished';

import { colors, matchBreakpoint } from '../../styles';

/* eslint-disable react/button-has-type */
const Button = styled(({ primary, secondary, ...props }) => <button {...props} />)`
    margin: 5px;
    padding: ${({ primary, secondary }) => (primary || secondary ? '10px' : '0px')};
    
    background: ${({ primary }) => (primary ? colors.NightSlatz : colors.White)};
    color: ${({ primary }) => (primary ? colors.White : colors.NightSlatz)};
    
    border: ${({ secondary }) => (secondary ? `1px solid ${colors.NightSlatz};` : 'none')};
    border-radius: 5px;
`;
/* eslint-enable react/button-has-type */

Button.propTypes = {
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
};

export default Button;
