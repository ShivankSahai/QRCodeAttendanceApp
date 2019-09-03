import React, {Component} from 'react';
import Login from './components/Login/main'
import Signup from './components/Signup/main'
import EventQRCode from './components/UserDashboard/code'
import UserDashboard from './components/UserDashboard/main'
import OrgDashboard from './components/OrgDashboard/main'
import EventScanner from './components/OrgDashboard/eventScanner'
import EventView from './components/OrgDashboard/eventView'
import {Platform, StyleSheet, Text, View} from 'react-native';
import Reactotron from 'reactotron-react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation'

export default class App extends Component<Props,State> {
  constructor(props) {
    super(props);
    this.state = {
      initialRoute: 'Login'
    }
  }

  rootStack = () => {
    const StackNavigator = createStackNavigator({
      Login :{
        screen: Login,
        navigationOptions: ({navigation}) => ({
          header: null,
        })
      },
      Signup: {
        screen: Signup,
        navigationOptions: ({navigation}) => ({
          header: null,
        })
      },
      UserDashboard: {
        screen: UserDashboard,
        navigationOptions: ({navigation}) => ({
          header:null
        })
      },
      EventQRCode:{
        screen: EventQRCode,
        navigationOptions: ({navigation}) => ({
          header: null,
        })
      },
      OrgDashboard:{
        screen: OrgDashboard,
        navigationOptions: ({navigation}) => ({
          header: null,
        })
      },
      EventView:{
        screen: EventView,
        navigationOptions: ({navigation}) => ({
          header: null,
        })
      },
      EventScanner:{
        screen: EventScanner,
        navigationOptions: ({navigation}) => ({
          header: null,
        })
      }
    }, {
      initialRouteName: this.state.initialRoute,
    }) 
    
    const AppContainer = createAppContainer(StackNavigator)
    return <AppContainer />
   }

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
      <UserDashboard />
      // <OrgDashboard />
      // <EventScanner />
      // <EventView />
      // <this.rootStack />
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
interface State {
  initialRoute:string
}