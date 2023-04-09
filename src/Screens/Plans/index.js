import { ScrollView, Text, View, StyleSheet, Modal, Pressable } from "react-native";
import PushNotifications from "../../Firebase/config";
import Thumbnail from "./thumbnails";
import WebViews from "../../Components/WebViewPlans";
import { Divider, Button } from "@react-native-material/core";
import ThumbnailPlans from './thumbnailsplans';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../Components/Context/ThemeContext";
import {Video} from 'expo-av'
import ThumbnailVideos from "../../Components/thumbnailsvideos";
import ThumbnailMessages from "./thumbnailsmessages";



function Plans(){

    const { isDarkMode } = useContext(ThemeContext)
    
    

   

    return(
        <ScrollView style={isDarkMode?stylesDark.container:styles.container}>
            <View style={isDarkMode?stylesDark.titleView:styles.titleView}>
                <Text style={isDarkMode? stylesDark.subtitle:styles.subtitle}>Devocionais</Text>
                <Button style={styles.button} title='Ver Todos' variant="text" color={isDarkMode?"#fff":"#2b6e20"} onPress={() => navigate('/posts/devotionals')} />
            </View>
            
            <Thumbnail/>
            
            <Divider/>
            
            <View style={styles.titleView}>
                <Text style={isDarkMode? stylesDark.subtitle:styles.subtitle}>Planos de Leitura</Text>
                <Button style={styles.button} title='Ver Todos' variant="text" color={isDarkMode?"#fff":"#2b6e20"} onPress={() => navigate('/posts/plans')} />
            </View>

            <ThumbnailPlans/>

            <View style={styles.titleView}>
                <Text style={isDarkMode? stylesDark.subtitle:styles.subtitle}>Estudos Bíblicos</Text>
                <Button style={styles.button} title='Ver Todos' variant="text" color={isDarkMode?"#fff":"#2b6e20"} onPress={() => navigate('/posts/messages')} />
            </View>
            <ThumbnailMessages/>
            
           {/*<View style={styles.titleView}>
                <Text style={isDarkMode? stylesDark.subtitle:styles.subtitle}>Vídeos</Text>
                <Button style={styles.button} title='Ver Todos' variant="text" color={isDarkMode?"#fff":"#2b6e20"}  />
            </View>
            <ThumbnailVideos/>*/}
           
            
            
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
        
    },
   
})
const stylesDark = StyleSheet.create({
    thumbnails: {
        display: "flex",
        flexDirection: "row",
        backgroundColor:"#181818"
        
        
    },
    subtitle:{
        fontSize: 20,
        fontWeight: "bold",
        margin:15,
        color:"#fff"
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
        backgroundColor: "#181818",
        
    }
})

export default Plans