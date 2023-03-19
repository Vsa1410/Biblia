import { TextInput, Button, Divider } from "@react-native-material/core"
import { ScrollView, Text, StyleSheet, View, ActivityIndicator } from "react-native"
import {useState, useEffect} from 'react'
import { useNavigate } from "react-router-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import { baseUrl } from "../../../serverConnections/routes"
import jwtDecode from 'jwt-decode';



const Authenticate = () =>{

    const navigate = useNavigate()

    const [isLoading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')

    async function getLocalToken(){
        const token = await AsyncStorage.getItem('jwtoken')
        console.log(token)
        setToken(token)
        
        const tokenjwt= token;

        const decoded = jwtDecode(tokenjwt);
            
        console.log(decoded);
    }

    useEffect(()=>{
        getLocalToken()
    },[])


    async function getToken(){
        setLoading(true)
        axios.post(baseUrl.login,{
            email:email,
            password:password
        })
        .then(res =>{
            setToken(res.data.token)
            AsyncStorage.setItem('jwtoken', res.data.token)
                .then(()=>console.log("TokenSalvo"))
            
            setLoading(false)
            
            setTimeout(() => {
                
                navigate('/userindex')
              }, 2000);

        })
        


    }

    


    if(token){
        return(
            navigate('/userindex')

        )
    }
    
    if(!token){

        return(
            <View style={styles.container}>
                
                <Text style={styles.title}>Login</Text>
                
    
                <TextInput
                    
                    placeholder="Email"
                    inputMode="text"
                    style={styles.input}
                    autoCapitalize="none"
                    textContentType="emailAddress"
                    
                    onChangeText={(text)=>{setEmail(text)}}/>    
    
    
                <TextInput
                    secureTextEntry={true}
                    
                    placeholder="Senha"
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={(text)=>{setPassword(text)}}
                
                />
                <Button
                    title="Entrar"
                    color="#58884c"
                    tintColor="white"
                    style={styles.button}
                    loading={isLoading}
                    onPress={(e)=>{getToken()}}
                    />
                {isLoading&&    
                <ActivityIndicator
                    size={"large"}
                    />}
                
                <Divider/>
                
                <Text style={styles.title}>Ainda não tem Cadastro?</Text>
    
                <Button
                    title="Cadastrar"
                    color="#465ac6"
                    tintColor="white"
                    style={styles.button}
                    onPress={(e)=>
                        setTimeout(() => {
                            
                            navigate('/register')
                          }, 1000)}
                    />
    
    
            </View>
        )
    }

}
const styles = StyleSheet.create({
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000'
    },
    input:{
        marginTop:20,
        width:"90%",
        maxWidth: 500,

    },
    container:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginTop:50,

    },
    button:{
        marginTop:20,
        width:"90%",
        maxWidth: 500,
        marginBottom:30,
    }
})
export default Authenticate