import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { STATE_FEATURES, IRepoState } from '@models/state';
import { IRepo, IRepoBase } from '@models/repo';
import { isEqualRepos } from '@utils/repo';
import { isEqualIssues } from '@utils/issue';
import { IIssueBase } from '@models/issue';

import { getFollowingIssuesMapForRepo } from './selectors';

const initialState: IRepoState = {
  repos: [],
};

export const reposSlice = createSlice({
  name: STATE_FEATURES.REPOS,
  initialState,
  reducers: {
    addRepo: (state, action: PayloadAction<IRepo>) => {
      return {
        ...state,
        repos: state.repos.concat([action.payload]),
      };
    },
    deleteRepo: (state, action: PayloadAction<IRepo>) => {
      return {
        ...state,
        repos: state.repos.filter((repo) => !isEqualRepos(repo, action.payload)),
      };
    },
    toggleRepoIssuesFollowing: (state, action: PayloadAction<{ issue: IIssueBase, repo: IRepoBase }>) => {
      return {
        ...state,
        repos: state.repos.map((repo) => !isEqualRepos(repo, action.payload.repo) ? repo : {
          ...repo,
          followingIssues: repo.followingIssues.find(issue => isEqualIssues(issue, action.payload.issue))
            ? repo.followingIssues.filter(issue => !isEqualIssues(issue, action.payload.issue))
            : repo.followingIssues.concat([action.payload.issue]),
        }),
      };
    },
  },
});
