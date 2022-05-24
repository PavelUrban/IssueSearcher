export enum ISSUE_STATE {
  OPEN = 'open',
  CLOSED = 'closed',
  ALL = 'all',
}

export interface IIssueBase {
  createdAt: string;
  title: string;
  id: number;
  user: string;
  userAvatarUrl: string;
  state: ISSUE_STATE;
}
