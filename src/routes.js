import  React  from "React";
import { StackNavigator } from 'react-navigation';

import { Button } from "react-native-elements";

import Login from './components/Login';
import Logged from './components/Logged';
import Perfil from './components/Perfil';
import FormLista from './components/FormLista';


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
            screen: Logged
        },
        Perfil: {
          screen: Perfil,
          navigationOptions: {
              title: "Meu Perfil"
          }
        },
        FormLista: {
          screen: FormLista,
          navigationOptions: {
            title: "Adicionar Lista de Tarefas"
          }
        }
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