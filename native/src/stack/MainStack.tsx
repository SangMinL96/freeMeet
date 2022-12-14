import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIndex from '@screen/home/HomeIndex';
import MapIndex from '@screen/map/MapIndex';
import ProfileIndex from '@screen/profile/ProfileIndex';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {globalStyles} from 'style/globalStyles';
import styled from 'styled-components/native';

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
            key={`${route.name}_${index}`}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Text
              style={{
                textAlign: 'center',
              }}>
              {route.name == '홈' && (
                <Icon
                  name="home"
                  size={23}
                  color={isFocused ? '#262626' : '#808080'}
                />
              )}
              {route.name == '채팅' && (
                <Icon
                  name="message-square"
                  size={23}
                  color={isFocused ? '#262626' : '#808080'}
                />
              )}
              {route.name == '내 근처' && (
                <Icon
                  name="map-pin"
                  size={23}
                  color={isFocused ? '#262626' : '#808080'}
                />
              )}
              {route.name == '내 정보' && (
                <Icon
                  name="user"
                  size={23}
                  color={isFocused ? '#262626' : '#808080'}
                />
              )}
            </Text>
            <Text
              style={[
                globalStyles.fontWeight600,
                {
                  color: isFocused ? '#262626' : '#808080',
                  textAlign: 'center',
                  flexDirection: 'column',
                  fontSize: 11,
                },
              ]}>
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
      initialRouteName="홈"
      screenOptions={{header: () => null}}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name="홈"
        initialParams={{category: {title: '내 주변', id: 'mylocation'}}}
        component={HomeIndex}
      />
      <Tab.Screen name="준비중" component={ProfileIndex} />
      <Tab.Screen name="내 근처" component={MapIndex} />
      <Tab.Screen name="채팅" component={ProfileIndex} />
      <Tab.Screen name="내 정보" component={ProfileIndex} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}

export default React.memo(MainStack);

const NavButton = styled(View)`
  width: 100%;
  height: 50px;
  background-color: white;
  border-top-color: #eeeeee;
  border-top-width: 1px;
  border-top-style: solid;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
