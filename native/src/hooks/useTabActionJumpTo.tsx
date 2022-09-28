import {TabActions, useNavigation} from '@react-navigation/native';
export const useTabActionJumpTo = () => {
  const {dispatch} = useNavigation();
  const jumpToAction = (name: string, params) => {
    return dispatch(TabActions.jumpTo(name, params));
  };

  return [jumpToAction];
};
