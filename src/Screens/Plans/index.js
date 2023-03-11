import { ScrollView, Text, View, StyleSheet } from "react-native";
import PushNotifications from "../../Firebase/config";
import Thumbnail from "./thumbnails";
import WebViews from "../../Components/WebViewPlans";


function Plans(){

    return(
        <ScrollView style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.subtitle}>Planos de Leitura</Text>
                <Text style={styles.button}>VER TODOS</Text>
            </View>
            <Thumbnail/>
            
            
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    thumbnails: {
        display: "flex",
        flexDirection: "row",
        
        
    },
    subtitle:{
        fontSize: 20,
        fontWeight: "bold",
        margin:15,
    },
    button:{
        fontSize: 15,
        fontWeight: "bold",
        color: 'blue',
        marginRight:20,
    },titleView:{
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems:"center",
    },
    container:{
        flex: 1,
        backgroundColor: "#fff",
        
    }
})

export default Plans