import { ScrollView, Text, View, StyleSheet } from "react-native";
import PushNotifications from "../../Firebase/config";
import Thumbnail from "./thumbnails";
import WebViews from "../../Components/WebViewPlans";
import { Divider, Button } from "@react-native-material/core";
import ThumbnailPlans from './thumbnailsplans';
import AsyncStorage from "@react-native-async-storage/async-storage";



function Plans(){

    return(
        <ScrollView style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.subtitle}>Devocionais</Text>
                <Text style={styles.button}>Ver Todos</Text>
            </View>
            
            <Thumbnail/>
            
            <Divider/>
            
            <View style={styles.titleView}>
                <Text style={styles.subtitle}>Planos de Leitura</Text>
                <Text style={styles.button}>Ver Todos</Text>
            </View>

            <ThumbnailPlans/>
            <Button
                title="LogOut"
                color="error"
                variant="outLined"
            
                style={styles.button}
                onPress={()=>{
                    
                    
                    AsyncStorage.removeItem('jwtoken')
                    AsyncStorage.removeItem('@userData')
                    setTimeout(() => {
                       
                        navigate('/login')
                    }, 3000);
                }}
            />
           
            
            
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
        color: '#5171de',
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