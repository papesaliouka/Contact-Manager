import React from "react";
import Header from "../../components/header/header.component";
import { Text, View, StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";

const ShowContactScreen = ({ navigation, route }) => {
  const { name, phone } = route.params;
  return (
    <>
      <Header title="Show Contact" />
      <Card style={{marginTop:150, marginHorizontal:40}}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{phone}</Text>
      </Card>
      <Button onPress={() => navigation.navigate("Home")}>Return Home</Button>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    marginTop:10
  },
});

export default ShowContactScreen;
