import {useRoute} from '@react-navigation/native';
import Divider from 'components/common/Divider';
import HomeHeader from 'components/header/HomeHeader';
import Card from 'components/home/card/Card';
import {ScreenRouteProp} from 'interface/common';
import React from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components';

function HomeIndex() {
  const {params} = useRoute<ScreenRouteProp>();
  return (
    <Container>
      <HomeHeader category={params?.category?.title} />
      <Card />
      <Divider />
      <Card />
      <Divider />
    </Container>
  );
}

export default React.memo(HomeIndex);

const Container = styled(SafeAreaView)`
  width: 100%;
  height: 100%;
  background-color: white;
`;
