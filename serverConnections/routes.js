import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from "jwt-decode";



export const baseUrl = {
    user:           "https://bibliabackend.fly.dev/users",
    generalUsers:   'https://bibliabackend.fly.dev/generaluser/',
    tokens:         'https://bibliabackend.fly.dev/tokens/',
    devotionals:    'https://bibliabackend.fly.dev/devotionals',
    plans:          'https://bibliabackend.fly.dev/plans/',
    login:          'https://bibliabackend.fly.dev/login/',
    favorites:      'https://bibliabackend.fly.dev/favorites/',
    verseOfDay:     'https://bibliabackend.fly.dev/verseofday/',
    posts:          'https://bibliabackend.fly.dev/posts/'
}

export async function sendExpoToken(token){
    axios.post(baseUrl.tokens,{
        token:token
    })
    .then((response)=>{
        
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
                AsyncStorage.setItem('@localDataplans', json)
                  .then(() => console.log('Objeto atualizado com sucesso!'))
                  .catch((error) => console.error('Erro ao atualizar objeto: ', error));
              })

}    
export async function getDevotionalsData(){
    axios.get(baseUrl.devotionals)
    .then((response)=>{
        const json = JSON.stringify(response.data);
       
            // Atualiza os dados no Async Storage
            AsyncStorage.setItem('@localDatadevotionals', json)
              .then(() => console.log('Objeto atualizado com sucesso!'))
              .catch((error) => console.error('Erro ao atualizar objeto: ', error));
          })
}

export async function getMessagesData(){
    axios.get(baseUrl.posts+"messages")
    .then((response)=>{
        const json = JSON.stringify(response.data);
       
            // Atualiza os dados no Async Storage
            AsyncStorage.setItem('@localDatamessages', json)
              .then(() => console.log('Objeto atualizado com sucesso!'))
              .catch((error) => console.error('Erro ao atualizar objeto: ', error));
          })
}
    
export async function getLocalToken(){
    const token = await AsyncStorage.getItem('jwtoken')
    const decode = await jwtDecode(token)
    if(token){    
        
        return decode.userId
        
    }

}

    
            
                    
   