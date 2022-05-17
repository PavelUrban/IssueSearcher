import { createSelector } from 'reselect';

import { RootState } from '@store/index';
import { IRepoBase } from '@models/repo';
import { getRepo } from '@utils/repo';
import { IIssueBase } from '@models/issue';

export const getRepos = (state: RootState) => state.repos.repos;

export const getFollowingIssuesForRepo = (currentRepo?: IRepoBase) =>
  (state: RootState): IIssueBase[] => !currentRepo
    ? []
    : getRepo(getRepos(state), currentRepo)?.followingIssues || [];

export const getFollowingIssuesMapForRepo = (currentRepo?: IRepoBase) =>
  createSelector(
    getFollowingIssuesForRepo(currentRepo),
    (followingIssues: IIssueBase[]) => followingIssues.reduce((acc, issue) => {
      acc[issue.id] = issue;
      return acc;
    }, {})
  );
