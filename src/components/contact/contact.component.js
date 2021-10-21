import React, { useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { ContactContext } from "../../services/context/contact.context";

const Contact = ({ name, phone, email, firstName, navigation, id }) => {
  const { deleteContact } = useContext(ContactContext);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 30,
      }}
    >
      <Text>{firstName}</Text>
      <Text>{name}</Text>
      <TouchableOpacity>
        <Icon
          name="edit"
          size={20}
          onPress={() =>
            navigation.navigate("Edit", { name, phone, email, firstName })
          }
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon
          name="eye"
          size={20}
          color="blue"
          onPress={() => {
            navigation.navigate("Show", { name, phone, firstName, email });
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon
          name="delete"
          size={20}
          color="red"
          onPress={() => {
            deleteContact({ name, phone, id, email, firstName });
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Contact;
