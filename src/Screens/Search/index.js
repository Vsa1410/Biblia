import {Text, ScrollView, View, StyleSheet, Item, FlatList, Pressable, Keyboard} from 'react-native'
import { TextInput,IconButton, Button, } from '@react-native-material/core'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useEffect, useState } from 'react';
import Card from './Cards';
import { ActivityIndicator } from "@react-native-material/core";
import { useNavigate } from 'react-router-native';


const data = require('../../../assets/database/aa.json')

const Search = ()=>{

    const navigate = useNavigate()
    
    const [searchText , setSearchText] = useState('');
    const [completeResults, setCompleteResults] = useState([]);
    const [loading, setLoading] = useState(false)

        
    var livro  = '';
    var capitulo = "";
    var versiculo = '';
    var results = []

    
    
    async function search(){
        
        
    data.forEach((livros, index)=>{
        livro = index
        
        livros.chapters.forEach((chapter, index)=>{
        capitulo = index
        chapter.forEach((verse, index)=>{
            if(verse.includes(searchText) || verse.includes(searchText.toLowerCase())){
            
            versiculo = index
            results.push({verse, livro, capitulo,versiculo})
            }
        })
        })
    })
    
    return results
    }

    async function handleSearch(text){
        

        const searchResults = await search(text)
        .then(results=>{

            setCompleteResults(results)
            setLoading(false)
        })

           
        

        
            

        
    }
       
    
    if(loading === true){
        handleSearch(searchText)
    }
      
      
        
    return(
        <View style={styles.container}>
            <TextInput
                
                variant="outlined"
                leading={ (
                    <IconButton icon={ <Icon name="magnify" size={35}/>}/>
                )}
                onChangeText={newText => setSearchText(newText)}
                style={styles.search}
                color='black'
                onSubmitEditing={()=> setLoading(true)}
                
                
                />
            <Button 
                              
                onPress= {()=> {
                    Keyboard.dismiss()
                    setTimeout(() => {
                        setLoading(true)
                        
                    }, 2000);
                }}
                title='Buscar'
                style={styles.button}
                color='black'
                loading={loading}
                  
                /> 
                      
                
            
            <ScrollView style={styles.results}>
            {loading&&

                <Text>Carregando resultados...</Text>
                }
                
                {completeResults.map((item, index) => {
                    return (
                        <Pressable onPress={()=> navigate(`/verse/${(item.livro)}/${item.capitulo}`)}>
                            <View style={styles.item} key={index}>
                                <Card 
                                text={item.verse.substring(0, 80)}
                                reference={`${data[item.livro].name} ${(item.capitulo+1)}:${item.versiculo+1}`}
                                
                                />
                                
                            </View>
                        </Pressable>
                    )
                })}
            </ScrollView>
            <View style={styles.blankspace}>
                <Text></Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    search:{
        width:'90%',
        alignSelf:'center',
        marginTop:10,
        marginBottom:10,
        
    },
    results:{
        width:'100%',
        marginBottom:"20%",
        maxMarginBottom:75,
        marginTop:5,
        
    },
    container:{
        paddingButton: 300,
        marginBottom:300,
    },
    button:{
        width: 200,
        alignSelf:'center',
        marginTop:10,
        marginBottom:10,

    }, 
    item:{
        
        
        minWidth:"100%",
        flexDirection:'row',
        fontSize:10,
        
    },
    icon:{
        alignSelf:'center',
        
    },
    blankspace:{
        paddingTop:500
    },
   
   
})
export default Search