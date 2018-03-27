import React,{Component } from "react";
import { View,StyleSheet } from "react-native";
import { Card, Button, Text } from "react-native-elements";
import { onSignOut } from "../services/Auth";
import  Icon  from 'react-native-vector-icons/FontAwesome';

 class Logged extends Component {

  static navigationOptions = {
    title: "Listas de Tarefas",
    headerRight:  (
      <Button
        icon={{name: 'user', type: 'font-awesome',color:"#900"}}
        onPress={() => this.paraPerfil('Perfil') }
        backgroundColor="transparent"
        color="transparent"
      />
    )
  }

  signedOut = () => {
    this.props.navigation.navigate('SignedOut');
  };

  paraPerfil = () => {
    this.props.navigation.navigate('Perfil');
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
          <View style={stylesTela.viewButton}>
            <Button
                icon={{name: 'plus-circle', type: 'font-awesome', size:60,color:"#900"}}
                backgroundColor="transparent"
                color="transparent"
                borderRadius={25}
                containerViewStyle={{borderRadius:25}}
                buttonStyle={{borderRadius:25}}
              />
          </View>
      </View>
     );
   }
 }

/*export default ({ navigation }) => (
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
    onPress={() => onSignOut().then(() => navigation.navigate("SignedOut"))}
  />
</Card>
<Icon
  name="plus-circle" 
  size={60} 
  style={stylesTela.Icon}
  color="#900" />
</View>
);*/

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
/*

*/

export default Logged;