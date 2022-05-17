import React, { memo, useEffect, useRef } from 'react';
import { Animated, ViewStyle } from 'react-native';

import { CONFIG } from '@config/index';

interface IProps {
  visible?: boolean;
  style?: ViewStyle;
}

export const AnimatedHiddenContent = memo<IProps>(({ visible, children, style }) => {
    const fadeAnimationOpacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (!visible) return;

        fadeAnimationOpacity.setValue(0);
        Animated.timing(fadeAnimationOpacity, {
            toValue: 1,
            duration: CONFIG.ANIMATION_DURATION,
            useNativeDriver: true,
        }).start();
    }, [visible]);
    if (!visible) return null;

    return (
      <Animated.View
        style={[style, { opacity: fadeAnimationOpacity }]}
      >
          {children}
      </Animated.View>
    );
});
