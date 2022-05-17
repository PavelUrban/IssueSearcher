import { StyleSheet } from 'react-native';

import { COLORS, rem } from '@styles/index';

export const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: rem(20),
    color: COLORS.mainTextColor,
  },
});
