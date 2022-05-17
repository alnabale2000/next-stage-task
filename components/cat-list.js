import React,{useState} from 'react'
import { View, Text, StyleSheet, FlatList ,TouchableOpacity ,Modal,TouchableWithoutFeedback,Keyboard} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import AddingForm from './form';
import IconButton from './icon-button';
import { Alert } from 'react-native-web';
import { setDisabled } from 'react-native/Libraries/LogBox/Data/LogBoxData';
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

    const [modalOpen, setModalOpen] = useState([false,'']);
    const [id, setId] = useState()

    const addCat = (cat) => {
        cat.id = Math.random().toString();
        setCats((currentCats) => {
            return [cat, ...currentCats];
        });
        setModalOpen([false,'']);
    };

    const editCat=(editCat)=>{
        // console.log(editCat);
        console.log(editCat.name);
        const result= cats.map(cat => {
            if(cat.id===id) return {name:editCat.name,age:editCat.age,color:editCat.color,id:id};
            else{
                return cat;
            }
        });
        setCats(result)
        setModalOpen([false,'']);
    }

    const deleteCat=(id)=>{
        setCats((prevCats)=>{
            return prevCats.filter(cat => cat.id != id);
        })
    }


    return (
    <View style={styles.catsList}>
        <FlatList
        keyExtractor={(item)=> item.id}
        data={cats}
        renderItem={({item})=>(
            <View style={styles.catCard}>
                <View style={{padding:15}}>
                    <Text style={styles.cardText}>Cat Name : {item.name}</Text>
                    <Text style={styles.cardText}>Cat Age : {item.age}</Text>
                    <Text style={styles.cardText}>Cat Color : {item.color}</Text>
                </View>
                <View style={styles.modification}>

                    <TouchableOpacity style={styles.editBtn} onPress={()=> {
                        setId(item.id)
                        setModalOpen([true,'edit'])}}
                    >
                        <MaterialIcons name="edit" size={24} color="#2388CE" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.delBtn} onPress={()=>deleteCat(item.id)}
                    >
                        <MaterialIcons name="delete" size={24} color="red" />
                    </TouchableOpacity>
                </View> 
            </View>
        )}
        />
        {/* Floating Action Button */}
        <View>
            <TouchableOpacity
                onPress={()=>setModalOpen([true,'add'])}
                activeOpacity={0.7}
                style={styles.TouchableOpacityStyle}>
                <MaterialIcons name="add" size={38} color="white" />
            </TouchableOpacity>
            <Modal visible={modalOpen[0]} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons 
                            name='close'
                            size={24} 
                            style={styles.modalClose} 
                            onPress={() => setModalOpen([false,''])} 
                        />
                        {modalOpen[1]=='add'?<AddingForm onSubmit={addCat} text='Add New Cat'/>:<AddingForm onSubmit={editCat} text='Edit Existing Cat'/>}
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>

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
        elevation:6.5,
        shadowColor:'#1a237e',
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
    },
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
        marginTop: 30,
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