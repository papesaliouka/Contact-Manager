import React, { useContext } from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { ContactContext } from "../../services/context/contact.context";

const Contact = ({ name = "test", phone = 777777777, navigation, id }) => {
  const { deleteContact } = useContext(ContactContext);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 30,
      }}
    >
      <Text>{name}</Text>
      <Text>{phone}</Text>
      <Icon
        name="edit"
        size={20}
        onPress={() => navigation.navigate("Edit", { name, phone })}
      />
      <Icon
        name="eye"
        size={20}
        color="blue"
        onPress={() => {
          navigation.navigate("Show", { name, phone });
        }}
      />
      <Icon
        name="delete"
        size={20}
        color="red"
        onPress={() => {
          deleteContact({ name, phone, id });
        }}
      />
    </View>
  );
};

export default Contact;
