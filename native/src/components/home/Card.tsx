import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from 'style/globalStyles';
import theme from 'style/theme';
import styled from 'styled-components/native';

function Card() {
  return (
    <Container>
      <CardCategory>
        <Text
          style={[
            globalStyles.fontWeight400,
            {backgroundColor: 'gray'},
          ]}>{`점심만남`}</Text>
      </CardCategory>
      <Content>
        <Text>{`개발자를 위한 자동화 프로세스인 지속적인 통합(Continuous Integration)을 의미한다.
CI를 성공적으로 구현할 경우 애플리케이션에 대한 새로운 코드 변경 사항이 정기적으로 빌드 및 테스트되서 공유 레파지토리에 통합되므로 여러 명의 개발자가 동시에 애프리케이션 개발과 관련된 코드 작업을 할 경우 충돌하는 문제를 해결할 수 있다.
요약하자면 code 작성 - Build - Test를 짧은 주기로 자동화 하는것`}</Text>
      </Content>
      <BottomBox>
        <View style={[globalStyles.flexCenter_R]}>
          <Text>좋아요</Text>
          <Text>댓글</Text>
        </View>
        <View style={[globalStyles.flexCenter_R]}>
          <Text>하트</Text>
        </View>
      </BottomBox>
    </Container>
  );
}

export default React.memo(Card);

const Container = styled(View)`
  padding-top: 15px;
  width: 100%;
  background-color: white;
`;

const CardCategory = styled(View)`
  padding: 0 15px;
`;

const Content = styled(View)`
  padding: 15px;
  width: 100%;
`;

const BottomBox = styled(View)`
  padding: 0 15px;
  ${theme.flexBetween_R};
  width: 100%;
  border-top-width: 1px;
  border-top-color: ${theme.ashgray};
  margin-top: 15px;
  height: 40px;
`;
