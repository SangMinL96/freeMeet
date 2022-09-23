import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import MainStack from './MainStack';
const Stack = createStackNavigator();

function StackIndex() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        options={{
          header: () => null,
        }}
        component={MainStack}
      />
    </Stack.Navigator>
  );
}

export default StackIndex;
