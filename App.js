import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';

import Chapter from './src/Screens/Chapter';
import Home from './src/Screens/Home';
import Verses from './src/Screens/Verse';
import MainHeader from './src/Components/MainHeader';
import WebViews from './src/Components/WebViewPlans/index'
import WebViewsDevotionals from './src/Components/WebViewDevotionals';
import Favorites from './src/Screens/UserFavorites';

import * as Device from 'expo-device'
import Push from './src/Firebase/config';
import PushNotifications from './src/Firebase/config';
import MainBottom from './src/Components/MainBottomMenu';
import BibleList from './src/Screens/BibleList';
import Search from './src/Screens/Search';
import Plans from './src/Screens/Plans';
import Authenticate from './src/Screens/Favorites';
import * as Permissions from 'expo-permissions';
import Register from './src/Screens/Register';
import UserIndex from './src/Screens/UserIndex';
import * as Notifications from 'expo-notifications'
import { useEffect, useState, useRef, useContext } from 'react';
import { Link, useNavigate } from "react-router-native";
import { sendExpoToken, getPlansData, getDevotionalsData, getMessagesData } from './serverConnections/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AllPlans from './src/Screens/AllPlans';
import UserConfigure from './src/Screens/UserConfigure';
import { ApiProvider } from './src/Components/Context/ApiContext';
import { ThemeContext, ThemeProvider } from './src/Components/Context/ThemeContext';
import ThemeScreen from './src/Screens/Themescreen';
import AllVersesofDay from './src/Screens/VersesofDay';







export default function App() {
  
  

  async function setItemToken(token){

      
      AsyncStorage.setItem('@token', token)

  }
  
  Notifications.setNotificationHandler({
      handleNotification: async ()=>({
        shouldPlaySound: true,
        shouldSetBadge: true,
        shouldShowAlert: true,
      }),
    
    })
    
      const [expoToken, setExpoToken] = useState('');
      const notificationsReceivedRef = useRef();
      const notificationResponseRef = useRef();
    
      /*async function handleCallNotification() {
        
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
      }*/
      handleTokenPush()
      useEffect(()=>{
        
        notificationsReceivedRef.current = Notifications.addNotificationReceivedListener((notification)=>{
          console.log('Notification received', notification.request.content.data.route)
  
          
    
        })
        notificationResponseRef.current = Notifications.addNotificationResponseReceivedListener(notification => {
          console.log(notification.notification.request.content.data.route)
          if (notification.notification.request.content.data && notification.notification.request.content.data.route){
            //navigate(notification.notification.request.content.data.route)
            
          }
        })
      },[])
  
      
    
      //Get token (Id of device)
      async function handleTokenPush () {
        function sendTokenToDB(token){
          
          if(token){
            console.log(token)
            setItemToken(token)
            sendExpoToken(token)
            
          }
          
        }
          
          async function registerForPushNotificationsAsync() {
              
            }

            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            if (status !== 'granted') {
              return;
            }
            const token = (await Notifications.getExpoPushTokenAsync()).data;
              console.log(token);
                sendTokenToDB(token)
                  registerForPushNotificationsAsync()
                   
      
      
        console.log(token)
      }

      //Get Data from Database
      getPlansData()
      getDevotionalsData()
      getMessagesData()

  return (
      

        <View style={styles.container}>
          <StatusBar style='light'/>
          <NativeRouter>

            <ApiProvider>
              <ThemeProvider>
                <MainHeader/>

                    <Routes>
                      //Pages
                      <Route exact path={'/'} element={<Home/>}/>
                      <Route path={'/search'} element={<Search/>}/>
                      <Route path={'/plans'} element={<Plans/>}/>
                      <Route path={'/login'} element={<Authenticate/>}/>

                      //Bible
                      <Route path='/read' element={<BibleList/>}/>
                      <Route path='/chapters/:id' element={<Chapter/>}/>
                      <Route path='/verse/:chapter/:verses' element={<Verses/>}/>

                      //notifications
                      <Route path='/push/' element={<PushNotifications/>}/>

                      //plans
                      <Route path='/webview/:plans' element={<WebViews/>}/>
                      <Route path='/webview/:category/:plans' element={<WebViewsDevotionals/>}/>
                      <Route path='/posts/:categories' element={<AllPlans/>}/>


                      //Users
                      <Route path='/register' element={<Register/>}/>
                      <Route path='/userindex' element={<UserIndex/>}/>
                      <Route path='/favoriteTexts/:userId' element={<Favorites/>}/>
                      <Route path='/userconfiguration' element={<UserConfigure/>}/>
                      <Route path='/theme' element={<ThemeScreen/>}/>
                      <Route path= '/allversesofday' element={<AllVersesofDay/>}/>
                      
                      

                    </Routes>
                    
                <MainBottom/>
              </ThemeProvider>
            </ApiProvider>
          </NativeRouter>
        </View>
      
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },
});
