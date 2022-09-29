import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import theme from 'style/theme';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import {globalStyles} from 'style/globalStyles';
import {useNavigation, useRoute} from '@react-navigation/native';

type ParamsType = {
  title: string;
};

function ModalHeader() {
  const {goBack} = useNavigation();
  const {title} = useRoute().params as ParamsType;
  //   const {title} = getState();
  return (
    <Container>
      <TouchableOpacity
        style={{
          position: 'absolute',
          left: 15,
        }}
        onPress={() => goBack()}>
        <Icon name="chevron-left" size={25} color={theme.black} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={[
            globalStyles.fontWeight700,
            {
              marginRight: 2,
              color: theme.black,
              fontSize: 17,
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
