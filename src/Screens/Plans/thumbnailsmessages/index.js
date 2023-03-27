import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useState, useEffect } from "react";
import { View, ScrollView,StyleSheet, Image, Text, ActivityIndicator, Pressable } from "react-native";
import getPlansData from "../../../../serverConnections/routes"
import { LinearGradient } from "expo-linear-gradient";
import { useNavigate } from "react-router-native";




const ThumbnailMessages = () =>{
    const navigate = useNavigate()
    const [thumbnailData, setThumbnailData] = useState()

    //This is a component that shows the thumbnails from the plans of lecture of the Bible
    
    async function getLocalData(){
        
       try{

           const jsonValue = await AsyncStorage.getItem('@localDatamessages')
           
           return jsonValue != null ? setThumbnailData(JSON.parse(jsonValue)) : null;           
          
        }
        catch(err){
            console.log(err)
        }
    }
    useEffect(() => {

        getLocalData()
        console.log(thumbnailData)
       
    },[])
        
        return(
            <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
            
                {thumbnailData ?
                thumbnailData.map((item, index)=>{
                    return(

                        <LinearGradient
                        colors={['#020029', '#393939']}
                        style={styles.item}>
                            <Pressable onPress={()=>navigate('/webview/messages/'+index)}>
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
        marginLeft:15,
        
        
        
        
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
        paddingLeft:10,
        paddingRight:10,
        borderRadius:15,
        marginRight:10,
        
    }
})
export default ThumbnailMessages;