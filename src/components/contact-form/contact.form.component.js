import React, { useState } from "react";
import { View } from "react-native";
import { TextInput, Button, Card } from "react-native-paper";

import { saveContact, deleteContact } from "../../utils/utils";
import { styles } from "./contact.form.styles";

const ContactForm = ({ params }) => {
  const [phone, setPhone] = useState(0);
  const [name, setName] = useState("");

  const handleNameChange = (event) => {

  };
  const handlePhoneChange = (event) => {
    
  };
  return (
    <Card style={styles.card}>
      <TextInput
        placeholder="Name"
        style={styles.input}
        value={params ? params.name : ""}
        onChangeText={handleNameChange}
      />
      <TextInput
        placeholder="phone"
        style={styles.input}
        value={params ? `${params.phone}` : ``}
        onChangeText={handlePhoneChange}
        keyboardType="phone-pad"
      />
      <View style={styles.button}>
        <Button onPress={() => saveContact({ phone, name })}>Save</Button>
        <Button onPress={() => deleteContact({ phone, name })}>Delete</Button>
      </View>
    </Card>
  );
};

export default ContactForm;
