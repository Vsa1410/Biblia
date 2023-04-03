import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { baseUrl } from "../../../serverConnections/routes";
import { ThemeContext } from "../../Components/Context/ThemeContext";
import dayjs from "dayjs";


const AllVersesofDay = () =>{
    const [versesData, setVersesData] = useState('')
    const {isDarkMode} = useContext(ThemeContext)

    useEffect(()=>{

        axios.get(baseUrl.verseOfDay)
            .then((response)=>{
                console.log(response.data)
                setVersesData(response.data)
            })
            .catch(()=>console.error())
    },[setVersesData])
    return(
        <ScrollView style={isDarkMode?stylesDark.container:styles.container}>
            <Text style={isDarkMode?stylesDark.title:styles.title}>Versículos do dia</Text>
            <ScrollView style={isDarkMode?stylesDark.list:styles.list}>
                {versesData?versesData.map((item, index)=>{
                    return(

                        <View key={index} style={styles.card}>
                            <Text style={isDarkMode?stylesDark.date:styles.date}>{dayjs(item.createdAt).format("DD/MM/YYYY")}</Text>
                            <Text style={isDarkMode?stylesDark.text:styles.text}>{item.text}</Text>
                            <Text style={isDarkMode?stylesDark.reference:styles.reference}>{item.reference}</Text>
                        </View>
                    )
                })
                :
                <Text>Não foi possível obter os versículos do dia</Text>
            }
            </ScrollView>

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        
    },
    title:{
        fontSize:20,
        padding:20,
        fontWeight: "bold"
    },
    text:{
        
    },
    card:{
        borderColor:"#015a0a",
        borderWidth:1,
        margin:5,
        borderRadius:12,
        padding:12
    },
    date:{
        fontWeight:"bold",
        paddingBottom:5
    },
    text:{

    },
    reference:{
        paddingTop:5,
        fontWeight:"bold",
        alignSelf:"flex-end",
        marginLeft:10
    },
    list:{
        paddingBottom:200
    }

})
const stylesDark = StyleSheet.create({
    container:{
        backgroundColor:"#181818",
    },
    title:{
        fontSize:20,
        padding:20,
        fontWeight: "bold",
        color:"#fff"
    },
    text:{
        color:"#fff"
    },
    card:{
        borderColor:"#365c36",
        borderWidth:1,
        margin:5,
        borderRadius:12,
        padding:12
    },
    date:{
        fontWeight:"bold",
        paddingBottom:5,
        color:"#fff"
    },
    
    reference:{
        paddingTop:5,
        fontWeight:"bold",
        alignSelf:"flex-end",
        marginLeft:10,
        color:"#fff"
    },
    list:{
        paddingBottom:200
    }
})
export default AllVersesofDay