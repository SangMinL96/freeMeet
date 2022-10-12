import CommonIcon from 'components/common/CommonIcon';
import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from 'style/globalStyles';
import theme from 'style/theme';
import styled from 'styled-components/native';

function CardFooter() {
  return (
    <Container>
      <ViewBox>
        <ViewBox style={{marginRight: 8}}>
          <Text style={{marginRight: 4}}>
            <CommonIcon
              type="Feather"
              name="heart"
              size={18}
              color={theme.black}
            />
          </Text>
          <Text
            style={[
              globalStyles.fontWeight500,
              globalStyles.flexCenter_R,
              {fontSize: 12},
            ]}>
            {`1,270`}
          </Text>
        </ViewBox>
        <ViewBox>
          <Text style={{marginRight: 4}}>
            <CommonIcon
              type="Feather"
              name="message-circle"
              size={18}
              color={theme.black}
            />
          </Text>
          <Text
            style={[
              globalStyles.fontWeight500,
              globalStyles.flexCenter_R,
              {fontSize: 12},
            ]}>
            {`10`}
          </Text>
        </ViewBox>
      </ViewBox>
      <ViewBox>
        <Text>하트</Text>
      </ViewBox>
    </Container>
  );
}

export default React.memo(CardFooter);

const Container = styled(View)`
  padding: 0 15px;
  ${theme.flexBetween_R};
  width: 100%;
  border-top-width: 1px;
  border-top-color: ${theme.ashgray};
  margin-top: 15px;
  height: 40px;
`;

const ViewBox = styled(View)`
  ${theme.flexCenter_R}
`;
