import React, { memo, useCallback } from 'react';
import { TouchableOpacity, ViewStyle, View } from 'react-native';
import { throttle } from 'lodash';

import { CONFIG } from '@config/index';

import { styles } from './styles';

interface IProps {
  style?: ViewStyle;
  onPress: () => void;
  disabled?: boolean;
  inactive?: boolean;
}

export const TouchableCard = memo<IProps>(({ style, onPress, disabled, children, inactive }) => {
  const throttlePress = useCallback(throttle(onPress, CONFIG.PRESS_THROTTLE, { trailing: false }), [onPress]);

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={throttlePress}
    >
      <View style={[styles.contentContainer, disabled || inactive ? styles.disabled : undefined]}>
        {children}
      </View>
    </TouchableOpacity>
  );
});
