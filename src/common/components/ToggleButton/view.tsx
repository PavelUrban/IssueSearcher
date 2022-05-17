import React, { memo } from 'react';
import { View, Text, ViewStyle } from 'react-native';

import { styles } from './styles';
import { Switch } from './components/Switch';

interface IProps {
  value: boolean;
  title: string;
  altTitle: string;
  style?: ViewStyle;
  onChange: (value: boolean) => void;
}

export const ToggleButton = memo<IProps>(
  ({ value, onChange, title, altTitle = title, style }) => {
    return (
      <View style={[styles.container, style]}>
        <Switch value={value} onChange={onChange} />
        {value ? (
          <Text style={styles.title}>{title}</Text>
        ) : (
          <Text style={styles.title}>{altTitle}</Text>
        )}
      </View>
    );
  });
