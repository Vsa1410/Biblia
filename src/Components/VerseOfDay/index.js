import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import axios from 'axios';
import { baseUrl } from '../../../serverConnections/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect, useContext } from 'react';
import * as Svg from 'react-native-svg';
import  { Circle, Rect } from 'react-native-svg';
import { Surface } from '@react-native-material/core';
import { ThemeContext } from '../Context/ThemeContext';



const VerseOfDay = () =>{

    const [verseOfDay, setVerseOfDay] = useState();

    const {isDarkMode, toggleTheme} = useContext(ThemeContext)

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

    //take the Verse of Day from AsyncStorage
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
        <View style={isDarkMode?stylesDark.background:styles.background}>

        {verseOfDay ? 
        
            <Surface elevation={5} style={isDarkMode?stylesDark.container:styles.container}>
                
            
                <Text style={isDarkMode?stylesDark.title:styles.title}>Versículo do Dia!</Text>
                <Text style={isDarkMode?stylesDark.text:styles.text}>{verseOfDay[(verseOfDay.length)-1].text}</Text>
                <Text style={isDarkMode?stylesDark.reference:styles.reference}>{verseOfDay[(verseOfDay.length)-1].reference}</Text>

            </Surface>
            
                    :<ActivityIndicator/>}
        </View>
        
    )
}
const styles = StyleSheet.create({
    container:{
        borderRadius:12,
        height:200,
        margin:20,
        backgroundColor:'#fff',
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
        bottom:0
        
    },
    title:{
        fontSize:15,
        fontWeight:'bold',
        margin:10
    },
    background:{
        backgroundColor:"#dedede"
    }

})
const stylesDark =StyleSheet.create({
    container:{
        borderRadius:12,
        height:200,
        margin:20,
        backgroundColor:'#454545',
    },
    text:{
        fontSize:16,
        marginTop:10,
        color: 'white',
        margin:20
    },
    reference:{
        fontSize:15,
        color: 'white',
        fontWeight:'bold',
        alignSelf:'flex-end',
        marginRight:10,
        bottom:0
        
    },
    title:{
        fontSize:15,
        fontWeight:'bold',
        margin:10,
        color:'white'
    },
    background:{
        backgroundColor:"#181818"
    }
})

export default VerseOfDay