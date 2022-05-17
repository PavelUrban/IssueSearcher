import React, { memo } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export const NoIssues = memo(() => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>There are no issues :(</Text>
    </View>
  );
});
