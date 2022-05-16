import React,{useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import CatList from './components/cat-list';
import FloatingActionButton from './components/FBA';

export default function App() {

  
  return (
    <View style={styles.container}>
      <Header/>
      <CatList/>
      <FloatingActionButton/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});
