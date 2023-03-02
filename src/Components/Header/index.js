import { View, StyleSheet, Text } from "react-native";

import { BackHandler } from "react-native";
import { useEffect, useState } from "react";
import { Button } from "@react-native-material/core";
import { useNavigate } from "react-router-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";


const Header = (props) =>{
    navigate = useNavigate()
    const [showBackButton, setShowBackButton] = useState(props.backButton)
        
    return(
        <View style={styles.header}>
            <Text style={styles.title}>Minha Bíblia Digital</Text>
            <Button
                onPress={()=> navigate(-1)}
                title="Voltar"
                color="white"
                variant="text"
                accessibilityLabel="Learn more about this purple button"
                style={styles.button}
                />
        </View>
    )
}
const styles = StyleSheet.create({
    header:{
        backgroundColor:"#354f52",
        height:150,
        minWidth:"100%",
        display:"flex",
        justifyContent:"flex-end",
        alignItems:"flex-start",
        position:"relative",
        top:0,
        left:0
        
            

    },
    button:{
        marginTop:20,
        paddingLeft:25,
        
    },
    title:{
        color: "white",
        fontSize: 30,
        fontWeight:"bold",
        paddingLeft:35,

        
    }
})
export default Header