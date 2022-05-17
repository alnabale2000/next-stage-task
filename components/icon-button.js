import { Text, View ,StyleSheet,TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import { MaterialIcons } from '@expo/vector-icons'; 

export default function IconButton({name,color,onPress})  {
    return (
        <TouchableOpacity style={styles.Btn} onPress={onPress}>
            <MaterialIcons name={name} size={24} color={color} />
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    Btn:{
        flex:1,
        backgroundColor:'#bdbdbd',
        alignItems:"center",
        padding:12.5,   
        borderWidth:0.5,
        borderColor:"black"     
    },
})

