import React from 'react';
import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function Header() {
  return (
    <TouchableOpacity
        activeOpacity={0.7}
        style={styles.TouchableOpacityStyle}>
        <MaterialIcons name="add" size={30} color="white" />
    </TouchableOpacity>
);
}

const styles = StyleSheet.create({
    TouchableOpacityStyle: {
        //Here is the trick
        position: 'absolute',
        width: 55,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        left: 45,
        bottom: 45,
        backgroundColor:"#2388CE",
        borderRadius:50
        
    },
});