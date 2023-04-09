import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { View, ScrollView,StyleSheet, Image, Text, ActivityIndicator, Pressable, Modal } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { useNavigate } from "react-router-native";
import * as VideoThumbnails from 'expo-video-thumbnails'
import * as Device from "expo-device";
import { Button } from "@react-native-material/core";
import { Video } from "expo-av";





const ThumbnailVideos = () =>{
    const navigate = useNavigate()
    const [thumbnailData, setThumbnailData] = useState()
    const [image, setImage] = useState(null)
    const [modalVisible, setModalVisible] = useState(false)
    const video = useRef(null)
    const [status, setStatus] = useState([])

    const showModal = () =>{
        setModalVisible(true)
    }
    const dismissModal = () =>{
        setModalVisible(false)
    }

    const generateThumbnail = async() =>{
        try{
            const { uri } = await VideoThumbnails.getThumbnailAsync(
                'https://ik.imagekit.io/vsa1410/Img_4298.mp4?updatedAt=1680326552063',
                    {
                        time: 1500,
                    }
                )
                setImage(uri)
        }catch(e){
            console.warn(e)
        }
    }
    useEffect(()=>{
        

            generateThumbnail()
    },[setImage])
    
   
        
        return(
            <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
                <Pressable onPress={()=> setModalVisible(true)}>

                    {image&& <Image source={{uri: image}} style={styles.image}/>}
                </Pressable>
                <Modal
           
                    animationType="slide"
                    transparent={false}
                    visible={modalVisible}
                    onRequestClose={dismissModal}>
                        <Pressable onPress={()=> setModalVisible(false)}>
                            <Text style={styles.closeButton}>Voltar</Text>
                        </Pressable>
                                <Video
                                    ref={video}
                                    style={styles.video}
                                    source={{
                                        uri: 'https://ik.imagekit.io/vsa1410/Img_4298.mp4?updatedAt=1680326552063'
                                    }}
                                    useNativeControls
                                    resizeMode="contain"
                                    onPlaybackStatusUpdate={status => setStatus(()=> status)}
                                    
                    />
                            

                            
                </Modal>
                
            </ScrollView>
    )
}        

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        marginLeft:15,
        marginBottom:200
        
        
        
        
    },
    text:{
        fontSize: 18,
        fontWeight: 'bold',
        
        color: 'white'
    },
    
    item:{
        flexDirection: 'column',
        width:150,
        height:150,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft:10,
        paddingRight:10,
        borderRadius:15,
        marginRight:10,
        marginLeft:10,
        
    },
    image:{
        width:108,
        height:192,
    },
    video:{
        height:"90%",
        width:"100%",
        alignSelf:"center",
        
    },
    closeButton:{
        margin:30,
        fontSize:20
    }
})
export default ThumbnailVideos;