import React, { createContext, useState } from "react";

export const ContactContext = createContext();

let counter = 0;

export const ContactContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  console.log(contacts);
  const saveContact = (contact) => {
    contact.id = counter;
    counter++;
    setContacts((prev) => [contact, ...prev]);
    alert("Saved");
  };

  const deleteContact = (contact) => {
    let newData = contacts.filter((item) => item.name !== contact.name);
    setContacts(newData);
    console.log(contacts)
    console.log(newData)
  };

  return (
    <ContactContext.Provider value={{ contacts, saveContact, deleteContact }}>
      {children}
    </ContactContext.Provider>
  );
};
