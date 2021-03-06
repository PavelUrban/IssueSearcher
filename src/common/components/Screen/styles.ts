import { StyleSheet } from 'react-native';

import { COLORS, rem } from '@styles/index';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: COLORS.mainBackgroundColor,
    paddingVertical: rem(10),
  },
});
