import { Button, Surface } from "@react-native-material/core";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import WebViews from "../../Components/WebViewPlans"
import Carroussel from "../../Components/Carroussel";
import CarrousselPlans from "../../Components/Carroussel Plans";


import axios from "axios";





export default function Home() {
   
    
    return(
        <ScrollView style={styles.container}>
           
            <View style={styles.plans}>
                <Text style={styles.subtitle}>Planos de leitura</Text>
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
        color: '#000',
        
        marginLeft: 20,
        marginTop: 40,
      },
      space:{
        height:200,
      }
   
})