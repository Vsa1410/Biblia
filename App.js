import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Header from './src/Components/Header';
import Chapter from './src/Screens/Chapter';
import Home from './src/Screens/Home';
import Verses from './src/Screens/Verse';
import MainHeader from './src/Components/MainHeader';
import * as Notifications from 'expo-notifications'
import * as Device from 'expo-device'
import Push from './src/Firebase/config';
import PushNotifications from './src/Firebase/config';
import MainBottom from './src/Components/MainBottomMenu';



export default function App() {
  return (
    <View style={styles.container}>
      <NativeRouter>
         
        <MainHeader/>
        <Routes>
          
          <Route path={'/'} element={<Home/>}/>
          <Route path='/chapters/:id' element={<Chapter/>}/>
          <Route path='/verse/:chapter/:verses' element={<Verses/>}/>
          <Route path='/push/' element={<Push/>}/>
          
          

        </Routes>
        <MainBottom/>
      </NativeRouter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
