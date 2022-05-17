import React, { memo } from 'react';
import { View, StatusBar, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
      <SafeAreaView
        style={[styles.container, containerStyle]}
        edges={['bottom']}
      >
        <StatusBar
          backgroundColor={COLORS.mainBackgroundColor}
          barStyle='dark-content'
        />

        <View style={[styles.container, style]}>{children}</View>

        <LoadingSpinner visible={loading} />
      </SafeAreaView>
    );
  },
);
