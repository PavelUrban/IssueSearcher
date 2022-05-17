import { IRepoBase, IRepo } from '@models/repo';

export const getRepoHash = (repo: IRepoBase): string => `${repo.organisation.toLowerCase()}:${repo.project.toLowerCase()}`;

export const isEqualRepos = (repoA: IRepoBase, repoB: IRepoBase): boolean => getRepoHash(repoA) === getRepoHash(repoB);

export const getRepo = (repos: IRepo[], targetRepo?: IRepoBase): IRepo | undefined => targetRepo ? repos.find(repo => isEqualRepos(repo, targetRepo)) : undefined;
