import { View, StyleSheet, Text } from "react-native";

import { BackHandler } from "react-native";
import { useEffect } from "react";
import { Button } from "@react-native-material/core";
import { useNavigate } from "react-router-native";


const Header = () =>{
    navigate = useNavigate()
   
        
    return(
        <View style={styles.header}>
            <Text style={styles.title}>Nova Bíblia Sagrada</Text>
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
        height:"15%",
        minWidth:"100%",
        display:"flex",
        justifyContent:"flex-end",
        alignItems:"flex-start",
        position:"static"
            

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