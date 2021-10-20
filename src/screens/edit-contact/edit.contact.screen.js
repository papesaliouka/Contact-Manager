import React from "react";
import Header from "../../components/header/header.component";
import ContactForm from "../../components/contact-form/contact.form.component";
import { Button } from "react-native-paper";

const EditContactScreen = ({ navigation, route}) => {
  return (
    <>
      <Header title="Edit a Contact" />
      <ContactForm params={route.params}  />
      <Button onPress={() => navigation.navigate("Home")}>
        Go Back To Home Screen
      </Button>
    </>
  );
};

export default EditContactScreen;
