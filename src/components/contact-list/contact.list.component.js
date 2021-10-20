import React from "react";
import { FlatList, View, Text } from "react-native";
import Contact from "../contact/contact.component";

const data = [
  // { name: "pape", phone: 12345692 },
  // { name: "pape", phone: 12345693 },
  // { name: "pape", phone: 12345694 },
  // { name: "pape", phone: 12345695 },
  // { name: "pape", phone: 12345696 },
];

const ContactList = ({ navigation }) => {
  const renderItem = ({ item: { name, phone } }) => (
    <Contact name={name} phone={phone} navigation={navigation} key={phone} />
  );
  return (
    <View>
      {!data ? (
        <FlatList data={data} renderItem={renderItem} />
      ) : (
        <Text style={{ color: "red", textAlign: "center", margin:20 }}>
          No Contact Found
        </Text>
      )}
    </View>
  );
};

export default ContactList;
