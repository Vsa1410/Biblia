import { IconButton } from "@react-native-material/core";
import { View, StyleSheet, Text } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";



export default MainBottom = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.item}>
               <IconButton onPress={()=> navigate('/')} icon={  <Icon color={"#cad2c5"} name="chevron-left" size={35} />}/>
            </View>
            <View style={styles.item}></View>
            <View style={styles.item}></View>
            <View style={styles.item}></View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: "5%",
        maxHeight:100,
        backgroundColor: "#2f3e46",
        justifyContent: 'space-evenly',
        alignItems: 'center',
        position: "absolute",
        width:  "100%",
        bottom: 0
    }
})