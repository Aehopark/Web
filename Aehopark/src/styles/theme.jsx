import { css } from 'styled-components';

const fonts = {
  sansita_one: css`
    font-family: 'Sansita', sans-serif;
    font-weight: 800;
    font-style: italic;
  `,
  roboto_mono: css`
    font-family: 'Roboto Mono', monospace;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
  `,
  roboto_medium: css`
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-style: normal;
  `,
  roboto_regular: css`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-style: normal;
  `,
};

//point 컬러 위쪽에서부터 pc1입니다!
const colors = {
  pc1: '#377D00',
  pc2: '#00520D',
  pc3: '#90A344',
  black: '#111111',
  deep_grey: '#767676',
  medium_grey: '#999999',
  light_grey: '#DBDBDB',
  white: '#FFFFFF',
};
const theme = { fonts, colors };

export default theme;
