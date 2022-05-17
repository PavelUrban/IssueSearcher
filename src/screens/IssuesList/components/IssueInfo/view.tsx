import React, { memo, useCallback } from 'react';
import { View, Image, Text } from 'react-native';
import moment from 'moment';

import { TouchableCard } from '@components/TouchableCard';
import { Button } from '@components/Button';
import { IIssueBase } from '@models/issue';

import { styles } from './styles';

interface IProps {
  issue: IIssueBase;
  openIssue: (issue: IIssueBase) => void;
  toggleIssueFollowing: (issue: IIssueBase) => void;
  follow: boolean;
}

export const IssueInfo = memo<IProps>(({ issue, openIssue, toggleIssueFollowing, follow }) => {
  const onOpenIssue = useCallback(() => openIssue(issue), []);
  const onIssueFollowingPress = useCallback(() => toggleIssueFollowing(issue), []);

  return (
    <TouchableCard
      style={styles.container}
      onPress={onOpenIssue}
    >
      <Text style={styles.title}>{issue.title}</Text>
      <View style={styles.row}>
        <Image
          source={{ uri: issue.userAvatarUrl }}
          style={styles.avatar}
        />
        <View style={styles.mainInfoContainer}>
          <Text style={styles.desc}>User: {issue.user}</Text>
          <Text style={styles.desc}>Open date: {moment(issue.createdAt).format('MM-DD-YYYY')}</Text>
        </View>
        <Button
          titleStyle={styles.buttonTitle}
          style={styles.followButton}
          title={follow ? 'Unfollow' : 'Follow'}
          onPress={onIssueFollowingPress}
        />
      </View>
    </TouchableCard>
  );
});
