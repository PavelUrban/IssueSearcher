import React, { memo } from 'react';
import { ViewStyle, Text, TextStyle } from 'react-native';

import { styles } from './styles';
import { TouchableCard } from '../TouchableCard';

interface IProps {
  style?: ViewStyle;
  titleStyle?: TextStyle;
  onPress: () => void;
  title: string;
  disabled?: boolean;
  inactive?: boolean;
}

export const Button = memo<IProps>(({ style, onPress, title, disabled, titleStyle, inactive }) => {
  return (
    <TouchableCard
      style={style}
      onPress={onPress}
      disabled={disabled}
      inactive={inactive}
    >
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableCard>
  );
});
