import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useState, useEffect } from "react";
import { View, ScrollView,StyleSheet, Image, Text, ActivityIndicator, Pressable } from "react-native";
import getPlansData from "../../../../serverConnections/routes"
import { LinearGradient } from "expo-linear-gradient";
import { useNavigate } from "react-router-native";




const ThumbnailPlans = () =>{
    const navigate = useNavigate()
    const [thumbnailData, setThumbnailData] = useState()
    
    async function getLocalData(){
        
       try{

           const jsonValue = await AsyncStorage.getItem('@localDataPlans')
           
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
            <ScrollView style={styles.container} horizontal={true}>
            
                {thumbnailData ?
                thumbnailData.map((item, index)=>{
                    return(

                        <LinearGradient
                        colors={['#cb8012', '#ffc11b']}
                        style={styles.item}>
                            <Pressable onPress={()=>navigate('/webview/'+index)}>
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
        marginLeft:15,
        borderRadius:15,
        
    }
})
export default ThumbnailPlans;