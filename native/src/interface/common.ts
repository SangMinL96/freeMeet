import type {
  CompositeNavigationProp,
  RouteProp,
} from '@react-navigation/native';
import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import type {StackNavigationProp} from '@react-navigation/stack';

export type TabParamList = '홈' | '준비중' | '내 근처' | '채팅' | '내 정보';
export type StackParamList = '홈메인' | '카테고리모달';

export type ScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<any, TabParamList>,
  StackNavigationProp<any>
>;
export type ScreenRouteProp = RouteProp<any, any>;
