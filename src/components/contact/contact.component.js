import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const Contact = ({ name = "test", phone = 777777777, navigation }) => {
  return (
    <View style={{flexDirection:'row', justifyContent:'space-between',marginHorizontal:40}}>
      <Text>{name}</Text>
      <Text>{phone}</Text>
      <Icon name="mail" size={12}  onPress={()=> navigation.navigate('Edit',{name,phone})} />
    </View>
  );
};

export default Contact;
