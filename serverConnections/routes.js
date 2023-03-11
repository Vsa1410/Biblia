import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';



export const baseUrl = {
    user: "http://192.168.2.104:3000/users",
    generalUsers: 'http://192.168.2.104:3000/generalUsers',
    tokens: 'http://192.168.2.104:3000/tokens',
    devotionals: 'http://192.168.2.104:3000/devotionals'
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

    
    
    

    axios.get(baseUrl.devotionals)
        .then((response)=>{
            const json = JSON.stringify(response.data);
           
                // Atualiza os dados no Async Storage
                AsyncStorage.setItem('@localData', json)
                  .then(() => console.log('Objeto atualizado com sucesso!'))
                  .catch((error) => console.error('Erro ao atualizar objeto: ', error));
              })

            }              
            
                    
   