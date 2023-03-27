import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useState, useEffect } from "react";
import { View, ScrollView,StyleSheet, Image, Text, ActivityIndicator, Pressable } from "react-native";
import getPlansData from "../../../../serverConnections/routes"
import { LinearGradient } from "expo-linear-gradient";
import { useNavigate } from "react-router-native";
import { Button } from "@react-native-material/core";




const Thumbnail = () =>{
    const navigate = useNavigate()
    const [thumbnailData, setThumbnailData] = useState()
    
    async function getLocalData(){
        
       try{

           const jsonValue = await AsyncStorage.getItem('@localDatadevotionals')
           
           return jsonValue != null ? setThumbnailData(JSON.parse(jsonValue)) : null;           
          
        }
        catch(err){
            console.log(err)
        }
    }
    useEffect(() => {

        getLocalData()
       
       
    },[])
        
        return(
            <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false} >
                
            
                {thumbnailData ?
                thumbnailData.map((item, index)=>{
                    return(

                        <LinearGradient
                        colors={['#6c0000', '#454545']}
                        style={styles.item}>
                            <Pressable onPress={()=>navigate('/webview/devotionals/'+index)}>
                                <View key={index} style={styles.item} >
                                
                                    <Text style={styles.text}>{item.title}</Text>
                                </View>

                            </Pressable>
                        </LinearGradient>
                )
                 
                }) : <ActivityIndicator size="large"/> 
            }
        </ScrollView>
    )
}        

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        marginLeft:15
        
        
        
    },
    text:{
        fontSize: 18,
        fontWeight: 'bold',
        
        color: 'white'
    },
    
    item:{
        flexDirection: 'column',
        width:150,
        height:150,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:10,
        marginRight:10,
        borderRadius:15,
        padding:10
        
    }
})
export default Thumbnail;