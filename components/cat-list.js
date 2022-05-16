import React,{useState} from 'react'
import { View, Text, StyleSheet, FlatList ,TouchableOpacity ,Button} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
// import { IconButton, Colors } from 'react-native-paper';


// import CatCard from './cat-card';
export default function CatList() {

    const [cats, setCats] = useState([
        {name:'Lucy',age:'3','color':'white and black',id:1},
        {name:'Masha',age:'2','color':'white',id:2},
        {name:'Ruby',age:'3','color':'yellow and white',id:3},
        {name:'Wanwan',age:'4','color':'gray',id:4},
        {name:'Mia',age:'1','color':'white and gray',id:5},
        {name:'Eve',age:'7','color':'yellow',id:6},
    ]);

    return (
    <View style={styles.catsList}>
        <FlatList
        keyExtractor={(item)=> item.id}
        data={cats}
        renderItem={({item})=>(
            <View style={styles.catCard}>
                <View style={styles.info}>
                    <Text style={styles.cardText}>Cat Name : {item.name}</Text>
                    <Text style={styles.cardText}>Cat Age : {item.age}</Text>
                    <Text style={styles.cardText}>Cat Color : {item.color}</Text>
                </View>
                <View style={styles.modification}>
                    <TouchableOpacity style={styles.editBtn}>
                        <MaterialIcons name="edit" size={24} color="#2388CE" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.delBtn}>
                        <MaterialIcons name="delete" size={24} color="red" />
                    </TouchableOpacity>
                </View> 
            </View>
        )}
        />

    </View>
    );
}



const styles = StyleSheet.create({
    catsList: {
        flex:1,
    },
    catCard:{
        backgroundColor: "#f5f5f5",
        marginHorizontal:10,
        marginVertical:15,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        borderColor:"blue",
        borderWidth:0.5,
        
        
    },
    info:{
        padding:15
    },
    cardText:{
        paddingBottom:10,
        fontSize:18,
        fontWeight:'500'
    },
    modification:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    delBtn:{
        flex:1,
        backgroundColor:'#bdbdbd',
        alignItems:"center",
        padding:12.5,
        borderWidth:0.5,
        borderColor:"black"
        

    },
    editBtn:{
        flex:1,
        backgroundColor:'#bdbdbd',
        alignItems:"center",
        padding:12.5,   
        borderWidth:0.5,
        borderColor:"black"     
    }

});