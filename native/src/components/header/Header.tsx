import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {globalStyles} from 'style/globalStyles';
import theme from 'style/theme';
import styled from 'styled-components/native';

function Header() {
  const {navigate} = useNavigation<any>();
  return (
    <Container>
      <View style={[globalStyles.flexCenter_R]}>
        <TouchableOpacity
          onPress={() => navigate('카테고리모달')}
          style={{flexDirection: 'row'}}>
          <Text
            style={[
              globalStyles.fontWeight700,
              {
                marginRight: 2,
                color: theme.black,
                fontSize: 14,
              },
            ]}>{`내 주변`}</Text>
          <Icon name="chevron-down" size={20} color={theme.black} />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <Icon name="search" size={18} color={theme.black} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 10}}>
          <Icon name="bell" size={18} color={theme.black} />
        </TouchableOpacity>
      </View>
    </Container>
  );
}

export default React.memo(Header);

const Container = styled(View)`
  width: 100%;
  height: 45px;
  padding: 0 15px;
  ${theme.flexBetween_R};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #eeeeee;
  background-color: white;
`;
