import { useParams } from "react-router-native";
import{ Text, StyleSheet, ScrollView, View, Vibration, Animated } from "react-native"
import {Alert, Share, Button} from 'react-native';
import Header from "../../Components/Header/index"
import { useRef, useState } from "react";
import { Stack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const data = require("../../../assets/database/aa.json")

const Verses = () => {
    //Get the passed params from another page to find the verse
    const id = useParams()

    //Show or Hide the option menu
    const [isShow, setIsShow] = useState(false)

    //Store the text that user wants to share
    const [textToShare, setTextToShare] = useState([])
    //Store the Book, Chapter and verse of the text that user wants to share
    const [chapter, setChapter] = useState('')

    const[isSelected, setSelected] = useState("")
   

    //Function to Show options menu, the text, book chapter and verse were passed to function when press the button
    //At the function this will be formated to the user to share with someone via Share API
    function handleLongVersePress( text, book, chapter, verse){
        setIsShow(true)
        setSelected(verse - 1)
        setTextToShare(text)
        

        setChapter(`${book} ${chapter}:${verse}`)
        console.log(textToShare)
        //Vibrate when the funtion is called
        Vibration.vibrate(100)
        
    }

    // function to CLOSE options menu
    function handleLongPressClose(){
        setIsShow(false)
        setTextToShare([])
        setChapter("")
        setSelected("")
        
    }


    //function that implements the shareAPI
    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              `${textToShare}    ${chapter} - Minha Bíblia Digital`
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          Alert.alert(error.message);
        }
      };
    return(
        <View>
            {isShow && (
                <View style={styles.options}>

                        <View style={styles.optionsIcon}>
                            <IconButton style={styles.optionsIconButton} onPress={onShare} icon={props => <Icon name="share-outline" {...props} color={"#cad2c5"} size={40} />} />
                            <IconButton style={styles.optionsIconButton} onPress={handleLongPressClose} icon={props =>  <Icon name="close-circle" {...props} size={30}/>}/>
                        </View>
                </View>
            )}
            <View style={styles.titleView}>
                <IconButton onPress={()=> navigate(-1)} icon={props =>  <Icon name="chevron-left" {...props} />}/>
                <Text style={styles.title}>{data[id.chapter].name}  {Number(id.verses) + 1}</Text>
            </View>
            <ScrollView /*onScroll={isShow?  handleLongPressClose: ""}*/>

                    <ScrollView style={styles.view}>

                        {data[id.chapter].chapters[id.verses].map((text, index) =>{
                            return(
                                <Text key={index} style={index === isSelected ? styles.textSelected:styles.text}
                                
                                onLongPress={(e)=> handleLongVersePress(data[id.chapter].chapters[id.verses][index], data[id.chapter].name, Number(id.verses) + 1, index + 1 )}>{(index + 1) + "  " + text}</Text>
                            )
                        })}
                    </ScrollView>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    text:{
        paddingLeft:15,
        paddingRight:15,
        fontSize:18,
        marginTop:5,
        


    },
    textSelected:{
        paddingLeft:15,
        paddingRight:15,
        fontSize:18,
        marginTop:5,
        textDecorationLine: "underline",
        textDecorationStyle: "dotted"
        
        
        


    },
    view:{
        paddingBottom:300,
    },
    title:{
        fontSize:30,
        marginBottom:10,
        marginTop:20,
        paddingLeft:15,
        
    },
    options:{
        height:60,
        backgroundColor:"#52796f",
        transition: "1.2s",
        justifyContent:'space-around',
        alignItems:"flex-end"
        
        
        

    },
    optionsIcon:{
        display: "flex",
        flexDirection: "row",
        
        
        

    },
    optionsIconButton:{
        marginRight:20
    },
    titleView:{
        borderRadius: 0,
        backgroundColor: "#c1dad3",
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems: "center"

        
        

    }
})
export default Verses