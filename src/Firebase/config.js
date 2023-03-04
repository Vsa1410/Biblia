import { useState, useEffect, useRef } from 'react';
import { Text, View, Platform, StyleSheet } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Button } from '@react-native-material/core';

//Config of Notifications
Notifications.setNotificationHandler({
  handleNotification: async ()=>({
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowAlert: true,
  }),

})
export default function PushNotifications(){
  const [expoToken, setExpoToken] = useState('');
  const notificationsReceivedRef = useRef();
  const notificationResponseRef = useRef();

  async function handleCallNotification() {
    
    //Local notifications
    await Notifications.scheduleNotificationAsync({
      content:{
        title: "Hello, notificação",
        body: "veja o que estamos fazendo",
        sound: true

      },
      trigger:{

        seconds: 5,
      }
    })
  }
  useEffect(()=>{
    handleTokenPush()
    notificationsReceivedRef.current = Notifications.addNotificationReceivedListener((notification)=>{
      console.log('Notification received', notification)

    })
    notificationResponseRef.current = Notifications.addNotificationResponseReceivedListener(notification => {
      console.log(notification)
    })
  },[])

  //Get token (Id of device)
  async function handleTokenPush () {
    const { status } = await Notifications.getPermissionsAsync()
    if (status != 'granted'){
      let newStatus = await Notifications.requestPermissionsAsync()
      
      if (newStatus === status){
        alert('Você não possui autorização')

      }


    }
    let token = (await (await Notifications.getExpoPushTokenAsync()).data)
    setExpoToken(token)
  }


  return (
    <View style={styles.container}> 
      <Text>Sistema de Notificações</Text>
      <Button onPress={handleCallNotification} color={"error"}>Chamar</Button>
      <Text>{expoToken}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: "center",
    justifyContent: "center",
  }
})