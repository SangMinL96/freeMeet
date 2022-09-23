import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIndex from '@screen/home/HomeIndex';
import React from 'react';
import styled from 'styled-components/native';
import {Text, TouchableOpacity, View} from 'react-native';
import MapIndex from '@screen/map/MapIndex';

const Tab = createBottomTabNavigator();

function MyTabBar({state, descriptors, navigation}: any) {
  return (
    <NavButton>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </NavButton>
  );
}

function MainStack() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{header: () => null}}>
      <Tab.Screen name="Home" component={HomeIndex} />
      <Tab.Screen name="Map" component={MapIndex} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}

export default React.memo(MainStack);

const NavButton = styled(View)`
  width: 100%;
  height: 60px;
  background-color: red;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
