import React from 'react'
import { View, Text } from 'react-native'

type ButtonProps ={
    name: string
}
const ButtonMain : React.FC<ButtonProps> = ({name}) => {
  return (
    <View
    style={{
    backgroundColor: 'darkorange',
        width:'100%',
        padding:10,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:40,
    }}
    >
        <Text 
        style={{
            fontWeight:'bold',
        }}
        >
       {name}
        </Text>
    </View>
  )
}

export default ButtonMain