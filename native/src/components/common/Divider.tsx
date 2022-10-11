import React from 'react';
import {Text, View} from 'react-native';
import theme from 'style/theme';
import styled from 'styled-components/native';

type PropsType = {
  height?: string | number;
};
function Divider({height = 5}: PropsType) {
  return (
    <Container height={height}>
      <Text />
    </Container>
  );
}

export default React.memo(Divider);

const Container = styled<PropsType>(View)`
  width: 100%;
  height: ${props => props.height}px;
  background-color: ${theme.ashgray};
`;
