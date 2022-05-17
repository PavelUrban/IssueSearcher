import React, { memo, useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { Screen } from '@components/Screen';
import { Button } from '@components/Button';
import { IRepo } from '@models/repo';
import { getRepoHash } from '@utils/repo';

import { styles } from './styles';
import { NoRepos } from './components/NoRepos';
import { RepoInfo } from './components/RepoInfo';

interface IProps {
  repos: IRepo[];
  addRepo: () => void;
  removeRepo: (repo: IRepo) => void;
  openRepo: (repo: IRepo) => void;
}

export const RepoList = memo<IProps>(({ repos, addRepo, openRepo, removeRepo }) => {
  const renderRepo = useCallback<ListRenderItem<IRepo>>(({ item }) =>
    <RepoInfo repo={item} removeRepo={removeRepo} openRepo={openRepo} />, []);

  return (
    <Screen>
      <FlatList
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        data={repos}
        keyExtractor={getRepoHash}
        renderItem={renderRepo}
        ListEmptyComponent={NoRepos}
      />
      <Button onPress={addRepo} title='Add Repo'/>
    </Screen>
  );
});
