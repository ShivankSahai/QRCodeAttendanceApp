import React, {Component} from 'react';
import Login from './components/Login/main'
import Signup from './components/Signup/main'
import EventQRCode from './components/UserDashboard/code'
import UserDashboard from './components/UserDashboard/main'
import OrgDashboard from './components/OrgDashboard/main'
import {Platform, StyleSheet, Text, View} from 'react-native';
import Reactotron from 'reactotron-react-native'

export default class App extends Component<Props,State> {
  render() {
    Reactotron
    .configure({
      name: "React Native Demo"
    })
    .useReactNative({
      asyncStorage: false, // there are more options to the async storage.
      networking: { // optionally, you can turn it off with false.
        ignoreUrls: /symbolicate/
      },
      editor: false, // there are more options to editor
      errors: { veto: (stackFrame) => false }, // or turn it off with false
      overlay: false, // just turning off overlay
    })
    .connect();

    return (
      // <Login />
      // <Signup />
      // <EventQRCode />
      // <UserDashboard />
      <OrgDashboard />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

interface Props {}
interface State {}