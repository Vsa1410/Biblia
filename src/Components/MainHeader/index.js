import { View, StyleSheet, Text, Pressable } from "react-native";

import { BackHandler } from "react-native";
import { useContext, useEffect, useState } from "react";
import { Button } from "@react-native-material/core";
import { useNavigate } from "react-router-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from 'expo-linear-gradient';
import { ApiContext } from "../Context/ApiContext";
import { Avatar } from "@react-native-material/core";




const MainHeader = (props) =>{
    navigate = useNavigate()
    const [showBackButton, setShowBackButton] = useState(props.backButton)

    const {data, toggleData} = useContext(ApiContext)
       useEffect(()=>{
        toggleData()     
    }, [])
    
        
    return(
        <LinearGradient
        // Button Linear Gradient
            colors={['#00260b','#000000']}
            style={styles.button}>
            <View style={styles.header}>
                <View>

                    <View style={styles.text}>
                        <Icon name="book-cross" {...props} size={30} color={"#cad2c5"}/>
                        <Text style={styles.title}>Minha Bíblia Digital</Text>
                    </View>
                </View>
                {data?
                <View style={styles.userAvatar}>

                        <Pressable onPress={()=> navigate('/userindex')}>

                            <Avatar label={data.name} style={styles.avatar} autoColor size={32} />
                        </Pressable>
                </View>:
                    <Pressable onPress={()=> navigate('/login')}>
                         <Avatar icon={props => <Icon name="account" {...props} />} style={styles.avatar} color={"#cad2c5"} size={32} />
                    </Pressable>
                }
            </View>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    header:{
        
        height:100,
        minWidth:"100%",
        display:"flex",
        justifyContent:"flex-start",
        alignItems:"flex-end",
        position:"relative",
        top:0,
        left:0,
        flexDirection:"row",

        
        
        
            

    },
    avatar:{
        alignSelf:"center",
        right:0,
        bottom:10,
        paddingLeft:"40%"
        
    },
    userAvatar:{
        
    },
    button:{
        
        paddingLeft:25,
        
    },
    title:{
        color: "#cad2c5",
        fontSize: 20,
        fontWeight:"bold",
        paddingLeft:10,

        
    },
    text:{
        paddingBottom:10,
        display:"flex",
        flexDirection:"row",
        alignItems:"flex-end",
        paddingLeft:2,
    }
})
export default MainHeader