import { View, StyleSheet, Text } from "react-native";

import { BackHandler } from "react-native";
import { useEffect, useState } from "react";
import { Button } from "@react-native-material/core";
import { useNavigate } from "react-router-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from 'expo-linear-gradient';




const MainHeader = (props) =>{
    navigate = useNavigate()
    const [showBackButton, setShowBackButton] = useState(props.backButton)
        
    return(
        <LinearGradient
        // Button Linear Gradient
            colors={['rgba(47,62,70,1)', '#6b8a72']}
            style={styles.button}>
            <View style={styles.header}>
            
                <View style={styles.text}>
                    <Icon name="book-cross" {...props} size={50} color={"#cad2c5"}/>
                    <Text style={styles.title}>Minha Bíblia Digital</Text>
                </View>
                
            </View>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    header:{
        
        height:150,
        minWidth:"100%",
        display:"flex",
        justifyContent:"flex-start",
        alignItems:"flex-end",
        position:"relative",
        top:0,
        left:0,
        flexDirection:"row",

        
        
        
            

    },
    button:{
        
        paddingLeft:25,
        
    },
    title:{
        color: "#cad2c5",
        fontSize: 30,
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