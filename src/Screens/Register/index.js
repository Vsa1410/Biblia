import axios from "axios";
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, Snackbar, TextInput } from "@react-native-material/core";
import { baseUrl } from "../../../serverConnections/routes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Notifications from 'expo-notifications'
import AsyncStorage from "@react-native-async-storage/async-storage";



const Register = () =>{

    const navigate = useNavigate();

    const [isLoading, setLoading] = useState(false)
    const [confirmPassword, setConfirmPassword]= useState('')
    const[passwordError, setPasswordError]=useState()

    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [token, setToken] = useState('')

   

    function verifyPassword(){
        if(password === confirmPassword){
            setPasswordError(false)
            storeUserData()

        }else{
            setPasswordError(true)
            return
        }
    }
    
   
   

    async function storeUserData(){
        if(!name.trim()){
            alert("Por favor insira um nome")
            return
        }
        if(!email.trim()){
            alert("Por favor, insira um email")
            return
        }
        if(!password.trim()){
            alert("Insira a sua senha")
            return
        }
        setLoading(true)
        
            console.log(name+email+password)
            
            axios.post(baseUrl.generalUsers,{
                name:name,
                email:email,
                password:password,
                })
        .then(
            (response)=>{
                console.log(response);
                console.log(password)
                navigate('/login')
            }
        )
        .catch((res)=>{
            console.log(res)
            setLoading(false)
        })
    }
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.title} >Cadastrar novo usuário</Text>

            <TextInput style={styles.input} 
                placeholder="Nome     ex: João"
                onChangeText={e=>setName(e)}
                
                />
            <TextInput style={styles.input} 
                placeholder="Email     ex: user@email.com" 
                textContentType="emailAddress"
                autoCapitalize="none"
                onChangeText={e=>setEmail(e)}
                
                />
            
            <TextInput style={styles.input} 
                placeholder="Senha" 
                textContentType="newPassword" 
                secureTextEntry={true}
                autoCapitalize="none"
                onChangeText={e=>setPassword(e)}
                
                
                />

            <TextInput style={styles.input} 
                placeholder="Confirme sua Senha" 
                textContentType="newPassword" 
                secureTextEntry={true}
                autoCapitalize="none"
                onChangeText={e=>setConfirmPassword(e)}
                
                
                />
            {passwordError && <Snackbar
                        message="Senhas diferentes"    />}    
            <View style={styles.buttons}>

                {isLoading&&<ActivityIndicator/>}
                
                <Button
                    title={"Cancelar"}
                    color="error"
                    onPress={()=>{navigate('/login')}}
                    />
                <Button
                    title={"Cadastrar"}
                    color="#0f5e3d"
                    loading={isLoading}
                    onPress={verifyPassword}

                    />
            </View>

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        margin:20
    },
    input:{
        borderColor:'#46c690',
        borderStyle:'solid',
        borderRadius:12,
        margin:20,
        width:"70%",
        alignSelf:"center",
        
        
    },
    buttons:{
        flexDirection:'row',
        justifyContent:'space-around',
        paddingTop:50
    },
    container:{
        paddingLeft:20,
    }
})
export default Register