import {css} from 'styled-components';

// color: ${props => props.theme.red}; 이런식으로
const colors = {
  black: '#262626',
  lightBlack: '#707070',
  pink: '#fd4381',
  yellow: '#ffc31c',
  lightBlue: '#ebf2ff',
  mediumBlue: '#d7e3fb',
  blue: '#4866E4',
  gray: '#8c8c8c',
  red: '#FF3535',
  lightGray: '#F5F5F5',
  ashgray: '#e4e2e3',
  whiteYellow: '#fafafa',
};

const breakpoints = {
  mobileSM: 320,
  mobileMD: 375,
  mobileLG: 425,
  tablet: 768,
  tabletLG: 1024,
  pcSM: 1280,
  pcMD: 1919,
  pcLG: 2559,
  pcXLG: 3840,
  pc: 300000,
  fixedPc: 560,
};

const textEllipsis = css`
  display: inline-block;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
// 밑에는 css 도 이렇게 할 수 있다는거
// 스타일 적용할 땐 다른 속성 밑에 ${props => props.theme.flexCenter} 추가해주기.
const flexCenter_R = css`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const flexCenter_C = css`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const flexStart_R = css`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const flexStart_C = css`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const flexBetween_R = css`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const flexBetween_C = css`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const theme = {
  ...breakpoints,
  ...colors,
  flexCenter_R,
  flexCenter_C,
  flexBetween_R,
  flexBetween_C,
  flexStart_R,
  flexStart_C,
  textEllipsis,
};

export default theme;
