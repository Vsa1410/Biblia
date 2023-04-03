import { View, ScrollView,StyleSheet, Image, Text, ActivityIndicator, Pressable } from "react-native";
import { useNavigate, useParams } from 'react-router-native'
import axios from 'axios'
import { baseUrl } from '../../../serverConnections/routes'
import { useEffect, useState } from 'react'

import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";




const AllPlans = () =>{
    const categories = useParams()
    
    const [data, setData] = useState('')
    

    async function getData(){
        const posts = await AsyncStorage.getItem("@localData"+categories.categories)
        const jsonValue = JSON.parse(posts)
        setData(jsonValue)
    }

    useEffect(()=>{
        getData()
    }, [setData])

    
    if (!data){
        return(
            <View>

                <ActivityIndicator size={'large'}/>
            </View>
        )
    }else{

        return(
            <View>
                <View>
                    <LinearGradient
                         colors={['#495447', '#47903b']}
                         style={styles.banner} >
                        <Text style={styles.title}>Planos de Leitura</Text>
                    </LinearGradient>
                </View>
                    <View style={styles.container} >


                        {data.map((item, index)=>{
                            return(

                                <Pressable onPress={()=>navigate('/webview/'+categories.categories+"/"+index)}>
                                <LinearGradient
                                colors={['#004707', '#839d76']}
                                style={styles.item} key={index}>
                                        <View   >
                                        
                                            <Text style={styles.text}>{item.title}</Text>
                                        </View>
        
                                </LinearGradient>
                            </Pressable>
                            )
                        })}
                    </View>
            </View>
        )
    }
    }
    const styles = StyleSheet.create({
        container: {
            display: "flex",
            minWidth:"100%",
            height:"100%",
            flexDirection:"row",
            gap:15,
            margin:15,
            flexWrap:"wrap"          
            
            
        },
        text:{
            fontSize: 18,
            fontWeight: 'bold',
            color: 'white'
        },
        item:{
            
            width:150,
            height:150,
            borderRadius:12,
            alignItems:"center",
            padding:15,
            justifyContent:"center"
        
            
        },
        title:{
            fontSize:20,
            fontWeight:"bold",
            color:"white",
            
        },
        banner:{
            height:100,
            padding:25
        }
    })
export default AllPlans