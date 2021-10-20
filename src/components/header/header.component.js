import React from "react";
import { Appbar } from "react-native-paper";

const Header = ({ title = "Contact Manager" }) => {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title={title} titleStyle={{textAlign:'center'}}  />
      </Appbar.Header>
    </>
  );
};

export default Header;
