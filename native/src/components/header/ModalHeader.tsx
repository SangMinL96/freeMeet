import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import theme from 'style/theme';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import {globalStyles} from 'style/globalStyles';
import {useNavigation, useRoute} from '@react-navigation/native';
function ModalHeader() {
  const {goBack, navigate} = useNavigation() as any;
  const {title} = useRoute().params as any;
  //   const {title} = getState();
  return (
    <Container>
      <TouchableOpacity
        style={{position: 'absolute', left: 15}}
        onPress={() => goBack()}>
        <Icon name="chevron-left" size={22} color={theme.black} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={[
            globalStyles.fontWeight700,
            {
              marginRight: 2,
              color: theme.black,
              fontSize: 14,
            },
          ]}>
          {title || ''}
        </Text>
      </TouchableOpacity>
    </Container>
  );
}

export default React.memo(ModalHeader);

const Container = styled(View)`
  padding: 0 15px;
  position: relative;
  width: 100%;
  height: 45px;
  ${theme.flexCenter_C};
`;
