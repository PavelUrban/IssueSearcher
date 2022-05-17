import { IRepo } from '@models/repo';

export interface IRepoState {
  repos: IRepo[];
}

export enum STATE_FEATURES {
  REPOS = 'repos',
}
