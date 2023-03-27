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

           const jsonValue = await AsyncStorage.getItem('@localDataplans')
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
    const css = "<body style=font-size:40px;>"
    
    const cssbottom="</body>"


    if (isLoading)
        {
        return(
        <ActivityIndicator/>  
        )
     }else{

         return(
             <ScrollView >
            
    
                <Text style={styles.title}>{response[param.plans].title}</Text>

                <ScrollView style={styles.view} >

                    <WebView style={styles.webview} 
                        source={{ html: css + response[param.plans].body +cssbottom}}
                        showsVerticalScrollIndicator={false}
                        nestedScrollEnabled={true}


                    />
                </ScrollView>
            </ScrollView>
    )
    
    }
    
}

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
        
        marginLeft:15,
        marginRight:20,
        paddingTop:950,
        
        
        backgroundColor: '#fff',
        
    },
    view:{
        
        marginBottom:0,
        
        
    }
})
export default WebViews