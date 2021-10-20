import React from "react";
import Header from "../../components/header/header.component";
import ContactForm from "../../components/contact-form/contact.form.component";
import { Button } from "react-native-paper";

const AddContactScreen = ({ navigation }) => {
  return (
    <>
      <Header title="Add  Contact" />
      <ContactForm />
      <Button onPress={() => navigation.navigate("Home")}>
        Go Back To Home Screen
      </Button>
    </>
  );
};

export default AddContactScreen;
