import { StyleSheet } from 'react-native';

import { COLORS, rem } from '@styles/index';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: rem(15),
  },
  title: {
    fontSize: rem(16),
    color: COLORS.mainTextColor,
    fontWeight: '700',
    marginBottom: rem(15),
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainInfoContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: rem(5),
  },
  avatar: {
    width: rem(50),
    height: rem(50),
    borderRadius: rem(25),
  },

  issueInfoContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: rem(10),
  },
  desc: {
    fontSize: rem(14),
    color: COLORS.mainTextColor,
    width: '100%',
    fontWeight: '700',
  },
  followButton: {
    width: 'auto',
    paddingHorizontal: 0,
  },
  buttonTitle: {
    fontSize: rem(14),
  },
});
