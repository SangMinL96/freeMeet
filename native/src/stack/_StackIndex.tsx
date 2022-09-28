import {createStackNavigator} from '@react-navigation/stack';
import ModalHeader from 'components/header/ModalHeader';
import React from 'react';
import CategoryModalStack from './CategoryModalStack';
import MainStack from './MainStack';

const Stack = createStackNavigator();

function StackIndex() {
  return (
    <Stack.Navigator initialRouteName="홈메인">
      <Stack.Screen
        name="홈메인"
        options={{
          header: () => null,
        }}
        component={MainStack}
      />
      <Stack.Group
        screenOptions={({navigation}) => ({
          cardStyle: {backgroundColor: 'white'},
          header: () => <ModalHeader />,
        })}>
        <Stack.Screen
          name="카테고리모달"
          initialParams={{title: '카테고리'}}
          component={CategoryModalStack}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default StackIndex;
