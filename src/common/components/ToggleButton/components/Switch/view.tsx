import React, { memo, useCallback } from 'react';
import { TouchableOpacity, View, LayoutAnimation, ViewStyle } from 'react-native';

import { styles } from './styles';

const SWITCH_ANIMATION_DURATION = 100;

interface IProps {
  disabled?: boolean;
  onChange: (value: boolean) => void;
  value: boolean;
  style?: ViewStyle;
}

export const Switch = memo<IProps>(({ disabled, onChange, value, style }) => {
    const active = !disabled && value;

    const onPress = useCallback(() => {
        if (!disabled && typeof onChange === 'function') {
            LayoutAnimation.configureNext({
                ...LayoutAnimation.Presets.linear,
                duration: SWITCH_ANIMATION_DURATION,
            });
            onChange(!value);
        }
    }, [disabled, onChange, value]);

    return (
        <TouchableOpacity
            style={[
                styles.container,
                active ? styles.activeContainer : undefined,
                style,
            ]}
            onPress={onPress}
        >
            <View
                style={[
                    styles.pointer,
                    active ? styles.activePointer : undefined,
                ]}
            />
        </TouchableOpacity>
    );
});
