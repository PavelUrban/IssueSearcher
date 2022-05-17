import React, { memo, useCallback } from 'react';
import { View, Image, Text } from 'react-native';

import { IRepo } from '@models/repo';
import { TouchableCard } from '@components/TouchableCard';
import { Button } from '@components/Button';

import { styles } from './styles';

interface IProps {
  repo: IRepo;
  removeRepo: (repo: IRepo) => void;
  openRepo: (repo: IRepo) => void;
}

export const RepoInfo = memo<IProps>(({ repo, removeRepo, openRepo }) => {
  const onOpenRepo = useCallback(() => openRepo(repo), []);
  const onRemoveRepo = useCallback(() => removeRepo(repo), []);
  return (
    <TouchableCard
      style={styles.container}
      onPress={onOpenRepo}
    >
      <View style={styles.row}>
        <View style={styles.mainInfoContainer}>
          <View style={styles.row}>
            <Image
              source={{ uri: repo.avatarUrl }}
              style={styles.avatar}
            />
            <View style={styles.repoInfoContainer}>
              <Text style={styles.title}>{repo.organisation}</Text>
              <Text style={styles.title}>{repo.project}</Text>
            </View>
          </View>
        </View>
        <Button
          titleStyle={styles.deleteTitle}
          style={styles.deleteButton}
          title='Delete'
          onPress={onRemoveRepo}
        />
      </View>

      <Text style={styles.desc}>{repo.description}</Text>

      <Text style={styles.state}>Stars: {repo.stars}</Text>
      <Text style={styles.state}>Watchers: {repo.watchers}</Text>
      <Text style={styles.state}>Open Issues: {repo.openIssues}</Text>
    </TouchableCard>
  );
});
