import React,{Component } from "react";
import { View,StyleSheet } from "react-native";
import { Card, Button, Text } from "react-native-elements";
import { onSignOut } from "../services/Auth";

 class Perfil extends Component {
  signedOut = () => {
    this.props.navigation.navigate('SignedOut');
  };

   render(){
     return(
      <View style={stylesTela.container}>  
      <Card title="Paulo Victor">
        <View
          style={{
            backgroundColor: "#bcbec1",
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 80,
            borderRadius: 40,
            alignSelf: "center",
            marginBottom: 20
          }}
        >
          <Text style={{ color: "white", fontSize: 28 }}>PV</Text>
        </View>
        <Button
          backgroundColor="#03A9F4"
          title="Sair"
          onPress={() => onSignOut().then(() => this.signedOut())}
        />
      </Card>
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
  }
});
/*

*/

export default Perfil;