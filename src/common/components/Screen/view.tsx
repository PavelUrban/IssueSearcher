import React, { memo } from 'react';
import { View, StatusBar, ViewStyle } from 'react-native';

import { COLORS } from '@styles/index';
import { LoadingSpinner } from '@components/LoadingSpinner';

import { styles } from './styles';

interface IProps {
  style?: ViewStyle;
  containerStyle?: ViewStyle;
  loading?: boolean;
}

export const Screen = memo<IProps>(
  ({ children, style, containerStyle, loading }) => {
    return (
      <View style={[styles.container, containerStyle]}>
        <StatusBar
          backgroundColor={COLORS.mainBackgroundColor}
          barStyle='dark-content'
        />

        <View style={[styles.container, style]}>{children}</View>

        <LoadingSpinner visible={loading} />
      </View>
    );
  },
);
