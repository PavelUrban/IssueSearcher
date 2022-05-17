import React, { memo, useCallback, useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useAppDispatch, useAppSelector } from "@hooks/store";
import { getFollowingIssuesMapForRepo } from '@store/repos/selectors';
import { toggleRepoIssuesFollowing } from '@store/repos/actions';
import { IRepo } from '@models/repo';
import { getIssueDetails } from '@api/index';
import { IIssueBase } from '@models/issue';
import { repeatInCaseOfError } from '@utils/common';

import { IssueDetails as IssueDetailsView } from './view';

interface IProps extends NativeStackScreenProps<{ issue: IIssueBase, repo: IRepo }> {}

export const IssueDetails = memo<IProps>(({ route }) => {
  const { issue, repo } = (route?.params || {}) as { issue: IIssueBase, repo: IRepo };

  const dispatch = useAppDispatch();

  const followingIssuesMap = useAppSelector(useCallback(getFollowingIssuesMapForRepo(repo), [repo]));

  const toggleIssueFollowing = useCallback(() => {
    if (!repo || !issue) return;

    dispatch(toggleRepoIssuesFollowing({ issue, repo }));
  }, []);

  return (
    <IssueDetailsView
      issue={issue}
      follow={followingIssuesMap[issue.id]}
      toggleIssueFollowing={toggleIssueFollowing}
      repo={repo}
    />
  );
});
