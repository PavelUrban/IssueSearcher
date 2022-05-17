import { StyleSheet } from 'react-native';

import { COLORS, rem } from '@styles/index';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'flex-start',
        paddingHorizontal: rem(20),
        paddingBottom: rem(10),
    },
    title: {
        fontWeight: '900',
        color: COLORS.mainTextColor,
        fontSize: rem(18),
        marginLeft: rem(10),
    },
});
