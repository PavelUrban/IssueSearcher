import { Octokit } from '@octokit/core';

import { IRepo, IRepoBase } from '@models/repo';
import { IIssueBase, ISSUE_STATE } from '@models/issue';

const octokit = new Octokit({});

export const getProjectDetails = async (repo: IRepoBase): Promise<IRepo> => {
  try {
    const { data: repoData } = await octokit.request('GET /repos/{organisation}/{project}', {
      organisation: repo.organisation,
      project: repo.project,
    });

    return {
      ...repo,
      description: repoData.description,
      avatarUrl: repoData.owner.avatar_url,
      visibility: repoData.visibility,
      forks: repoData.forks,
      openIssues: repoData.open_issues,
      watchers: repoData.network_count,
      stars: repoData.stargazers_count,
      followingIssues: [],
    }
  } catch (err) {
    console.error(err);
    throw { status: err.status, msg: err.response?.data?.message || 'No internet! Check your connection.' };
  }
};

export const getRepoIssues = async (repo: IRepo, page: number, pageSize: number, state: ISSUE_STATE): Promise<IIssueBase[]> => {
  try {
    const { data: issues } = await octokit.request('GET /repos/{organisation}/{project}/issues?page={page}&perPage={pageSize}&state={state}', {
      organisation: repo.organisation,
      project: repo.project,
      page,
      pageSize,
      state,
    });

    return issues.map(issueDTO => ({
      title: issueDTO.title,
      id: issueDTO.number,
      createdAt: issueDTO.created_at,
      user: issueDTO.user.login,
      userAvatarUrl: issueDTO.user.avatar_url,
      state: issueDTO.state,
    }));
  } catch (err) {
    console.error(err);
    throw { status: err.status, msg: err.response?.data?.message || 'No internet! Check your connection.' };
  }
};

export const getIssueDetails = async (repo: IRepoBase, issue: IIssueBase): Promise<{}> => {
  try {
    const { data: issueDetails } = await octokit.request('GET /repos/{organisation}/{project}/issues/{issueId}', {
      organisation: repo.organisation,
      project: repo.project,
      issueId: issue.id,
    });

    console.log({ issueDetails });

    return {
      ...repo,
    }
  } catch (err) {
    console.error(err);
    throw { status: err.status, msg: err.response?.data?.message || 'No internet! Check your connection.' };
  }
};
