import { StyleSheet } from 'react-native';

import { COLORS } from '@styles/index';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.spinnerBackgroundColor,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
});

