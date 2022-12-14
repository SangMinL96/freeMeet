import Header from 'components/header/HomeHeader';
import React from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components';

function ProfileIndex() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

export default React.memo(ProfileIndex);

const Container = styled(SafeAreaView)`
  width: 100%;
  height: 100%;
  background-color: white;
`;
