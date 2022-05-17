import React, { memo } from 'react';
import Spinner from 'react-native-spinkit';

import { rem } from '@styles/index';
import { AnimatedHiddenContent } from '@hoc/AnimatedHiddenContent';
import { COLORS } from '@styles/index';

import { styles } from './styles';

interface IProps {
  visible?: boolean;
}

export const LoadingSpinner = memo<IProps>(({ visible }) => {
  return (
    <AnimatedHiddenContent
      visible={visible}
      style={styles.container}
    >
      <Spinner
        isVisible
        size={rem(65)}
        type='ChasingDots'
        color={COLORS.spinnerColor}
      />
    </AnimatedHiddenContent>
  );
})
