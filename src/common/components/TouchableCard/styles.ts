import { StyleSheet } from 'react-native';

import { COLORS, elevationShadowStyle, rem } from '@styles/index';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: rem(20),
  },
  contentContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.mainButtonBackground,
    borderRadius: rem(15),
    paddingVertical: rem(15),
    paddingHorizontal: rem(20),
    ...elevationShadowStyle(10),
  },
  disabled: {
    opacity: 0.7,
  },
});
