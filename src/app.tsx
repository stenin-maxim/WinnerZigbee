import React from 'react';
import 'ray';
import '@/i18n';
import './app.less';
import { SdmProvider } from '@ray-js/panel-sdk';
import { initPanelEnvironment } from '@ray-js/ray';
import { devices } from '@/devices';
import composeLayout from './composeLayout';

interface Props {
  children: React.ReactNode;
}

initPanelEnvironment({ useDefaultOffline: true });
class App extends React.Component<Props> {
  componentDidMount() {
    console.log('=== App did mount');
  }

  render() {
    return <SdmProvider value={devices.common}>{this.props.children}</SdmProvider>;
  }
}

export default composeLayout(App);
