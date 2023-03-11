import { useEffect, useState, useMemo } from "react";
import { ScrollView, View, Text, StyleSheet, ActivityIndicator} from "react-native";
import WebView from "react-native-webview";
import { useParams } from "react-router-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


const WebViews = () =>{
    const param = useParams()
    const [response, setResponse] = useState()
    const[isLoading, setIsLoading] = useState(true)

    const [thumbnailData, setThumbnailData] = useState()
    
    async function getLocalData(){
        
       try{

           const jsonValue = await AsyncStorage.getItem('@localData')
           setResponse(JSON.parse(jsonValue))
           setIsLoading(false)
           
                     
          
        }
        catch(err){
            console.log(err)
        }
    }
    useEffect(() => {

        getLocalData()
        
       
    },[setResponse])
    const css = "<body style=font-size:50px;>"
    
    const cssbottom="</body>"


    if (isLoading)
        {
        return(
        <ActivityIndicator/>  
        )
     }else{

         return(
             <ScrollView>
            
    
                <Text style={styles.title}>{response[param.plans].title}</Text>

                
                <WebView style={styles.webview} 
                    source={{ html: css + response[param.plans].body +cssbottom}}
                    showsVerticalScrollIndicator={false}


                />
            </ScrollView>
    )
    
    }
    
}
const css = `
    body {
      background-color: #f8f8f8;
    }
    h1 {
      color: #333;
      font-size: 30px;
    }
  `;
const styles = StyleSheet.create({
    container: {
        
        width: '90%',
        height: 300,
        color:'black',
        marginTop: 100
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
        width: "90%",
        height: 500,
        marginLeft:15,
        marginRight:20,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        paddingBottom: 10,
    }
})
export default WebViews