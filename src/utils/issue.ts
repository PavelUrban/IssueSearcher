import { IIssueBase } from '@models/issue';

export const getIssueId = (issue: IIssueBase): string => String(issue.id);

export const isEqualIssues = (issueA: IIssueBase, issueB: IIssueBase): boolean => getIssueId(issueA) === getIssueId(issueB);
