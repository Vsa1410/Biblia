import { Divider, Surface } from "@react-native-material/core";
import { Text, ScrollView, View, StyleSheet,  } from "react-native";

const Card = (props) =>{
    return(
        <View style={styles.container}> 
            <Surface
            elevation={1}
            style={styles.cards}>
                <Text style={styles.text}>{props.text}</Text>
                <Text style={styles.reference}>{props.reference}</Text>
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
        width:"90%"
    }
})
export default Card