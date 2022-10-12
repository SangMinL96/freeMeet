import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from 'style/globalStyles';
import styled from 'styled-components/native';

function CardContent({children}) {
  return (
    <Container>
      <Text numberOfLines={6} style={[globalStyles.fontWeight400]}>
        {children}
      </Text>
    </Container>
  );
}

export default React.memo(CardContent);

const Container = styled(View)`
  padding: 15px;
  width: 100%;
`;
