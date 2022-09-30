import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from 'interface/common';
import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {globalStyles} from 'style/globalStyles';
import theme from 'style/theme';
import styled from 'styled-components/native';
function CategoryModalIndex() {
  const {navigate} = useNavigation<ScreenNavigationProp>();
  const testData = [
    {
      title: '전체',
      id: 'mylocation',
    },
    {
      title: '내 주변',
      id: 'mylocation',
    },
    {
      title: '강남',
      id: 'mylocation',
    },
    {
      title: '개발자만',
      id: 'mylocation',
    },
    {
      title: '프론트엔드 개발자만',
      id: 'mylocation',
    },
    {
      title: '네이버 개발자만',
      id: 'mylocation',
    },
    {
      title: '카카오 개발자만',
      id: 'mylocation',
    },
    {
      title: '코딩테스트스터디',
      id: 'mylocation',
    },
    {
      title: '코딩테스트스터디',
      id: 'mylocation',
    },
    {
      title: '코딩테스트스터디',
      id: 'mylocation',
    },
    {
      title: '코딩테스트스터디',
      id: 'mylocation',
    },
    {
      title: '코딩테스트스터디',
      id: 'mylocation',
    },
    {
      title: '코딩테스트스터디',
      id: 'mylocation',
    },
    {
      title: '코딩테스트스터디',
      id: 'mylocation',
    },
    {
      title: '코딩테스트스터디',
      id: 'mylocation',
    },
    {
      title: '코딩테스트스터디',
      id: 'mylocation',
    },
    {
      title: '코딩테스트스터디',
      id: 'mylocation',
    },
    {
      title: '코딩테스트스터디',
      id: 'mylocation',
    },
    {
      title: '코딩테스트스터디',
      id: 'mylocation',
    },
    {
      title: '코딩테스트스터디',
      id: 'mylocation',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <CategoryButton
        style={[
          globalStyles.flexCenter_R,
          {
            width: '100%',
            height: 50,
            paddingLeft: 15,
            paddingRight: 15,
            marginBottom: 10,
          },
        ]}
        onPress={() => {
          navigate('홈', {category: item});
        }}>
        <Text
          style={[
            globalStyles.fontWeight500,
            {
              width: '100%',
              fontSize: 15,
            },
          ]}>
          {item.title}
        </Text>
      </CategoryButton>
    );
  };
  return (
    <Container>
      <FlatList
        data={testData}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}_${item.title}`}
      />
    </Container>
  );
}

export default React.memo(CategoryModalIndex);

const Container = styled(View)`
  width: 100%;
  height: 100%;
  padding: 15px;
`;

const CategoryButton = styled(TouchableOpacity)`
  ${theme.flexStart_R};
  padding: 0 15px;
  margin-bottom: 5px;

  border: 1px solid #e4e4e4;
`;
