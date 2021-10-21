import React, { useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
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
      <TouchableOpacity>
        <Icon
          name="edit"
          size={20}
          onPress={() => navigation.navigate("Edit", { name, phone })}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon
          name="eye"
          size={20}
          color="blue"
          onPress={() => {
            navigation.navigate("Show", { name, phone });
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon
          name="delete"
          size={20}
          color="red"
          onPress={() => {
            deleteContact({ name, phone, id });
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Contact;
