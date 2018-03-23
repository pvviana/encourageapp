/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {isSignedIn} from './src/services/Auth';
import { createRootNavigator, SignedOutRoutes, SignedInRoutes } from './src/routes';

/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/


export default class App extends Component {

  state = {
    signed: false,
    signLoaded: false,
  };

  componentWillMount(){
    isSignedIn()
      .then(res => this.setState({ signed: res, signLoaded: true}))
      .catch(err => alert("Erro"));
  }

  render() {
    const { signLoaded, signed } = this.state;

    if (!signLoaded){
      return null;
    }
    
    const Layout = createRootNavigator(signed);

    return (
      <Layout />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#286DA8' //'#F5FCFF'
  },
  welcome: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color:'#FFFF',
    fontFamily: "Roboto"
  }
});


/*
<View style={styles.container}>
        <Text style={styles.welcome}>
          SUPS
        </Text>
        <SignedOutRoutes />
      </View>
       */