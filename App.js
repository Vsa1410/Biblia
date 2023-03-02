import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Header from './src/Components/Header';
import Chapter from './src/Screens/Chapter';
import Home from './src/Screens/Home';
import Verses from './src/Screens/Verse';
import MainHeader from './src/Components/MainHeader';


export default function App() {
  return (
    <View style={styles.container}>
      <NativeRouter>
         
        <MainHeader/>
        <Routes>
          
          <Route path={'/'} element={<Home/>}/>
          <Route path='/chapters/:id' element={<Chapter/>}/>
          <Route path='/verse/:chapter/:verses' element={<Verses/>}/>
          

        </Routes>
      </NativeRouter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
