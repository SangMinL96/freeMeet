import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIndex from '@screen/home/HomeIndex';
import MapIndex from '@screen/map/MapIndex';
import ProfileIndex from '@screen/profile/ProfileIndex';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// Ionicons.loadFont()

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
            <Text
              style={{
                color: isFocused ? '#673ab7' : '#222',
              }}>
              {label}
            </Text>
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
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name="홈"
        navigationKey="home"
        options={{header: () => null}}
        component={HomeIndex}
      />
      <Tab.Screen name="준비중" navigationKey="no" component={ProfileIndex} />
      <Tab.Screen
        name="내 근처"
        navigationKey="mylocation"
        component={MapIndex}
      />
      <Tab.Screen name="채팅" navigationKey="chat" component={ProfileIndex} />
      <Tab.Screen
        name="내 정보"
        navigationKey="profile"
        component={ProfileIndex}
      />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}

export default React.memo(MainStack);

const NavButton = styled(View)`
  width: 100%;
  height: 60px;
  background-color: wheat;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
