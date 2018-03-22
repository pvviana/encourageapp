import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import  {Button, FormInput, FormLabel, CheckBox}  from 'react-native-elements';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: true
    };
  }

  render() {
    return (
      <View>
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
          placeholder="Digite seu e-mail ou login." />
        <FormLabel labelStyle={styles.labels} >Senha</FormLabel>
        <FormInput 
          containerStyle={styles.inputContainers} 
          inputStyle={styles.inputText}
          underlineColorAndroid="transparent"
          placeholderTextColor={styles.placeholderCor}
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
              raised
              title='Entrar' 
              backgroundColor="#CD5360"
              fontFamily="Roboto"/>
          </View>
      </View>
    );
  }
}

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

export default Login;