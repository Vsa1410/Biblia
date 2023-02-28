import { useEffect } from "react";
import { useState } from "react";
import {View, ScrollView, StyleSheet, Text} from "react-native";
import Header from "../../Components/Header/index.js"
import { useNavigate, useParams } from "react-router-native";
import { Divider, Snackbar, Surface } from "@react-native-material/core";




const data = require("../../../assets/database/aa.json")

const Chapter = () =>{
    const [list, setList] = useState('')
    let id = useParams()
    const navigate = useNavigate()
    
    
      
    return(
        
            <ScrollView>
                <Text style={styles.title}>{data[id.id].name}</Text>
                <View style={styles.view}>
                    {data[id.id].chapters.map((chapter, index)=>{
                        return(
                        
                                <View style={styles.item} key={index} >
                                    <Text onPress={(e)=> navigate("/verse/"+ id.id +"/"+ index)} style={styles.card}>{index+1}</Text>
                                </View>
                                
                                                    
                        )
                    })}
                    <View style={styles.version}>
                        <Text></Text>
                    </View>
                </View>
            </ScrollView>
        
    )
}
const styles = StyleSheet.create({
    view:{
        
        minWidth:"100%",
        paddingTop: 30,
        backgroundColor: "white",
        flexDirection:"row",
        flexWrap:"wrap",
        paddingRight:30,
        rowGap:20,
        columnGap:20,
        paddingLeft:25,
   
        
        
    },
    item : {
        
        
        width:100,
        backgroundColor:"#52796f",
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        height:40,
        borderRadius:12
    },
    card:{
        
        fontSize: 18,
        
        fontWeight: "bold",
        color: "white"
        
    },
    version:{
        paddingBottom:50,
    },
    title:{
        fontSize:30,
        paddingLeft:30,
        paddingTop:20,
        fontWeight:"bold",

    }

})
export default Chapter