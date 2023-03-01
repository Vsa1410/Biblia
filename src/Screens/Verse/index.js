import { useParams } from "react-router-native";
import{ Text, StyleSheet, ScrollView, View, Vibration } from "react-native"
import {Alert, Share, Button} from 'react-native';
import Header from "../../Components/Header/index"
import { useState } from "react";
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

    
    
    //Function to Show options menu, the text, book chapter and verse were passed to function when press the button
    //At the function this will be formated to the user to share with someone via Share API
    function handleLongVersePress( text, book, chapter, verse){
        setIsShow(true)
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
                            <IconButton onPress={onShare} icon={props => <Icon name="share-outline" {...props} />} />
                            <IconButton onPress={handleLongPressClose} icon={props =>  <Icon name="close-circle" {...props} />}/>
                        </View>
                </View>
            )}
            <Text style={styles.title}>{data[id.chapter].name}  {Number(id.verses) + 1}</Text>
            <ScrollView>

                    <ScrollView style={styles.view}>

                        {data[id.chapter].chapters[id.verses].map((text, index) =>{
                            return(
                                <Text key={index} style={styles.text}  onLongPress={(e)=> handleLongVersePress(data[id.chapter].chapters[id.verses][index], data[id.chapter].name, Number(id.verses) + 1, index + 1 )}>{(index + 1) + "  " + text}</Text>
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
        

    },
    optionsIcon:{
        display: "flex",
        flexDirection: "row",
    }
})
export default Verses