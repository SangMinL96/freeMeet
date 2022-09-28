import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  fontWeight300: {
    fontFamily: 'Poppins-Light',
    color: '#262626',
  },
  fontWeight400: {
    fontFamily: 'Poppins-Regular',
    color: '#262626',
  },
  fontWeight500: {
    fontFamily: 'Poppins-Medium',
    color: '#262626',
  },
  fontWeight600: {
    fontFamily: 'Poppins-SemiBold',
    color: '#262626',
  },
  fontWeight700: {
    fontFamily: 'Poppins-Bold',
    color: '#262626',
  },
  flexCenter_R: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  flexCenter_C: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexStart_R: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  flexStart_C: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  flexBetween_R: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexBetween_C: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
