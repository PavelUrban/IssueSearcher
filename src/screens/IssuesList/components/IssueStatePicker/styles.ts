import { StyleSheet } from 'react-native';

import { rem } from '@styles/index';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: rem(10),
  },
  buttonStyle: {
    width: 'auto',
  },
});
