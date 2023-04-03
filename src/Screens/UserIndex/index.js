import { createContext, useContext, useEffect } from "react"
import { Text, StyleSheet, View, ScrollView, Pressable } from "react-native"
import { baseUrl } from "../../../serverConnections/routes"
import { useState } from "react"
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import jwtDecode from 'jwt-decode';
import { ActivityIndicator, Button, Divider, ListItem } from "@react-native-material/core"
import { useNavigate } from "react-router-dom"
import { ApiContext } from "../../Components/Context/ApiContext"
import { ThemeContext } from "../../Components/Context/ThemeContext"







function UserIndex(){


    

    const [userData, setUserData]= useState()

    const [decodedToken, setDecodedToken]= useState('')

    const [isLoading, setLoading] = useState(true)

    const navigate = useNavigate()

    const {data, toggleData, deleteUserData} = useContext(ApiContext)
    const {isDarkMode} = useContext(ThemeContext)
   
    useEffect(()=>{
        
       toggleData()
    }, [])
   

    useEffect(()=>{
        
        getLocalToken()
        toggleData()
    },[setDecodedToken])

    async function getLocalToken(){
        const token = await AsyncStorage.getItem('jwtoken')
        
        if(token){
           
            const decode = await jwtDecode(token)
            setDecodedToken(decode.userId)
            getUserData(decode.userId)
        }

    }

    async function getUserData(token) {          
        axios.get (baseUrl.generalUsers+token)
        .then(response => {
            storeLocalData(response.data)
            setUserData(response.data) 
                  
        })          
            
    }

    async function storeLocalData(response){
        try{

            const jsonValue = JSON.stringify(response)
            AsyncStorage.setItem("@userData", jsonValue)
            
            
        }catch{
            console.log("Erro ao salvar no local storage")
        }
    }

   

    /*At this component the data comes from the database is stored
    at AsyncStorage and after this the app takes the data from Async
    Storage, the data stays even without internet, after this, the 
    app compares the previous data with the new data from AsyncStorage,
    if it's different, change the data on AsyncStorage*/

    

        return(
            <View style={isDarkMode?stylesDark.container:styles.container}>
            
                
                {data ? <Text style={isDarkMode?stylesDark.subtitle:styles.subtitle}>Olá, {data.name}</Text>: <Text style={isDarkMode?stylesDark.subtitle:styles.subtitle}>Menu</Text>}
               
                <ScrollView style={isDarkMode?stylesDark.list:styles.list}>
                    

                    <Pressable  onPress={()=> navigate('/userconfiguration')}>
                        <View style={isDarkMode?stylesDark.item:styles.item}>
                            <Text style={isDarkMode?stylesDark.itemText:styles.itemText}>Minha Conta</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={()=> navigate('/favoriteTexts/'+ decodedToken)}>
                        <View style={isDarkMode?stylesDark.item:styles.item} >
                            <Text style={isDarkMode?stylesDark.itemText:styles.itemText}>Textos Favoritos</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={()=> navigate('/allversesofday')}>
                        <View style={isDarkMode?stylesDark.item:styles.item} >
                            <Text style={isDarkMode?stylesDark.itemText:styles.itemText}>Versículo do dia</Text>
                        </View>
                    </Pressable>

                    <Divider style={{marginTop:40}}/>

                    <Pressable onPress={()=> navigate('/theme')}>
                        <View style={isDarkMode?stylesDark.itemMode:styles.itemMode} title="Modo de leitura" >
                            <Text style={isDarkMode?stylesDark.itemText:styles.itemText}>
                                Modo de leitura
                            </Text>
                            {isDarkMode?<Text style={{color:"#c8ccce"}}>Modo Escuro</Text>:<Text style={{color:"#c8ccce"}}>Modo Claro</Text>}
                        </View>
                    </Pressable>
                    
                    
                </ScrollView>
                {/*isLoading&&<ActivityIndicator/>*/}

                
                
            </View>
            )

    }

const styles = StyleSheet.create({
    subtitle:{
        fontSize: 20,
        fontWeight: 'bold',
        margin:15
    },
    container:{
        height:"100%"
    },
    list:{
        width:"100%",
        
        
        display: 'flex',
        flexDirection:"column",

    },
    button:{
        bottom:300
    },
    item:{
        height:60,
        width:"100%",
        justifyContent:"center",
        borderBottomColor:"#c8ccce",
        borderBottomWidth:0.8,
        borderStyle:"solid"
        
    },
    itemText:{
        fontSize:18,
        paddingLeft:30
    },
    itemMode:{
        display:"flex",
        justifyContent:"space-between",
        flexDirection:"row",
        paddingRight:30,
        height:60,
        borderBottomColor:"#c8ccce",
        borderBottomWidth:0.8,
        borderStyle:"solid",
        alignItems:"center"

    }
     
})
const stylesDark = StyleSheet.create({
    subtitle:{
        fontSize: 20,
        fontWeight: 'bold',
        margin:15,
        color:"#fff"
    },
    container:{
        height:"100%",
        backgroundColor: "#181818"
    },
    list:{
        paddingTop: 20,
        height:200,
        
        backgroundColor:"#181818"
    },
    button:{
        bottom:300
    },
    item:{
        height:60,
        width:"100%",
        justifyContent:"center",
        borderBottomColor:"#fff",
        borderBottomWidth:0.8,
        borderStyle:"solid"
        
    },
    itemText:{
        fontSize:18,
        paddingLeft:30,
        color:"#fff"
    },
    itemMode:{
        display:"flex",
        justifyContent:"space-between",
        flexDirection:"row",
        paddingRight:30,
        height:60,
        borderBottomColor:"#c8ccce",
        borderBottomWidth:0.8,
        borderStyle:"solid",
        alignItems:"center"

    }
})

export default UserIndex