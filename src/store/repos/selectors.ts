import { createSelector } from 'reselect';

import { RootState } from '@store/index';
import { IRepoBase } from '@models/repo';
import { getRepo } from '@utils/repo';
import { IIssueBase, ISSUE_STATE } from '@models/issue';

export const getRepos = (state: RootState) => state.repos.repos;

export const getFollowingIssuesForRepo = (currentRepo?: IRepoBase, issueState: ISSUE_STATE = ISSUE_STATE.ALL) =>
  (state: RootState): IIssueBase[] => !currentRepo
    ? []
    : (getRepo(getRepos(state), currentRepo)?.followingIssues || [])
      .filter(issue => issue.state === issueState || issueState === ISSUE_STATE.ALL);

export const getFollowingIssuesMapForRepo = (currentRepo?: IRepoBase, state?: ISSUE_STATE) =>
  createSelector(
    getFollowingIssuesForRepo(currentRepo, state),
    (followingIssues: IIssueBase[]) => followingIssues.reduce((acc, issue) => {
      acc[issue.id] = issue;
      return acc;
    }, {})
  );
