import { IIssueBase } from '@models/issue';

export interface IRepoBase {
  organisation: string;
  project: string;
}

export interface IRepo extends IRepoBase {
  description: string;
  avatarUrl: string;
  visibility: string;
  forks: number;
  openIssues: number;
  watchers: number;
  stars: number;
  followingIssues: IIssueBase[];
}
