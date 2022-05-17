import React, { memo, useState } from 'react';
import { KeyboardAvoidingView, Platform, StatusBar } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';

import { Screen } from '@components/Screen';
import { Section } from '@components/Section';
import { Button } from '@components/Button';
import { TextInput } from '@components/TextInput';
import { IRepoBase } from '@models/repo';

import { styles } from './styles';

interface IProps {
  addRepo: (repo: IRepoBase) => void;
  loading?: boolean;
}

export const AddRepo = memo<IProps>(({ addRepo, loading }) => {
  const [organisation, setOrganisation] = useState('');
  const [project, setProject] = useState('');

  const headerHeight = useHeaderHeight();

  const validRepo = Boolean(organisation && project);

  const onAdd = () => {
    if (!validRepo) return;

    addRepo({ organisation, project });
  };

  return (
    <Screen loading={loading}>
      <KeyboardAvoidingView
        style={styles.container}
        keyboardVerticalOffset={headerHeight + (StatusBar.currentHeight || 0)}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Section>
          <TextInput
            label='Organisation name'
            placeholder='Organisation name'
            value={organisation}
            onChange={setOrganisation}
          />
          <TextInput
            label='Project name'
            placeholder='Project name'
            value={project}
            onChange={setProject}
          />
        </Section>
        <Button
          onPress={onAdd}
          title='Add'
          disabled={!validRepo}
        />
      </KeyboardAvoidingView>
    </Screen>
  );
});
