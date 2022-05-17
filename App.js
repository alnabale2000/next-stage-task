import React,{useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import CatList from './components/cat-list';
import FloatingActionButton from './components/FBA';

export default function App() {
  const [cats, setCats] = useState([
    {name:'Lucy',age:'3','color':'white and black',id:1},
    {name:'Masha',age:'2','color':'white',id:2},
    {name:'Ruby',age:'3','color':'yellow and white',id:3},
    {name:'Wanwan',age:'4','color':'gray',id:4},
    {name:'Mia',age:'1','color':'white and gray',id:5},
    {name:'Eve',age:'7','color':'yellow',id:6},
]);

  const addCat = (cat) => {
    cat.key = Math.random().toString();
    setCats((currentCats) => {
        return [cat, ...currentCats];
    });
    setModalOpen(false);
  };
  
  return (
    <View style={styles.container}>
      <Header/>
      <CatList catList={cats} />
      <FloatingActionButton addCat={addCat}/>
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
