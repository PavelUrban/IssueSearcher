import { StyleSheet } from 'react-native';

import { rem, COLORS, elevationShadowStyle } from '@styles/index';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    marginTop: rem(20),
    paddingHorizontal: rem(20),
  },
  inputWrap: {
    paddingHorizontal: rem(20),
    backgroundColor: COLORS.mainButtonBackground,
    width: '100%',
    height: rem(44),
    justifyContent: 'center',
    borderRadius: rem(8),
    ...elevationShadowStyle(5),
  },
  textInput: {
    height: '100%',
    width: '100%',
    textAlignVertical: 'center',
    color: COLORS.mainTextColor,
    fontSize: rem(17),
  },
  label: {
    fontSize: rem(20),
    marginBottom: rem(10),
    fontWeight: '700',
    color: COLORS.mainTextColor,
  },
});
