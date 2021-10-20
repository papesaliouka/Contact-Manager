import React from 'react';
import Header from '../../components/header/header.component'
import Search from '../../components/search/search.component'
import {Button} from 'react-native-paper';
import ContactList from '../../components/contact-list/contact.list.component';


const HomeScreen = ({navigation})=>{
  return(
    <>
      <Header/>
      <ContactList navigation={navigation} />
      <Button onPress={()=>navigation.navigate('Add')} >Add a Contact</Button>
    </>
  )
}

export default HomeScreen