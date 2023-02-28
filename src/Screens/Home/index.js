import { View, StyleSheet, Text } from "react-native";
import Header from "../../Components/Header";
import BibleList from "../BibleList";

export default function Home() {

    return(
        <View style={styles.container}>
            
            <BibleList/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
      },
})