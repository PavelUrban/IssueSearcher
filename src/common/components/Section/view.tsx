import React, { memo } from 'react';
import { View, ViewStyle } from 'react-native';

import { styles } from './styles';

interface IProps {
  style?: ViewStyle;
}

export const Section = memo<IProps>(({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
});
