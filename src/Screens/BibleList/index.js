import { useContext, useState } from "react";
import { useEffect } from "react";
import { View, ScrollView, FlatList, Item, Text,StyleSheet, SectionList, ImageBackground } from "react-native";
import { Link } from "react-router-native";
import "../../../assets/database/aa.json"
import { useNavigate } from "react-router-native";
import { useParams } from "react-router-native";
import { Divider } from "@react-native-material/core";
import * as Svg from 'react-native-svg';
import { ThemeContext } from "../../Components/Context/ThemeContext";



const data = require("../../../assets/database/aa.json")


const BibleList = () =>{
    
    const { isDarkMode} = useContext(ThemeContext)
    const navigate = useNavigate()
    
    return(
        <View style={isDarkMode? stylesDark.fixedView:styles.fixedView}>       
          
            <ScrollView style={isDarkMode? stylesDark.view:styles.view} showsVerticalScrollIndicator={false}>

              {/*<FlatList
                data={list}
                renderItem={({item, index}) => <Text style={styles.item} >{(index +1 +"-  ")+item.name}</Text>}
                onPress={() => setIndice()}
                />*/}

              {data.map((book, index)=>{
                return(

                  <View styles={isDarkMode? stylesDark.card:styles.card} key={index}>
                    <Text style={isDarkMode? stylesDark.item:styles.item} onPress={(e)=> navigate("/chapters/"+index)} >{book.name}</Text>
                    <Divider color={isDarkMode? "#6a6c6a":"#e9e6e6"}/>
                  </View>
                )
                })}  
              <View style={styles.blankSpace}>
                
              </View>
              
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
  item: {
    padding: 15,
    fontSize: 18,
    
  
  },
  view:{
        minWidth:"100%",
        backgroundColor: "white",
        paddingBottom:20,
        paddingLeft:20,
        paddingTop:20,
        

       
        
  },
  card:{
    height: 20,
    backgroundColor: "blue",
    paddingBottom: 5,
    padding:10
  },
  fixedView:{
    height:"100%",
  },
  blankSpace:{
    padding:150,
  }
  
})
const stylesDark = StyleSheet.create({
  item: {
    padding: 15,
    fontSize: 18,
    backgroundColor:"#181818",
    color:"#fff"
    
  
  },
  view:{

    minWidth:"100%",
    backgroundColor: "white",
    paddingBottom:20,
    paddingLeft:20,
    paddingTop:20,
    backgroundColor:'#181818'
        

       
        
  },
  card:{
    height: 20,
    
    paddingBottom: 5,
    padding:10,
    backgroundColor:"#181818"
  },
  fixedView:{
    height:"100%",
    backgroundColor:'#181818'
    
  },
  blankSpace:{
    padding:150,
  }
  
})
export default BibleList