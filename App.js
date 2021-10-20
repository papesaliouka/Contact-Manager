import { StatusBar } from "expo-status-bar";
import React from "react";
import Navigator from "./src/infrastructure/navigation";
import { ContactContextProvider } from "./src/services/context/contact.context";
export default function App() {
  return (
    <ContactContextProvider>
      <Navigator />
    </ContactContextProvider>
  );
}
