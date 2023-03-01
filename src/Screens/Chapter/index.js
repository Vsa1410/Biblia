import {View, ScrollView, StyleSheet, Text} from "react-native";

import { useNavigate, useParams } from "react-router-native";





const data = require("../../../assets/database/aa.json")

const Chapter = () =>{
   
    let id = useParams()

    const navigate = useNavigate()
    
    
      
    return(
        <View>
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
        </View>
        
    )
}
const styles = StyleSheet.create({
    view:{
        
        
        
        backgroundColor: "white",
        flexDirection:"row",
        flexWrap:"wrap",
        paddingRight:30,
        rowGap:20,
        columnGap:20,
        
        minWidth:"100%",
        paddingTop: 30,
        backgroundColor: "white",
        paddingLeft:20,
        paddingBottom:100,
   
        
        
    },
    item : {
        
        
        width:80,
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