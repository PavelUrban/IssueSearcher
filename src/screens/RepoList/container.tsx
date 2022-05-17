import React, { memo, useCallback } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useAppDispatch, useAppSelector } from "@hooks/store";
import { getRepos } from '@store/repos/selectors';
import { SCREEN_NAMES } from '@navigation/screenNames';
import { IRepo } from '@models/repo';

import { RepoList as RepoListView } from './view';
import { deleteRepo } from "@store/repos/actions";

interface IProps extends NativeStackScreenProps<{}> {}

export const RepoList = memo<IProps>(({ navigation }) => {
  const repos = useAppSelector(getRepos);
  const dispatch = useAppDispatch();

  const openRepo = useCallback((repo: IRepo) => navigation.navigate(SCREEN_NAMES.ISSUES_LIST, { repo }), []);
  const removeRepo = useCallback((repo: IRepo) => dispatch(deleteRepo(repo)), []);
  const addRepo = useCallback(() => navigation.navigate(SCREEN_NAMES.ADD_REPO), []);

  return (
    <RepoListView
      repos={repos}
      openRepo={openRepo}
      removeRepo={removeRepo}
      addRepo={addRepo}
    />
  );
});
