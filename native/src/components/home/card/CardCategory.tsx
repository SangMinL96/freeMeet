import React from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import {globalStyles} from 'style/globalStyles';
import theme from 'style/theme';
import styled from 'styled-components/native';

function CardCategory() {
  const testData = [
    '점심만남',
    '즉석만남',
    '질문있어요',
    '점심만남',
    '즉석만남',
    '질문있어요',
    '점심만남',
    '즉석만남',
    '질문있어요',
    '점심만남',
    '즉석만남',
    '질문있어요',
    '점심만남',
    '즉석만남',
    '질문있어요',
    '점심만남',
    '즉석만남',
    '질문있어요',
    '점심만남',
    '즉석만남',
    '질문있어요',
  ];
  return (
    <Container horizontal showsHorizontalScrollIndicator={false}>
      {testData.map((item, index, arr) => {
        return (
          <TouchableOpacity key={`${item}_${index}`}>
            <Text
              style={[
                globalStyles.fontWeight500,
                {
                  marginRight: arr.length === index + 1 ? 0 : 3,
                  backgroundColor: theme.blue,
                  alignSelf: 'flex-start',
                  fontSize: 11,
                  color: 'white',
                  paddingLeft: 6,
                  paddingRight: 6,
                  paddingTop: 4,
                  paddingBottom: 4,
                },
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </Container>
  );
}

export default React.memo(CardCategory);

const Container = styled(ScrollView)`
  width: 100%;
  height: 25px;
  padding: 0 15px;
`;
