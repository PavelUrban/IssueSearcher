import { StyleSheet } from 'react-native';

import { COLORS, rem, elevationShadowStyle } from '@styles/index';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: rem(50),
        height: rem(20),
        borderRadius: rem(10),
        paddingHorizontal: rem(5),

        backgroundColor: COLORS.secondaryButtonBackground,
        ...elevationShadowStyle(10),
    },
    activeContainer: {
        justifyContent: 'flex-end',
        backgroundColor: COLORS.mainButtonBackground,
    },
    pointer: {
        width: rem(20),
        height: rem(14),
        borderRadius: rem(7),
        backgroundColor: COLORS.mainButtonBackground,
    },
    activePointer: {
        backgroundColor: COLORS.secondaryButtonBackground,
    },
});
