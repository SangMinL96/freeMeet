import {useNavigation} from '@react-navigation/native';
import {useTabActionJumpTo} from 'hooks/useTabActionJumpTo';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
function CategoryModalIndex() {
  const {navigate} = useNavigation() as any;
  const [jumpToAction] = useTabActionJumpTo();
  return (
    <Container>
      <TouchableOpacity
        onPress={() => {
          navigate('홈메인');
          jumpToAction('홈', {category: '내주변'});
        }}>
        <Text>asdfs</Text>
      </TouchableOpacity>
    </Container>
  );
}

export default React.memo(CategoryModalIndex);

const Container = styled(View)``;
