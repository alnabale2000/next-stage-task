import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import FlatButton from './form-button';
export default function AddingForm({onSubmit,text}) {

  return (
    <View style={globalStyles.container}>
        <Formik
        initialValues={{ name: '', age: '', color: '' }}
        onSubmit={(values, actions) => {
            actions.resetForm(); 
            onSubmit(values);
        //   console.log(values);
        }}
        >
        {props => (
            <View>
                <Text style={styles.formTopText}>{text}</Text>
                <TextInput
                    style={globalStyles.input}
                    placeholder='Cat Name'
                    onChangeText={props.handleChange('name')}
                    value={props.values.name}
                />

                <TextInput
                    style={globalStyles.input}
                    multiline
                    placeholder='Cat Color(s)'
                    onChangeText={props.handleChange('color')}
                    value={props.values.color}
                />

                <TextInput 
                    style={globalStyles.input}
                    placeholder='Age'
                    onChangeText={props.handleChange('age')}
                    value={props.values.age}
                    keyboardType='numeric'
                />
                
                <FlatButton text='Submit' onPress={props.handleSubmit} /> 
            </View>
        )}
        </Formik>
    </View>
    
  );
}

const styles = StyleSheet.create({
    formTopText:{
        fontSize:30,
        fontWeight:"500",
        textAlign:"center",
        marginBottom:20,
        
    }
})
