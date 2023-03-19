import { useEffect } from "react"
import { Text, StyleSheet, View, ScrollView } from "react-native"
import { baseUrl } from "../../../serverConnections/routes"
import { useState } from "react"
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import jwtDecode from 'jwt-decode';
import { ActivityIndicator, Button, Divider, ListItem } from "@react-native-material/core"
import { useNavigate } from "react-router-dom"




const UserIndex = () =>{
    const [userData, setUserData]= useState()
    const [decodedToken, setDecodedToken]= useState('')

    const [isLoading, setLoading] = useState(true)

    const navigate = useNavigate()

    async function getLocalToken(){
        const token = await AsyncStorage.getItem('jwtoken')
        const decode = await jwtDecode(token)
        if(token){
            setDecodedToken(decode.userId)
            getUserData(decode.userId)
        }

    }

    useEffect(()=>{
        setLoading(true)
        getLocalToken()
        
    },[setDecodedToken])



   
    
    async function getUserData(token) {          
        axios.get (baseUrl.generalUsers+token)
        .then(response => {
            storeLocalData(response.data)
            
        
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
    async function getLocalData(){
        try{
            const jsonValue = await AsyncStorage.getItem("@userData")
            if(jsonValue){
                const response = await JSON.parse(jsonValue);
                setLoading(false)
                setUserData(response)
                console.log(response)
        }
        }catch{

            console.log("Erro ao ler no local storage")
        }
    }

    /*At this component the data comes from the database is stored
    at AsyncStorage and after this the app takes the data from Async
    Storage, the data stays even without internet, after this, the 
    app compares the previous data with the new data from AsyncStorage,
    if it's different, change the data on AsyncStorage*/

    if(!userData){
        <View>

            {getLocalData()}
            <ActivityIndicator/>
        </View>
    }else{

        return(
            <View style={styles.container}>
                

                <Text style={styles.subtitle}>Olá, {userData.name}</Text>
                <ScrollView style={styles.list}>
                    <ListItem style={styles.item} title="Minha Conta"/>
                    <ListItem style={styles.item} title="Textos Favoritos" onPress={()=> navigate('/favoriteTexts/'+decodedToken)}/>
                    <ListItem style={styles.item} title="Versículo do dia"/>
                    
                </ScrollView>
                {isLoading&&<ActivityIndicator/>}
                <Button
                title="LogOut"
                color="error"
                variant="outLined"
                loading={isLoading}
                style={styles.button}
                onPress={()=>{
                    setLoading(true)
                    {isLoading&&<ActivityIndicator/>}
                    AsyncStorage.removeItem('jwtoken')
                    AsyncStorage.removeItem('@userData')
                    setTimeout(() => {
                        setLoading(false)
                        navigate('/login')
                    }, 3000);
                }}
                />
                
            </View>
            )

    }
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
        paddingTop: 20,
        height:200,
    },
    button:{
        bottom:300
    }
})

export default UserIndex