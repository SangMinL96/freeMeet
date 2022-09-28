import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import theme from 'style/theme';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import {globalStyles} from 'style/globalStyles';
function Header() {
  return (
    <Container>
      <View>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Text
            style={[
              globalStyles.fontWeight700,
              {
                marginRight: 2,
                color: '#262626',
                fontSize: 16,
              },
            ]}>{`내 주변`}</Text>
          <Icon name="chevron-down" size={20} color={'#262626'} />
        </TouchableOpacity>
      </View>
      <View></View>
    </Container>
  );
}

export default React.memo(Header);

const Container = styled(View)`
  width: 100%;
  height: 50px;
  padding: 0 15px;
  ${theme.flexBetween_R};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #eeeeee;
  background-color: white;
`;
