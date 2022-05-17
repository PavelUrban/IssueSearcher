import React, { memo, useCallback } from 'react';
import { TextInput as TextInputNative, ViewStyle, Text, View, TextStyle, KeyboardTypeOptions } from 'react-native';

import { COLORS } from '@styles/index';

import { styles } from './styles';

interface IProps {
  style?: ViewStyle | ViewStyle[];
  textInputStyle?: TextStyle | TextStyle[];
  value?: string;
  placeholder: string;
  onChange: (value: string) => void;
  password?: boolean;
  keyboardType?: KeyboardTypeOptions;
  maxLength?: number;
  label?: string;
}

export const TextInput = memo<IProps>(({ style, value, placeholder, password, keyboardType, maxLength, onChange, label, textInputStyle }) => {

  return (
    <View style={[styles.container, style]}>
      {!!label && <Text style={styles.label}>{value ? label : ' '}</Text>}
      <View style={styles.inputWrap}>
        <TextInputNative
          value={value}
          autoCapitalize='none'
          underlineColorAndroid='transparent'
          autoCorrect={false}
          returnKeyType={'next'}
          placeholderTextColor={COLORS.secondaryTextColor}
          placeholder={placeholder}
          onChangeText={onChange}
          style={[styles.textInput, textInputStyle]}
          secureTextEntry={password}
          keyboardType={keyboardType}
          maxLength={maxLength}
        />
      </View>
    </View>
  );
});
