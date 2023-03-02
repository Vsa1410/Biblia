import {View, ScrollView, StyleSheet, Text} from "react-native";
import { Stack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigate, useParams } from "react-router-native";





const data = require("../../../assets/database/aa.json")

const Chapter = () =>{
   
    let id = useParams()

    const navigate = useNavigate()
    
    
      
    return(
        <View>
            <ScrollView>
                <View style={styles.titleView}>
                    <IconButton onPress={()=> navigate(-1)} icon={props =>  <Icon name="chevron-left" {...props} />}/>
                    <Text style={styles.title}>{data[id.id].name}</Text>
                </View>
                <View style={styles.view}>
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
        paddingBottom:200,
    },
    title:{
        fontSize:30,
        
        
        

    },
    titleView:{
        borderRadius: 0,
        backgroundColor: "#c1dad3",
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems: "center"

        
        

    }

})
export default Chapter