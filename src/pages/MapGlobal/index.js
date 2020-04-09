import React from 'react';
import {WebView} from 'react-native-webview';

export default function MapGlobal() {
  return <WebView source={{uri: 'https://covid.saude.gov.br/'}} />;
}
