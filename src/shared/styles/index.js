export { default as GlobalStyles } from './GlobalStyles';

export const colors = {
    Emperor: '#525252',
    NightSlatz: '#a52b4c',
    Silver: '#a4a4a4',
    White: '#ffffff',
};

export const breakpoints = {
    xs: 0,
    sm: 320,
    md: 800,
    lg: 1280,
};

export const matchBreakpoint = (initialBreakpoint, finalBreakpoint) => (css) => {
    if (finalBreakpoint) {
        return `
            @media (min-width: ${breakpoints[initialBreakpoint]}px) (max-width: ${breakpoints[finalBreakpoint]}px) {
                ${css}
            }
        `;
    }

    return `
        @media (min-width: ${breakpoints[initialBreakpoint]}px) {
            ${css}
        }
    `;
};
