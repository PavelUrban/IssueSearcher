import React, { memo } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export const NoRepos = memo(() => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>There are no Github repos. Please press "Add Repo" button to add your first repo</Text>
    </View>
  );
});
