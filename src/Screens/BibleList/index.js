import { useState } from "react";
import { useEffect } from "react";
import { View, ScrollView, FlatList, Item, Text,StyleSheet, SectionList } from "react-native";
import { Link } from "react-router-native";
import "../../../assets/database/aa.json"
import { useNavigate } from "react-router-native";
import { useParams } from "react-router-native";

const data = require("../../../assets/database/aa.json")

const BibleList = () =>{
    const [list, setList] = useState('')
    const [indice, setIndice] = useState('')
    const navigate = useNavigate()
    
    return(
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
              </View>
            )
            })}  
           
          
        </ScrollView>
    )
}
const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44 ,
    marginBottom:"5%",
  },
  view:{
        minWidth:"100%",
        paddingTop: 30,
        backgroundColor: "white",
        paddingLeft:20,
        paddingBottom:100,
  },
  card:{
    height: 20,
    backgroundColor: "blue"
  }
  
})
export default BibleList