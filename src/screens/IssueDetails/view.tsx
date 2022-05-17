import React, { memo } from 'react';
import { Image, Text, View } from 'react-native';
import moment from 'moment';

import { Screen } from '@components/Screen';
import { WebView } from '@components/WebView';
import { IIssueBase } from '@models/issue';
import { Button } from '@components/Button';
import { IRepoBase } from '@models/repo';

import { styles } from './styles';

interface IProps {
  issue: IIssueBase;
  repo: IRepoBase;
  toggleIssueFollowing: () => void;
  follow: boolean;
}

export const IssueDetails = memo<IProps>(({ issue, toggleIssueFollowing, follow, repo }) => {

  return (
    <Screen containerStyle={styles.container}>
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
          onPress={toggleIssueFollowing}
        />
      </View>

      <Text style={styles.title}>{issue.title}</Text>
      <WebView url={`https://github.com/${repo.organisation}/${repo.project}/issues/${issue.id}`} />
    </Screen>
  );
});
