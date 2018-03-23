import React from "react";
import { View } from "react-native";
import { Card, Button, Text } from "react-native-elements";
import { onSignOut } from "../services/Auth";

export default ({ navigation }) => (
  <View style={{ paddingVertical: 20 }}>
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
  </View>
);
