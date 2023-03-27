import axios from 'axios'
import {View, ScrollView, StyleSheet, Text, Pressable} from  'react-native'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../../../serverConnections/routes'
import { useEffect } from 'react'
import { useState } from 'react'

const data = require('../../../assets/database/aa.json')

const Favorites = () =>{
    //receive id from the another page
    const id = useParams()

    //get data from database and make an array of favorites
    const [favoriteList, setFavoriteList] = useState('')    

    async function getFavorites(){

        axios.get(baseUrl.favorites+id.userId)
        .then(response=>{
            
            setFavoriteList(response.data)
        })
    }
    useEffect(()=>{
        getFavorites()
    },[setFavoriteList])

    if(!favoriteList){
        return(
            <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Favoritos</Text>

                <Text>Infelizmente não encontramos seus textos favoritados</Text>
            </ScrollView>
        </View>
        )
    }
    return(
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Favoritos</Text>

                {favoriteList.map((item, index)=>{
                    return(
                        <Pressable onPress={()=> navigate('/verse/'+(item.book)+'/'+item.chapter)}>

                            <View key={index} style={styles.items}>
                                <Text style={styles.text}>{item.text}</Text>
                                <Text style={styles.reference}>{`${data[item.book].name} ${(item.chapter)+1}:${(item.verse)+1}`}</Text>
                            </View>
                        </Pressable>
                    )
                })}

            </ScrollView>
            <View style={styles.blankSpace}>
                
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        margin:10,
        paddingBottom:"20%"
    },
    title: {
        fontSize:20,
        padding:20,
        fontWeight:"bold",
    },
    items:{
        borderRadius:12,
        borderColor:'#46c690',
        borderStyle:'solid',
        borderWidth:1,
        padding:20,
        margin:15,
    },
    text:{
        fontSize:15,
        color: 'black',
    },
    reference:{
        fontSize:15,
        color: 'black',
        fontWeight:'bold',
        alignSelf:'flex-end'
    },blankSpace:{
        height:"37%"
    }

})
export default Favorites