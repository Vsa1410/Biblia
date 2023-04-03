import { useNavigate, useParams } from "react-router-native";
import{ Text, StyleSheet, ScrollView, View, Vibration } from "react-native"
import {Alert, Share, } from 'react-native';

import { useRef, useState, useEffect, useContext } from "react";
import { Stack, IconButton, select, Snackbar, Dialog, DialogHeader, DialogContent, DialogActions, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import axios from "axios";
import { baseUrl, handleFavoriteVerses } from "../../../serverConnections/routes";
const data = require("../../../assets/database/aa.json")
import jwtDecode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Animated } from "react-native";
import { ApiContext } from "../../Components/Context/ApiContext";
import { ThemeContext } from "../../Components/Context/ThemeContext";


const Verses = () => {

    const { isDarkMode } = useContext(ThemeContext)
    const { toggleData, deleteUserData, logged} = useContext(ApiContext)
    console.log(logged)
    

    const [scrollPreviousPositision, setPreviousPosition] = useState(0)
    

    const [visible, setVisible] = useState(false)

    const navigate = useNavigate()

    const [decodedToken, setDecodedToken]= useState('')
    async function getLocalToken(){
        const token = await AsyncStorage.getItem('jwtoken')
        const decode = await jwtDecode(token)
        if(token){
            setDecodedToken(decode.userId)
            console.log(decode.userId)
            
        }

    }

    useEffect(()=>{
        getLocalToken()
        
    },[setDecodedToken])


    //Get the passed params from another page to find the verse
    const id = useParams()

    //Show or Hide the option menu
    const [isShow, setIsShow] = useState(false)

    //Store the text that user wants to share
    const [textToShare, setTextToShare] = useState([])
    //Store the Book, Chapter and verse of the text that user wants to share
    const [chapter, setChapter] = useState('')

    const[isSelected, setSelected] = useState("")
    
    const [isSucess, setSucess] = useState(false)

    const[errorMessage, setErrorMessage] = useState(false)
    
    function handleScroll(event){
        const positionY = event.nativeEvent.contentOffset.y
        setPreviousPosition(positionY)
        if (positionY>scrollPreviousPositision){
            console.log("desaparece")
        }else if(positionY<scrollPreviousPositision){
            console.log("aparece")
        }
    }

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
    

    async function handleFavoriteVerses (){
        if(logged === true){
            
            axios.post(baseUrl.favorites,{
                text: textToShare,
                book:   Number(id.chapter),
                chapter: Number(id.verses),
                verse: isSelected,
                authorId:decodedToken,
            })
            .then(()=>{
                setSucess(true)
                setTimeout(()=>{
                    setSucess(false)
                },3000)
            })
            .catch(()=> {
                setErrorMessage(true)
                setTimeout(()=>{
                    setErrorMessage(false)
                }, 3000)
            })
            
        }else if (logged === false){

           setVisible(true)
        }
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
        <View style={isDarkMode?stylesDark.container:styles.container}>
            {isShow && (
                
                <View style={[
                    {

                        height:40,
                        backgroundColor:"#52796f",
                        transition: "1.2s",
                        justifyContent:'space-around',
                        alignItems:"flex-end",
                        
                    }
                    ]}
                >


                        <View style={styles.optionsIcon}>
                            <IconButton style={styles.optionsIconButton} onPress={onShare} icon={props => <Icon name="share-outline" {...props} color={"#cad2c5"} size={40} />} />
                            <IconButton style={styles.optionsIconButton} onPress={handleFavoriteVerses} icon={props =>  <Icon name="heart"  {...props} color={"#cad2c5"} size={30}/>}/>
                            <IconButton style={styles.optionsIconButton} onPress={handleLongPressClose} icon={props =>  <Icon name="close-circle" {...props}  size={25}/>}/>
                        </View>
                </View>
            )}
           
            <View style={isDarkMode? stylesDark.titleView:styles.titleView}>
                <IconButton onPress={()=> navigate(-1)} icon={props =>  <Icon name="chevron-left" {...props} color="#999999"/>}/>
                <Text style={isDarkMode? stylesDark.title:styles.title}>{data[id.chapter].name}  {Number(id.verses) + 1}</Text>
            </View>
            <ScrollView onScroll={handleScroll}>

                    <ScrollView style={isDarkMode? stylesDark.view:styles.view}>

                        {data[id.chapter].chapters[id.verses].map((text, index) =>{
                            return(
                                <Text key={index} style={index === isSelected ? isDarkMode?stylesDark.textSelected:styles.textSelected :isDarkMode?stylesDark.text:styles.text}
                                
                                onLongPress={(e)=>
                                    handleLongVersePress(data[id.chapter].chapters[id.verses][index], data[id.chapter].name, Number(id.verses) + 1, index + 1 )}>{(index + 1) + "  " + text}</Text>
                                    )
                                })}
                         <Text style={styles.copyright}>Este projeto é distribuído sob a licença Creative Commons BY-NC. As traduções bíblicas deste projeto são de autoria e propriedade intelectual da Sociedade Bíblica Internacional (NVI), da Sociedade Bíblica Trinitariana (ACF) e da Imprensa Bíblica Brasileira (AA). Todos os direitos reservados aos autores.</Text>
                    </ScrollView>
            </ScrollView>
            {
                visible&& <Snackbar
                style={styles.snackbar}
                message="Você não esta logado. Deseja realizar o login agora?"
                action={<View>

                            <Button
                                    variant="text"
                                    title="Login"
                                    color="white"
                                    onPress={()=> navigate('/login')}
                                    />
                            <Button
                                    variant="text"
                                    title="Cancelar"
                                    color="error"
                                    onPress={()=>setVisible(false)}
                                />
                    </View>
                        }
                
                />

            }
            {isSucess&& <Snackbar
                            message="Adicionado aos Favoritos"
                            style={styles.snackbar}
                            color="error"
                            />}
             {errorMessage&& <Snackbar
                            message="Erro ao adicionar aos Favoritoss"
                            style={styles.snackbar}
                            color="error"
                            />}
        </View>
    )
}
const styles = StyleSheet.create({
    text:{
        paddingLeft:15,
        paddingRight:15,
        fontSize:18,
        marginTop:5,
        paddingBottom:5,
        


    },
    copyright:{
        color:"#999999",
        paddingTop:20,
        padding:20

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
        paddingTop:2,       
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
        alignItems: "center",
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,

        
        

    },
    snackbar:{
        position:"absolute",
        width:"80%",
        bottom:"40%",
        alignSelf:"center"
        
    }
})
const stylesDark = StyleSheet.create({
    container:{
        backgroundColor:"#181818",
        paddingBottom:250
    },
    text:{
        paddingLeft:15,
        paddingRight:15,
        fontSize:18,
        marginTop:5,
        paddingBottom:5,
        color:'#fcfcfc'
        


    },
    textSelected:{
        paddingLeft:15,
        paddingRight:15,
        fontSize:18,
        marginTop:5,
        textDecorationLine: "underline",
        textDecorationStyle: "dotted",
        textDecorationColor:"#fff",
        color:"#fff"
        
        
        


    },
    view:{
        paddingBottom:300,
        backgroundColor:"#181818",
        color:"#fefefe"
    },
    title:{
        fontSize:30,
        marginBottom:10,
        paddingTop:2,
        color:"#fff"       
    },
    
    optionsIcon:{
        display: "flex",
        flexDirection: "row",
        
        
        

    },
    optionsIconButton:{
        marginRight:20
    },
    titleView:{
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        backgroundColor: "#002608",
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems: "center", 
        color:'#fff'     
    },
    snackbar:{
        position:"absolute",
        width:"80%",
        bottom:"40%",
        alignSelf:"center"
        
    }
})
export default Verses