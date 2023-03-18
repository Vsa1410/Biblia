import { Button, Surface, Divider } from "@react-native-material/core";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import WebViews from "../../Components/WebViewPlans"
import Carroussel from "../../Components/Carroussel";
import CarrousselPlans from "../../Components/Carroussel Plans";


import axios from "axios";
import Thumbnail from "../Plans/thumbnails";
import VerseOfDay from "../../Components/VerseOfDay";





export default function Home() {
   
    
    return(
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
           
            <VerseOfDay/>
            
            <Divider/>

            <View style={styles.titleView}>
                <Text style={styles.subtitle}>Planos de Leitura</Text>
                <Text style={styles.button}>Ver Todos</Text>
            </View>
            
            <Thumbnail/>
            
            <Divider/>
            
            <View style={styles.titleView}>
                <Text style={styles.subtitle}>Mensagens</Text>
                <Text style={styles.button}>Ver Todos</Text>
            </View>
                
            <View style={ styles.space}>

            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        
        backgroundColor: '#fff',
        
      },
      subtitle:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#21282b',
        
        marginLeft: 25,
        marginTop: 10,
      },
      space:{
        height:200,
      },
      plans:{
        borderRadius:15,
        borderStyle:"solid",
        borderWidth: 1,
        borderColor: '#004707',
        margin:20,
        height:200,
        backgroundColor:'#f4fff5'

      },
      verse:{
        fontSize: 20,
        color: '#21282b',
        marginLeft: 20,
        marginTop: 20,
      },
      verseReference:{
        fontSize: 15,
        color: '#21282b',
        marginLeft: 20,
        marginTop: 20,
        
      },
      titleView:{
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems:"center",
        marginBottom:20
    },
    button:{
      fontSize: 15,
      fontWeight: "bold",
      color: '#5171de',
      marginRight:20,
  },
   
})