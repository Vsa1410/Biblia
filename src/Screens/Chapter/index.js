import {View, ScrollView, StyleSheet, Text, Pressable} from "react-native";
import { Stack, IconButton, Divider, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigate, useParams } from "react-router-native";
import { useContext } from "react";
import { ThemeContext } from "../../Components/Context/ThemeContext";





const bookInfo = require("../../../assets/database/info.json")
const data = require("../../../assets/database/aa.json")

const Chapter = () =>{
   
    let id = useParams()

    const navigate = useNavigate()

    const { isDarkMode} = useContext(ThemeContext)
    
    
      
    return(
        <View style={isDarkMode? stylesDark.container: styles.container}>
                <View style={isDarkMode? stylesDark.titleView:styles.titleView}>
                    <IconButton onPress={()=> navigate(-1)} icon={props =>  <Icon name="chevron-left" {...props}color="#999999"/>}/>
                    <Text style={isDarkMode?stylesDark.title:styles.title}>{data[id.id].name}</Text>
                </View>
            <ScrollView showsVerticalScrollIndicator={false} >

                
                <View style={isDarkMode? stylesDark.view:styles.view}>
                    <View>
                        <Text style={isDarkMode? stylesDark.subtitle:styles.subtitle}>{bookInfo[id.id].subtitle}</Text>
                        <Text style={isDarkMode? stylesDark.resume:styles.resume}>{bookInfo[id.id].resume}</Text>
                        <Divider/>
                        <Text style={isDarkMode? stylesDark.author:styles.author}>Autor: {bookInfo[id.id].author}</Text>
                        <Text style={isDarkMode? stylesDark.author:styles.author}>Período histórico: {bookInfo[id.id].historyTime}</Text>
                    
                        <Divider/>
                        <Text style={isDarkMode? stylesDark.subtitle:styles.subtitle} >Capítulos</Text>
                    </View>
                    
                    {data[id.id].chapters.map((chapter, index)=>{
                        return(
                            <Pressable onPress={(e)=> navigate("/verse/"+ id.id +"/"+ index)}>

                                <View style={styles.item} key={index} >
                                        
                                        <View>

                                            <Text  style={styles.card}>{index+1}</Text>
                                        </View>
                                </View>
                            </Pressable>
                                
                                                    
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
        justifyContent:"center" , 
               
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
        paddingBottom:250,
    },
    title:{
        fontSize:30,
    },
    titleView:{
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        backgroundColor: "#c1dad3",
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems: "center"    
    },
    subtitle:{
        fontSize:24,
        fontWeight:"bold",
        paddingLeft:25,
        paddingBottom:20,
    },
    resume:{
        fontSize:16,
        paddingLeft:25,
        paddingBottom:25,
        fontWeight:'300'
    },
    author:{
        fontWeight:"500",
        paddingLeft:25,
        fontSize:16,
        paddingBottom:20,

    }

})
const stylesDark = StyleSheet.create({
    view:{
        backgroundColor: "#181818",
        flexDirection:"row",
        flexWrap:"wrap",
        paddingRight:30,
        rowGap:20,
        columnGap:20,
        minWidth:"100%",
        paddingTop: 30,
        paddingLeft:20,
        paddingBottom:100,
        justifyContent:"center" ,
        color:'#fff',
               
    },
    item : {
        
        
        width:80,
        backgroundColor:"#181818",
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
        paddingBottom:250,
    },
    title:{
        fontSize:30,
        color:'#fff'
    },
    titleView:{
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        backgroundColor: "#002608",
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems: "center", 
        color:'#fff'     
    },
    subtitle:{
        fontSize:24,
        fontWeight:"bold",
        paddingLeft:25,
        paddingBottom:20,
        color:'#fff'  
    },
    resume:{
        fontSize:16,
        paddingLeft:25,
        paddingBottom:25,
        color:'#fff' ,
        fontWeight:'300' 
    },
    author:{
        fontWeight:"500",
        paddingLeft:25,
        fontSize:16,
        paddingBottom:20,
        color:'#fff'  

    },
    container:{
        backgroundColor:'#181818',
        height:"100%"
    }

})
export default Chapter