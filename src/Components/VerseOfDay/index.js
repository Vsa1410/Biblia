import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import axios from 'axios';
import { baseUrl } from '../../../serverConnections/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';


const VerseOfDay = () =>{

    const [verseOfDay, setVerseOfDay] = useState();

    async function getVerseOfDay(){
        axios.get(baseUrl.verseOfDay)
        .then(response =>{
            

            AsyncStorage.setItem("@verseOfDay", JSON.stringify(response.data));
                
            
        })
        .catch(error=>{
            console.log(error);
        })
    }
    useEffect(()=>{
        
            
            getLocalVerse()
            getVerseOfDay()
            

    },[setVerseOfDay])

    async function getLocalVerse(){
        try{
            const jsonValue = await AsyncStorage.getItem("@verseOfDay")
            if(jsonValue){
                const response = await JSON.parse(jsonValue);
                setVerseOfDay(response)
                console.log(verseOfDay)
        }
        }catch{

            console.log("Erro ao ler no local storage")
        }
    }

    

    return(
        <View>

        {verseOfDay ? 
        
            <View style={styles.container}>
            
                <Text style={styles.title}>Versículo do Dia!</Text>
                <Text style={styles.text}>{verseOfDay[(verseOfDay.length)-1].text}</Text>
                <Text style={styles.reference}>{verseOfDay[(verseOfDay.length)-1].reference}</Text>

            </View>
            
                    :<ActivityIndicator/>}
        </View>
        
    )
}
const styles = StyleSheet.create({
    container:{
        borderRadius:12,
        borderStyle:"solid",
        borderWidth:1,
        borderColor:'gray',
        height:140,
        margin:20
        
    },
    text:{
        fontSize:16,
        marginTop:10,
        color: 'black',
        margin:20
    },
    reference:{
        fontSize:15,
        color: 'black',
        fontWeight:'bold',
        alignSelf:'flex-end',
        marginRight:10,
        
    },
    title:{
        fontSize:15,
        fontWeight:'bold',
        margin:10
    }

})

export default VerseOfDay