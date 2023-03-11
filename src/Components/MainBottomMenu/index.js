import { IconButton } from "@react-native-material/core";
import { View, StyleSheet, Text } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigate } from "react-router-native";


export default MainBottom = () =>{
    const navigate = useNavigate()

    return(
        <View style={styles.container}>
            <View  style={styles.item}>
               <IconButton onPress={()=> navigate('/')} icon={  <Icon color={"#cad2c5"} style={styles.icon} name="home" size={30} />}/>
                <Text style={styles.text}>Inicio</Text>
            </View>
            <View style={styles.item}>
                <IconButton onPress={()=> navigate('/search')} icon={  <Icon color={"#cad2c5"} style={styles.icon} name="magnify" size={30} />}/>
                <Text style={styles.text}>Buscar</Text>
            </View>
            
            <View style={styles.item}>    
                <IconButton onPress={()=> navigate('/read')} icon={  <Icon color={"#cad2c5"} style={styles.icon} name="book" size={30} />}/>
                <Text style={styles.text}>Bíblia</Text>
            </View>
            <View style={styles.item}>
                <IconButton onPress={()=> navigate('/plans')} icon={  <Icon color={"#cad2c5"} style={styles.icon} name="note-outline" size={30} />}/>
                <Text style={styles.text}>Planos</Text>
            </View>
            <View style={styles.item}>
                <IconButton onPress={()=> navigate('/favorites')} icon={  <Icon color={"#cad2c5"} style={styles.icon} name="heart-outline" size={30} />}/>
                <Text style={styles.text}>Favoritos</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: "10%",
        maxHeight:100,
        backgroundColor: "#2f3e46",
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        position: "absolute",
        width:  "100%",
        bottom: 0,

        
    },
    text:{
        color: "white",
        marginBottom: 15,
        padding:0,
        fontSize:10,
    },
    item:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon:{
        margin:0
    }
    

})