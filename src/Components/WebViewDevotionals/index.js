import { useEffect, useState, useMemo } from "react";
import { ScrollView, View, Text, StyleSheet, ActivityIndicator} from "react-native";
import WebView from "react-native-webview";
import { useParams } from "react-router-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


const WebViewsDevotionals = () =>{
    const param = useParams()
    const [response, setResponse] = useState()
    const[isLoading, setIsLoading] = useState(true)

    const [thumbnailData, setThumbnailData] = useState()

    

        async function getLocalDevotionals(){
            
           try{
    
               const jsonValue = await AsyncStorage.getItem('@localDatadevotionals')
               setResponse(JSON.parse(jsonValue))
               setIsLoading(false)
               
                         
              
            }
            catch(err){
                console.log(err)
            }
        }
    
        async function getLocalMessages(){
            
            try{
     
                const jsonValue = await AsyncStorage.getItem('@localDatamessages')
                setResponse(JSON.parse(jsonValue))
                setIsLoading(false)
                
                          
               
             }
             catch(err){
                 console.log(err)
             }
         }
    
         async function getLocalPlans(){
        
            try{

                const jsonValue = await AsyncStorage.getItem('@localDataplans')
                setResponse(JSON.parse(jsonValue))
                setIsLoading(false)
                
                            
                
                }
                catch(err){
                    console.log(err)
                }
        }
        if (param.category === "messages"){
            useEffect(() => {

                getLocalMessages()
                
               
            },[setResponse])
        }else if(param.category === "plans"){
            useEffect(() => {

                getLocalPlans()
                
               
            },[setResponse])
        }else if(param.category === "devotionals"){
            useEffect(() => {

                getLocalDevotionals()
                
               
            },[setResponse])
        }
    
    
   
    const css = "<body style=font-size:40px;>"
    
    const cssbottom="</body>"


    if (isLoading)
        {
        return(
        <ActivityIndicator/>  
        )
     }else{

         return(
             <View style={styles.container}>
            
    
                <Text style={styles.title}>{response[param.plans].title}</Text>

                <View style={styles.view} >

                    <WebView style={styles.webview} 
                        source={{ html: css + response[param.plans].body +cssbottom}}
                        showsVerticalScrollIndicator={false}
                        nestedScrollEnabled={true}


                    />
                </View>
            </View>
    )
    
    }
    
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        color:'black',
        paddingBottom:200
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'left',
        margin: 10,
        color: '#4c669f',
        marginTop: 10
    },
    webview:{
        width: "95%",
        height:"70%",
        marginLeft:15,
        marginRight:30,
        marginBottom:70,
        
        
        
        
        backgroundColor: '#fff',
        
    },
    view:{
        
        height:"100%"
        
        
    }
})
export default WebViewsDevotionals