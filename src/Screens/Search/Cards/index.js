import { Divider, Surface } from "@react-native-material/core";
import { useContext } from "react";
import { Text, ScrollView, View, StyleSheet,  } from "react-native";
import { ThemeContext } from "../../../Components/Context/ThemeContext";

const Card = (props) =>{
    const { isDarkMode} = useContext(ThemeContext)
    return(
        <View style={styles.container}> 
            <Surface
            elevation={1}
            style={isDarkMode?stylesDark.cards:styles.cards}>
                <Text style={isDarkMode?stylesDark.text:styles.text}>{props.text}</Text>
                <Text style={isDarkMode?stylesDark.reference:styles.reference}>{props.reference}</Text>
                <Divider/>
            </Surface>
        </View>
    )
}
const styles = StyleSheet.create({
    text:{
        fontSize: 20,
        color: "black",
        
    },
    reference:{
        fontSize: 20,
        fontWeight: "bold",
        color: "black"
    },
    cards:{
        marginTop: 10,
        paddingLeft:10,
        paddingRight:10,
        minWidth:"100%"
    },
    container:{
        paddingBottom:5
    }
})
const stylesDark = StyleSheet.create({
    text:{
        fontSize: 20,
        color: "#fff",
        
    },
    reference:{
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        textAlign:'right',
        padding:10
    },
    cards:{
        marginTop: 10,
        paddingLeft:10,
        paddingRight:10,
        minWidth:"100%",
        backgroundColor:"#323232"
    }
})
export default Card