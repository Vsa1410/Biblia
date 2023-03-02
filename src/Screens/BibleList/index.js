import { useState } from "react";
import { useEffect } from "react";
import { View, ScrollView, FlatList, Item, Text,StyleSheet, SectionList, ImageBackground } from "react-native";
import { Link } from "react-router-native";
import "../../../assets/database/aa.json"
import { useNavigate } from "react-router-native";
import { useParams } from "react-router-native";
import { Divider } from "@react-native-material/core";
import * as Svg from 'react-native-svg';



const data = require("../../../assets/database/aa.json")


const BibleList = () =>{
    
    const navigate = useNavigate()
    
    return(
        <View style={styles.fixedView}>       
          
            <ScrollView style={styles.view}>

              {/*<FlatList
                data={list}
                renderItem={({item, index}) => <Text style={styles.item} >{(index +1 +"-  ")+item.name}</Text>}
                onPress={() => setIndice()}
                />*/}

              {data.map((book, index)=>{
                return(

                  <View styles={styles.card} key={index}>
                    <Text style={styles.item} onPress={(e)=> navigate("/chapters/"+index)} >{book.name}</Text>
                    <Divider/>
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
    height:"100%"
  },
  blankSpace:{
    padding:50,
  }
  
})
export default BibleList