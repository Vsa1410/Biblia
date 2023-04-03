import axios from "axios";
import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ApiContext = createContext();

export const ApiProvider = ({children}) =>{

    const [data, setData] = useState()
    const [logged, setLogged] = useState(false)
    

    async function toggleData(){
        
            try{
                const jsonValue = await AsyncStorage.getItem("@userData")
                if(jsonValue){
                    const response = await JSON.parse(jsonValue);
                        setData(response)
                        setLogged(true)
                }
            }catch{
    
                console.log("Erro ao ler no local storage")
            }
        
    }
    async function deleteUserData(){
        AsyncStorage.removeItem('jwtoken')
        AsyncStorage.removeItem('@userData')
        setData()
        setLogged(false)
    }
    return (
        <ApiContext.Provider value={{data, toggleData, deleteUserData, logged}}>
            {children}
        </ApiContext.Provider>
    )
}