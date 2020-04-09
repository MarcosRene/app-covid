import React from 'react';
import {Platform} from 'react-native';

import {WrapperContainer} from './styles';

export default function Container({children}) {
  return (
    <WrapperContainer enabled={Platform.OS === 'android'} behavior="padding">
      {children}
    </WrapperContainer>
  );
}
