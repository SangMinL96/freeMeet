import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
type PropsType = {
  type: 'Feather' | 'AntDesign';
  name: string;
  size: number;
  color: string;
};

function CommonIcon({type, name, size, color}: PropsType) {
  const RenderIcon = () => {
    if (type === 'Feather') {
      return <Feather name={name} size={size} color={color} />;
    }
    if (type === 'AntDesign') {
      return <AntDesign name={name} size={size} color={color} />;
    }
  };
  return <>{RenderIcon()}</>;
}

export default React.memo(CommonIcon);
