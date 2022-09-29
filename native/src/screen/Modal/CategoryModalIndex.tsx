import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from 'interface/common';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
function CategoryModalIndex() {
  const {navigate} = useNavigation<ScreenNavigationProp>();
  const testData = [
    {
      title: '전체',
      value: 'mylocation',
    },
    {
      title: '내 주변',
      value: 'mylocation',
    },
    {
      title: '내 주변',
      value: 'mylocation',
    },
    {
      title: '내 주변',
      value: 'mylocation',
    },
    {
      title: '내 주변',
      value: 'mylocation',
    },
    {
      title: '내 주변',
      value: 'mylocation',
    },
    {
      title: '내 주변',
      value: 'mylocation',
    },
    {
      title: '내 주변',
      value: 'mylocation',
    },
  ];
  return (
    <Container>
      <TouchableOpacity
        onPress={() => {
          navigate('홈', {category: '내주변'});
        }}>
        <Text>asdfs</Text>
      </TouchableOpacity>
    </Container>
  );
}

export default React.memo(CategoryModalIndex);

const Container = styled(View)``;
