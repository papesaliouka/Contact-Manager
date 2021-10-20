import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/home/home.screen";
import AddContactScreen from "../../screens/add-contact/add.contact.screen";
import EditContactScreen from "../../screens/edit-contact/edit.contact.screen";
import ShowContactScreen from "../../screens/show-contact/show.contact.screen";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Add" component={AddContactScreen} />
        <Stack.Screen name="Edit" component={EditContactScreen} />
        <Stack.Screen name="Show" component={ShowContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
