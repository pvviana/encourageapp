import { StackNavigator } from 'react-navigation';

import Login from './components/Login';
import Logged from './components/Logged';

export const SignedOutRoutes = StackNavigator({
        Login: {
            screen: Login/*,
            navigationOptions: {
               // title: "Entrar",
                headerMode:'none',
                headerVisible: false
            }*/
        },  
},
{headerMode: 'none'});

export const SignedInRoutes = StackNavigator({
        Logged: {
            screen: Logged,
            navigationOptions: {
                title: "Meu Perfil" 
            }
        },
});


export const createRootNavigator = (signedIn = false) => {
    return StackNavigator({
      SignedIn: { screen: SignedInRoutes },
      SignedOut: { screen: SignedOutRoutes }
    },
    {
      headerMode: "none",
      mode: "card",
      initialRouteName: signedIn ? "SignedIn" : "SignedOut",
      navigationOptions: {
        gesturesEnabled: false
      }
    });
  };