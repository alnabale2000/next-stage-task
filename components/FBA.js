import React from 'react';
import { View, Text, StyleSheet ,TouchableOpacity,Modal,TouchableWithoutFeedback,Keyboard} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { useState } from 'react/cjs/react.development';
import AddingForm from './form';

export default function FloatingActionButton({catList}) {

    const addCat = (cat) => {
        cat.key = Math.random().toString();
        setCats((currentCats) => {
            return [cat, ...currentCats];
        });
        setModalOpen(false);
    };

    const [modalOpen, setModalOpen] = useState(false)
    return (
        <View></View>
        // <View>
        //     <TouchableOpacity
        //         onPress={()=>setModalOpen(true)}
        //         activeOpacity={0.7}
        //         style={styles.TouchableOpacityStyle}>
        //         <MaterialIcons name="add" size={38} color="white" />
        //     </TouchableOpacity>
        //     <Modal visible={modalOpen} animationType='slide'>
        //         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        //             <View style={styles.modalContent}>
        //                 <MaterialIcons 
        //                     name='close'
        //                     size={24} 
        //                     style={styles.modalClose} 
        //                     onPress={() => setModalOpen(false)} 
        //                 />
        //                 <AddingForm addCat={addCat}/>
        //             </View>
        //         </TouchableWithoutFeedback>
        //     </Modal>
        // </View>
    );
}

const styles = StyleSheet.create({
    TouchableOpacityStyle: {
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
    modalClose: {
        marginTop: 40,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalContent: {
        flex: 1,
        backgroundColor:"white"
    }
});