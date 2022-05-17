import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RepoList } from '@screens/RepoList';
import { AddRepo } from '@screens/AddRepo';
import { IssuesList } from '@screens/IssuesList';
import { IssueDetails } from '@screens/IssueDetails';

import { COLORS, rem } from '@styles/index';
import { CONFIG } from '@config/index';

import { SCREEN_NAMES } from './screenNames';

interface IProps {}

const Stack = createNativeStackNavigator();

export const AppNavigation: FC<IProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: COLORS.mainBackgroundColor,
          },
          headerTitleStyle: {
            fontSize: rem(30),
            color: COLORS.mainTextColor,
            fontWeight: '900',
          },
          headerTintColor: COLORS.mainTextColor,
        }}
      >
        <Stack.Screen
          options={{
            headerTitle: CONFIG.TITLE,
          }}
          name={SCREEN_NAMES.REPO_LIST}
          component={RepoList}
        />
        <Stack.Screen
          options={{
            headerTitle: 'Add Repo',
          }}
          name={SCREEN_NAMES.ADD_REPO}
          component={AddRepo}
        />
        <Stack.Screen
          options={{
            headerTitle: 'Issues List',
          }}
          name={SCREEN_NAMES.ISSUES_LIST}
          component={IssuesList}
        />
        <Stack.Screen
          options={{
            headerTitle: 'Issues Details',
          }}
          name={SCREEN_NAMES.ISSUES_DETAILS}
          component={IssueDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
