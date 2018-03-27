import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native';
import  {Button, FormInput, FormLabel, CheckBox}  from 'react-native-elements';
import { onSignIn } from "../services/Auth";


class Login extends Component {
  state = {
    checked: false,
  };

  signedIn = () => {
    this.props.navigation.navigate('SignedIn');
  };

  render(){
    return(
      <View style={stylesTela.container}>
        <StatusBar
          backgroundColor="#438496"
          barStyle="light-content"
        />
        <FormLabel labelStyle={styles.labels} >Login</FormLabel>
        <FormInput 
          containerStyle={styles.inputContainers} 
          inputStyle={styles.inputText}
          underlineColorAndroid="transparent"
          placeholderTextColor={styles.placeholderCor}
          autoCorrect={false}
          keyboardType="email-address"
          placeholder="Digite seu e-mail ou login." />
        <FormLabel labelStyle={styles.labels} >Senha</FormLabel>
        <FormInput 
          containerStyle={styles.inputContainers} 
          inputStyle={styles.inputText}
          underlineColorAndroid="transparent"
          placeholderTextColor={styles.placeholderCor}
          secureTextEntry= {true}
          autoCorrect={false}
          placeholder="Digite sua senha."/>
        <CheckBox
            center
            title='Manter Conectado'
            checkedColor= "#FFFFFF"
            uncheckedColor= "#FFFFFF"
            containerStyle={styles.checkbox}
            textStyle={styles.checkboxText}
            checked={this.state.checked}
            onPress={() => this.setState({ checked: !this.state.checked })}
            />
          <View style={{marginTop:10}}>
            <Button
              title='Entrar' 
              backgroundColor="#CD5360"
              fontFamily="Roboto"
              onPress={() => {
                onSignIn().then(() => this.signedIn());
              }}
              />
          </View>
      </View>
    );
  }
}

/*export default ({ navigation }) => (
      <View style={stylesTela.container}>
        <StatusBar
          backgroundColor="#438496"
          barStyle="light-content"
        />
        <FormLabel labelStyle={styles.labels} >Login</FormLabel>
        <FormInput 
          containerStyle={styles.inputContainers} 
          inputStyle={styles.inputText}
          underlineColorAndroid="transparent"
          placeholderTextColor={styles.placeholderCor}
          autoCorrect={false}
          keyboardType="email-address"
          placeholder="Digite seu e-mail ou login." />
        <FormLabel labelStyle={styles.labels} >Senha</FormLabel>
        <FormInput 
          containerStyle={styles.inputContainers} 
          inputStyle={styles.inputText}
          underlineColorAndroid="transparent"
          placeholderTextColor={styles.placeholderCor}
          secureTextEntry= {true}
          autoCorrect={false}
          placeholder="Digite sua senha."/>
        <CheckBox
            center
            title='Manter Conectado'
            checkedColor= "#FFFFFF"
            uncheckedColor= "#FFFFFF"
            containerStyle={styles.checkbox}
            textStyle={styles.checkboxText}
            //checked={this.state.checked}
            //onPress={() => this.setState({ checked: !this.state.checked })}
            />
          <View style={{marginTop:10}}>
            <Button
              title='Entrar' 
              backgroundColor="#CD5360"
              fontFamily="Roboto"
              onPress={() => {
                onSignIn().then(() => navigation.navigate("SignedIn"));
              }}
              />
          </View>
      </View>
    );*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#286DA8' //'#F5FCFF',
  },
  labels: {
    fontSize: 15,
    textAlign: 'left',
    margin: 0,
    color:'#FFFF',
    fontFamily: "Roboto"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  inputText:{
    borderWidth:0,
  },
  inputContainers:{
    borderWidth: 1,
    borderColor: '#438496',
    borderRadius: 17 ,
    backgroundColor : "#FFFFFF",
    marginTop:8
  },
  placeholderCor: {
    color: '#e5e5e5'
  },
  checkbox:{
    backgroundColor:"transparent",
    borderWidth:0,
    alignItems: 'flex-start'
  },
  checkboxText:{
    color: "rgb(255, 255, 255)"
  }
});

const stylesTela = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
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


export default Login;