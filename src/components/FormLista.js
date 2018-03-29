import React,{Component } from "react";
import { View,StyleSheet } from "react-native";
import { Card, Button, Text,FormInput,FormLabel,FormValidationMessage } from "react-native-elements";
import { onSignOut, onSignIn } from "../services/Auth";

 class FormLista extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myKey: null
        }
      }
      
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      title: "Adiconar Lista"
    };
  };

  componentDidMount() {
    //this.props.navigation.setParams({ paraPerfil: this.paraPerfil });
  }

   render(){
     return(
      <View style={stylesTela.container}>  
          <View style={stylesTela.viewButton}>
            <FormLabel>Nome da Lista</FormLabel>
            <FormInput 
            value={this.state.myKey}
            />
            <FormValidationMessage>Error message</FormValidationMessage>
              <Button
                large
                backgroundColor="#03A9F4"
                title="Adicionar"
                //onPress={() => }
                />
                <Text>
                    Stored key is = {this.state.myKey}
                </Text>
          </View>
      </View>
     );
   }
 }

const stylesTela = StyleSheet.create({
  container: {
    flex: 1,
   flexDirection:'column',
   justifyContent: 'space-between',
    //alignItems: 'flex-start',
    //backgroundColor:'#286DA8' //'#F5FCFF'
  },
  welcome: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color:'#FFFF',
    fontFamily: "Roboto"
  },
  icon:{
    flex: 1,
    alignItems: 'flex-start',
    margin: 10
  },
  viewButton:{
    flex: 1,
   alignItems:'flex-start',
  }
});

export default FormLista;