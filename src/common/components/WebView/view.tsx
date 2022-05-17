import React, { memo, useState } from 'react';
import { View } from 'react-native';
import { WebView as WebViewNative } from 'react-native-webview';

import { styles } from './styles';

interface IProps {
  url: string;
}

export const WebView = memo<IProps>(({ url }) => {
  const [size, setSize] = useState<{ width: number, height: number } | null>(null);

  if (!size) return (
    <View
      style={styles.container}
      onLayout={(evn) => setSize(evn.nativeEvent.layout)}
    />
  );

  return (
    <WebViewNative
      source={{ uri: url }}
      style={size}
    />
  );
});
