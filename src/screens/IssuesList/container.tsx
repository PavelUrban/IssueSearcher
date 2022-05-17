import React, { memo, useCallback, useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useAppDispatch, useAppSelector } from '@hooks/store';
import { getFollowingIssuesMapForRepo, getFollowingIssuesForRepo } from '@store/repos/selectors';
import { toggleRepoIssuesFollowing } from '@store/repos/actions';
import { SCREEN_NAMES } from '@navigation/screenNames';
import { IRepo } from '@models/repo';
import { getRepoIssues } from '@api/index';
import { CONFIG } from '@config/index';
import { IIssueBase } from '@models/issue';
import { repeatInCaseOfError } from '@utils/common';

import { IssuesList as IssuesListView } from './view';

interface IProps extends NativeStackScreenProps<{ repo: IRepo }> {}

export const IssuesList = memo<IProps>(({ navigation, route }) => {
  const { repo } = (route?.params || {}) as { repo: IRepo };

  const dispatch = useAppDispatch();

  const followingIssuesMap = useAppSelector(useCallback(getFollowingIssuesMapForRepo(repo), [repo]));
  const followingIssues = useAppSelector(useCallback(getFollowingIssuesForRepo(repo), [repo]));

  const [issuesInfo, setIssuesInfo] = useState<{ page: number, issues: IIssueBase[] }>({ page: 0, issues: [] });
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [showFollowingIssues, setShowFollowingIssues] = useState(false);

  useEffect(() => {
    if (!repo || loading || issuesInfo.page === page || !hasMore) return;

    setLoading(true);

    (async () => {
      const newIssues = await repeatInCaseOfError(getRepoIssues, repo, page, CONFIG.PAGE_SIZE);
      setIssuesInfo({ page, issues: issuesInfo.issues.concat(newIssues) });
      if (!newIssues.length) setHasMore(false);

      setLoading(false);
    })();
  }, [repo, page, loading, issuesInfo, hasMore]);

  const loadMore = useCallback(() => {
    if (loading || page !== issuesInfo.page || !hasMore || showFollowingIssues) return;
    setPage(issuesInfo.page + 1);
  }, [loading, issuesInfo.page, page, hasMore, showFollowingIssues]);

  const toggleIssueFollowing = useCallback((issue: IIssueBase) => {
    if (!repo) return;

    dispatch(toggleRepoIssuesFollowing({ issue, repo }));
  }, []);

  const openIssue = useCallback((issue: IIssueBase) => navigation.navigate(SCREEN_NAMES.ISSUES_DETAILS, { issue, repo }), []);

  return (
    <IssuesListView
      issues={showFollowingIssues ? followingIssues : issuesInfo.issues}
      loading={loading}
      loadMore={loadMore}
      openIssue={openIssue}
      toggleIssueFollowing={toggleIssueFollowing}
      followingIssuesMap={followingIssuesMap}
      showFollowing={showFollowingIssues}
      onShowFollowingChange={setShowFollowingIssues}
    />
  );
});
