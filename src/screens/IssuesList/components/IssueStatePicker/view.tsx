import React, { memo } from 'react';
import { View } from 'react-native';

import { ISSUE_STATE } from '@models/issue';
import { Button } from '@components/Button';

import { styles } from './styles';

interface IProps {
  state: ISSUE_STATE;
  onChange: (newState: ISSUE_STATE) => void;
}

export const IssueStatePicker = memo<IProps>(({ state, onChange }) => {
  return (
    <View style={styles.container}>
      {Object.values(ISSUE_STATE).map(key => (
        <Button
          key={key}
          title={key}
          onPress={() => onChange(key as ISSUE_STATE)}
          style={styles.buttonStyle}
          inactive={state !== key}
        />
      ))}
    </View>
  );
});
