import { Button, Surface, Divider } from "@react-native-material/core";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import WebViews from "../../Components/WebViewPlans"
import Carroussel from "../../Components/Carroussel";
import CarrousselPlans from "../../Components/Carroussel Plans";
import axios from "axios";
import Thumbnail from "../Plans/thumbnails";
import VerseOfDay from "../../Components/VerseOfDay";
import { useNavigate } from "react-router-native";
import { useContext, useState } from "react";
import ThumbnailMessages from "../Plans/thumbnailsmessages";
import ThumbnailPlans from "../Plans/thumbnailsplans";
import { getPlansData, getDevotionalsData, getMessagesData } from "../../../serverConnections/routes";
import { ThemeContext } from "../../Components/Context/ThemeContext";







export default function Home() {
  getPlansData()
  getDevotionalsData()
  getMessagesData()
  const {isDarkMode, toggleTheme} = useContext(ThemeContext)
  

  const navigate = useNavigate()

  return (
    <ScrollView style={isDarkMode?stylesDark.container:styles.container} showsVerticalScrollIndicator={false}>

      <VerseOfDay />

      <Divider />
      <View style={isDarkMode?stylesDark.body:styles.body}>

        <View style={styles.titleView}>
          <Text style={isDarkMode?stylesDark.subtitle:styles.subtitle}>Planos de Leitura</Text>
          <Button style={styles.button} title='Ver Todos' variant="text" color={isDarkMode?"#fff":"#2b6e20"} onPress={() => navigate('/posts/plans')} />
        </View>

        <ThumbnailPlans />

        

        <View style={styles.titleView}>
          <Text style={isDarkMode?stylesDark.subtitle:styles.subtitle}>Mensagens</Text>
          <Button style={styles.button} title='Ver Todos' variant="text" color={isDarkMode?"#fff":"#2b6e20"} onPress={() => navigate('/posts/messages')} />

        </View>

        <ThumbnailMessages />

        <View style={styles.titleView}>
          <Text style={isDarkMode?stylesDark.subtitle:styles.subtitle}>Devocionais</Text>
          <Button style={styles.button} title='Ver Todos' variant="text" color={isDarkMode?"#fff":"#2b6e20"} onPress={() => navigate('/posts/devotionals')} />

        </View>

        <Thumbnail />


        <View style={styles.space}>

        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {

    backgroundColor: '#dedede',

  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#21282b',

    marginLeft: 25,
    marginTop: 10,
  },
  space: {
    height: 200,
  },
  plans: {
    borderRadius: 15,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: '#004707',
    margin: 20,
    height: 200,
    backgroundColor: '#f4fff5'

  },
  verse: {
    fontSize: 20,
    color: '#21282b',
    marginLeft: 20,
    marginTop: 20,
  },
  verseReference: {
    fontSize: 15,
    color: '#21282b',
    marginLeft: 20,
    marginTop: 20,

  },
  titleView: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  button: {
    fontSize: 15,
    fontWeight: "bold",
    color: '#fff',
    marginRight: 20,
    justifyContent: "center"
  },
  body:{
    borderTopStartRadius:30,
    borderTopEndRadius:30,
    
    backgroundColor:"#fff"
  }

})
const stylesDark = StyleSheet.create({
  container: {

    backgroundColor: '#181818',

  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ededed',

    marginLeft: 25,
    marginTop: 10,
  },
  plans: {
    borderRadius: 15,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: '#004707',
    margin: 20,
    height: 200,
    backgroundColor: '#f4fff5'

  },
  verse: {
    fontSize: 20,
    color: '#21282b',
    marginLeft: 20,
    marginTop: 20,
  },
  verseReference: {
    fontSize: 15,
    color: '#21282b',
    marginLeft: 20,
    marginTop: 20,

  },
  body:{
    borderTopStartRadius:30,
    borderTopEndRadius:30,
    
    backgroundColor:"#2d2d2d"
  }
})