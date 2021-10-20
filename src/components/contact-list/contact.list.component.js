import React, { useContext } from "react";
import { View, Text } from "react-native";
import Contact from "../contact/contact.component";

import { ContactContext } from "../../services/context/contact.context";

const ContactList = ({ navigation }) => {
  const { contacts } = useContext(ContactContext);

  return (
    <View style={{ marginTop: 40, marginHorizontal: 20 }}>
      {contacts &&
        contacts.map(({ name, phone, id }) => (
          <Contact
            navigation={navigation}
            name={name}
            phone={phone}
            key={`${id}`}
            style={{ marginTop: 20 }}
          />
        ))}
      {!contacts.length && (
        <Text style={{ color: "red", textAlign: "center", margin: 20 }}>
          No Contact
        </Text>
      )}
    </View>
  );
};

export default ContactList;
