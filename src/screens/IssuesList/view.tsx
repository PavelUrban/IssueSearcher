import React, { memo, useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { Screen } from '@components/Screen';
import { ToggleButton } from '@components/ToggleButton';
import { getIssueId } from '@utils/issue';
import { IIssueBase, ISSUE_STATE } from '@models/issue';

import { styles } from './styles';
import { NoIssues } from './components/NoIssues';
import { IssueInfo } from './components/IssueInfo';
import { IssueStatePicker } from './components/IssueStatePicker';

interface IProps {
  issues: IIssueBase[];
  loading: boolean;
  openIssue: (issue: IIssueBase) => void;
  loadMore: () => void;
  toggleIssueFollowing: (issue: IIssueBase) => void;
  followingIssuesMap: { [key: string]: IIssueBase };
  showFollowing: boolean;
  onShowFollowingChange: (show: boolean) => void;
  issueState: ISSUE_STATE;
  onIssueStateChange: (newState: ISSUE_STATE) => void;
}

export const IssuesList = memo<IProps>(({ issues, loading, openIssue, loadMore, toggleIssueFollowing, followingIssuesMap, showFollowing, onShowFollowingChange, issueState, onIssueStateChange }) => {
  const renderIssue = useCallback<ListRenderItem<IIssueBase>>(
    ({ item }) => <IssueInfo issue={item} openIssue={openIssue} toggleIssueFollowing={toggleIssueFollowing} follow={Boolean(followingIssuesMap[item.id])}/>,
    [followingIssuesMap]);

  return (
    <Screen loading={loading}>
      <ToggleButton
        value={showFollowing}
        onChange={onShowFollowingChange}
        title='Following'
        altTitle='All'
      />
      <IssueStatePicker
        state={issueState}
        onChange={onIssueStateChange}
      />
      <FlatList
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        data={issues}
        keyExtractor={getIssueId}
        renderItem={renderIssue}
        ListEmptyComponent={NoIssues}
        onEndReached={loadMore}
      />
    </Screen>
  );
});
