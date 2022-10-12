import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from 'style/globalStyles';
import styled from 'styled-components/native';

function CardAvatar() {
  return (
    <Container>
      <Text style={[globalStyles.fontWeight500]}>ㅁㄴㅇㄹ</Text>
    </Container>
  );
}

export default React.memo(CardAvatar);

const Container = styled(View)`
  max-width: 100px;
  padding: 0 15px;
`;
