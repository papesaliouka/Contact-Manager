import React from 'react'
import {TextInput} from 'react-native-paper'
import Icon  from 'react-native-vector-icons/AntDesign'
const CustomSearch = ()=>{
  return(
    <>
      <TextInput
        placeholder='search'
        style={{margin:40, height:40}}
        right={<TextInput.Icon name='mail' size={24} color='white'/>}
      />
    </>
  )
}

export default CustomSearch