import React, { useContext } from "react";
import Header from "../../components/header/header.component";
import { Text, View, StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";
import Icon from "react-native-vector-icons/AntDesign";
import { ContactContext } from "../../services/context/contact.context";

const ShowContactScreen = ({ navigation, route }) => {
  const { name, phone } = route.params;
  const { deleteContact } = useContext(ContactContext);
  return (
    <>
      <Header title="Show Contact" />
      <Card style={{ marginTop: 150, marginHorizontal: 40, marginBottom:40 }}>
        <Icon
          style={{ position: "absolute", right: 0 }}
          name="delete"
          size={20}
          color="red"
          onPress={() => {
            deleteContact({ name, phone });
            navigation.navigate("Home");
          }}
        />
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{phone}</Text>
        <Icon
          name="edit"
          size={20}
          onPress={() => navigation.navigate("Edit", { name, phone })}
        />
      </Card>
      <Button onPress={() => navigation.navigate("Home")}>Return Home</Button>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    marginTop: 10,
  },
});

export default ShowContactScreen;
