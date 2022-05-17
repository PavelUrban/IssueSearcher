import React, { memo, useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useAppSelector, useAppDispatch } from '@hooks/store';
import { getRepos } from '@store/repos/selectors';
import { addRepo as addRepoAction } from '@store/repos/actions';
import { IRepoBase } from '@models/repo';
import { isEqualRepos } from '@utils/repo';
import { getProjectDetails } from '@api/index';

import { AddRepo as AddRepoView } from './view';

interface IProps extends NativeStackScreenProps<{}> {}

export const AddRepo = memo<IProps>(({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const repos = useAppSelector(getRepos);
  const dispatch = useAppDispatch();

  const addRepo = useCallback(async (newRepo: IRepoBase) => {
    const repoAllreadyExist = Boolean(repos.find((repo) => isEqualRepos(repo, newRepo)));
    if (repoAllreadyExist) {
      Alert.alert('This repo already exists!');
      return;
    }

    setLoading(true);

    try {
      const newRepoData = await getProjectDetails(newRepo);
      dispatch(addRepoAction(newRepoData));

      navigation.goBack();
    } catch (err) {
      Alert.alert(err.msg);
      setLoading(false);
    }
  }, [repos]);

  return (
    <AddRepoView
      addRepo={addRepo}
      loading={loading}
    />
  );
});
