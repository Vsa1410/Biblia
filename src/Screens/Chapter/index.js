import {View, ScrollView, StyleSheet, Text} from "react-native";
import { Stack, IconButton, Divider, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigate, useParams } from "react-router-native";





const bookInfo = require("../../../assets/database/info.json")
const data = require("../../../assets/database/aa.json")

const Chapter = () =>{
   
    let id = useParams()

    const navigate = useNavigate()
    
    
      
    return(
        <View>
                <View style={styles.titleView}>
                    <IconButton onPress={()=> navigate(-1)} icon={props =>  <Icon name="chevron-left" {...props} />}/>
                    <Text style={styles.title}>{data[id.id].name}</Text>
                </View>
            <ScrollView showsVerticalScrollIndicator={false} >

                
                <View style={styles.view}>
                    <View>
                        <Text style={styles.subtitle}>{bookInfo[id.id].subtitle}</Text>
                        <Text style={styles.resume}>{bookInfo[id.id].resume}</Text>
                        <Divider/>
                        <Text style={styles.author}>Autor: {bookInfo[id.id].author}</Text>
                        <Text style={styles.author}>Período histórico: {bookInfo[id.id].historyTime}</Text>
                    
                        <Divider/>
                        <Text style={styles.subtitle} >Capítulos</Text>
                    </View>
                    
                    {data[id.id].chapters.map((chapter, index)=>{
                        return(
                            <View style={styles.item} key={index} >
                                    
                                    <View>

                                        <Text onPress={(e)=> navigate("/verse/"+ id.id +"/"+ index)} style={styles.card}>{index+1}</Text>
                                    </View>
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
        justifyContent:"center"         
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
    },
    author:{
        fontWeight:"500",
        paddingLeft:25,
        fontSize:16,
        paddingBottom:20,

    }

})
export default Chapter