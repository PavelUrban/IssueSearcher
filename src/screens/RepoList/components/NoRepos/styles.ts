import { StyleSheet } from 'react-native';

import { COLORS, rem } from '@styles/index';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: rem(10),
  },
  title: {
    color: COLORS.mainTextColor,
    fontSize: rem(22),
    fontWeight: '900',
    textAlign: 'center',
  },
});
