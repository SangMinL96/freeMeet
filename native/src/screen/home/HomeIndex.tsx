import {useRoute} from '@react-navigation/native';
import {ScreenRouteProp} from 'interface/common';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styled from 'styled-components';

function HomeIndex() {
  const {params} = useRoute<ScreenRouteProp>();
  return (
    <Container>
      <Text>{params?.category || 'dd'}</Text>
    </Container>
  );
}

export default React.memo(HomeIndex);

const Container = styled(SafeAreaView)`
  width: 100%;
  height: 100%;
  background-color: white;
`;
