import React, { useState, useContext } from "react";
import { View } from "react-native";
import { TextInput, Button, Card } from "react-native-paper";

import { styles } from "./contact.form.styles";
import { ContactContext } from "../../services/context/contact.context";

const ContactForm = ({ params, edit }) => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const contact = { phone, name, email, firstName };

  const { deleteContact, saveContact } = useContext(ContactContext);

  return (
    <Card style={styles.card}>
      <TextInput
        placeholder="First Name"
        style={styles.input}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        placeholder="Name"
        style={styles.input}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="phone"
        style={styles.input}
        onChangeText={(text) => setPhone(text)}
        keyboardType="phone-pad"
      />
      <View style={styles.button}>
        {!edit && <Button onPress={() => saveContact(contact)}>Save</Button>}
        {edit && (
          <Button
            onPress={() => {
              deleteContact(params);
              saveContact(contact);
            }}
          >
            Edit
          </Button>
        )}
      </View>
    </Card>
  );
};

export default ContactForm;
