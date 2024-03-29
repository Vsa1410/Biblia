import { Button, ListItem, TextInput } from '@react-native-material/core'
import { useContext, useEffect, useState } from 'react'
import {ScrollView, View, Text, StyleSheet} from 'react-native'
import axios from 'axios';
import { baseUrl } from '../../../serverConnections/routes';
import { ApiContext } from '../../Components/Context/ApiContext';
import { useNavigate } from 'react-router-dom';




const UserConfigure = () =>{
    const [name, setName]= useState('');
     const [email, setEmail]= useState('');
      const [password, setPassword] = useState('');
        const [oldPassword, setOldPassword] = useState('');
          const [confirmPassword, setConfirmPassword] = useState('')
            const [passwordError, setPasswordError] = useState('')

    const [loading, setLoading] = useState(false)
    const [loadingLogOut, setLoadingLogOut] = useState(false)      
    const {data, toggleData, deleteUserData, logged} = useContext(ApiContext)
    
        useEffect(()=>{
            toggleData()
            
            
        },[]) 
        
        
    const navigate = useNavigate()   

    
    
    
    async function changeData(){
        
        
        setLoading(true)
        axios.put(baseUrl.generalUsers, {
            password: password,
            email: data.email
          })
          .then(response => {
            
            navigate('/userindex')
            toggleData()
          })
          .catch(error => {
            console.log(error);
          });
          
        }     
          
        

       function validatePassword(){
                       
            if(password === confirmPassword){
                setPasswordError(false)
                changeData()
            }else{
                setPasswordError(true)
                return
            }
       }
    if(!logged){
        useEffect(()=>{

            navigate('/login')
        },[])
        
    }else{

        return(
            <ScrollView style={styles.container}>
            <Text style={styles.title}>Editar Dados de Usuário</Text>
              <ScrollView>
               
              
                <TextInput
                    style={styles.input}
                    placeholder='Nova Senha*'
                    secureTextEntry={true}
                    onChangeText={(e)=> setPassword(e)}
                    autoCapitalize="none"
                    />
                <TextInput
                    style={styles.input}
                    placeholder='Confirme Sua Senha*'
                    secureTextEntry={true}
                    onChangeText={(e)=> setConfirmPassword(e)}
                    autoCapitalize="none"
                    />
                {passwordError&&<Text>As senhas não coincidem</Text>}    
                    
                <Button 
                    title="Enviar"
                    color="black"
                    style={styles.button}
                    onPress={validatePassword}
                    loading={loading}/>              
              </ScrollView>
              <Button
                title="LogOut"
                color="error"
                variant="outLined"
                loading={loadingLogOut}
                style={styles.button}
                onPress={()=>{
                    setLoadingLogOut(true)
                    
                    
                    deleteUserData()
                    
                    navigate('/userindex')
                    setLoadingLogOut(false)
                    
                }}
                />

        </ScrollView>
    )
    }
}
const styles = StyleSheet.create({
    title:{
        margin: 30,
        fontSize:20,

    },
    container:{
        paddingBottom:'37%',
        marginBottom:"10%"
    },
    input:{
        width: "80%",
        alignSelf:'center',
        marginTop:10
    },
    button:{
        margin:30,
        width:"50%",
        alignSelf: 'center'
        
    }
    
})
export default UserConfigure