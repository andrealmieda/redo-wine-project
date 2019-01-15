import { createGlobalStyle } from 'styled-components';

// fonts
import NunitoRegularWoff from '../assets/fonts/nunito-latin-regular.woff';
import NunitoRegularWoff2 from '../assets/fonts/nunito-latin-regular.woff2';

import NunitoRegularLightWoff from '../assets/fonts/nunito-latin-300.woff';
import NunitoRegularLightWoff2 from '../assets/fonts/nunito-latin-300.woff2';

import NunitoRegularBoldWoff from '../assets/fonts/nunito-latin-700.woff';
import NunitoRegularBoldWoff2 from '../assets/fonts/nunito-latin-700.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'Nunito';
    font-weight: normal;
    src: url('${NunitoRegularWoff}') format('woff'),
          url('${NunitoRegularWoff2}') format('woff2');
  }

  @font-face {
    font-family: 'Nunito';
    font-weight: 300;
    src: url('${NunitoRegularLightWoff}') format('woff'),
          url('${NunitoRegularLightWoff2}') format('woff2');
  }
  
  @font-face {
    font-family: 'Nunito';
    font-weight: 700;
    src: url('${NunitoRegularBoldWoff}') format('woff'),
          url('${NunitoRegularBoldWoff2}') format('woff2');
  }

  body {
    font-family: 'Nunito', sans-serif;
  }
`;
