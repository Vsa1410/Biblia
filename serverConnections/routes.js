import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from "jwt-decode";



export const baseUrl = {
    user: "http://192.168.0.116:3001/users",
    generalUsers: 'http://192.168.0.116:3001/generaluser/',
    tokens: 'http://192.168.0.116:3001/tokens',
    devotionals: 'http://192.168.0.116:3001/devotionals',
    plans: 'http://192.168.0.116:3001/plans',
    login: 'http://192.168.0.116:3001/login',
    favorites:'http://192.168.0.116:3001/favorites/',
    verseOfDay: 'http://192.168.0.116:3001/verseofday/'
}

export async function sendExpoToken(token){
    axios.post(baseUrl.tokens,{
        token:token
    })
    .then((response)=>{
        console.log(response);
    })
    .catch((err)=>{
        console.log(err);
    })
}

export async function getPlansData(){

    
    
    

    axios.get(baseUrl.plans)
        .then((response)=>{
            const json = JSON.stringify(response.data);
           
                // Atualiza os dados no Async Storage
                AsyncStorage.setItem('@localDataPlans', json)
                  .then(() => console.log('Objeto atualizado com sucesso!'))
                  .catch((error) => console.error('Erro ao atualizar objeto: ', error));
              })

}    
export async function getDevotionalsData(){
    axios.get(baseUrl.devotionals)
    .then((response)=>{
        const json = JSON.stringify(response.data);
       
            // Atualiza os dados no Async Storage
            AsyncStorage.setItem('@localDataDevotionals', json)
              .then(() => console.log('Objeto atualizado com sucesso!'))
              .catch((error) => console.error('Erro ao atualizar objeto: ', error));
          })
}
    
export async function getLocalToken(){
    const token = await AsyncStorage.getItem('jwtoken')
    const decode = await jwtDecode(token)
    if(token){    
        console.log(decode.userId)
        return decode.userId
        
    }

}

    
            
                    
   