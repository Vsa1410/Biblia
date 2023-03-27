import { Switch } from "@react-native-material/core"
import { useContext } from "react"
import { ScrollView, Text, StyleSheet, View } from "react-native"
import { ThemeContext } from "../../Components/Context/ThemeContext"


const ThemeScreen = () =>{
    const {isDarkMode, toggleTheme} = useContext(ThemeContext)
    
    
    return(
        <ScrollView style={isDarkMode?stylesDark.container : styles.container}>
            <Text style={isDarkMode?stylesDark.title : styles.title}>Modo de leitura</Text>
            <View style={isDarkMode?stylesDark.item : styles.item}>
                <Text style={isDarkMode?stylesDark.itemText : styles.itemText}>Dark Mode</Text>
                <Switch value={isDarkMode} onValueChange={()=> toggleTheme()} />
            </View>
        </ScrollView>
    )
}
    
    const styles = StyleSheet.create({
        container:{
            paddingLeft:20,
            
            
        },
        item:{
            display:'flex',
            justifyContent:"flex-start",
            alignItems:"center",
            flexDirection:"row",
            marginLeft:40
            
        },
        title:{
            fontSize:30,
            margin:30,
            
        },
        itemText:{
            marginRight: 50,
            fontSize:20

        }
    })
    const stylesDark = StyleSheet.create({
        container:{
            paddingLeft:20,
            backgroundColor:"#181818"
            
        },
        item:{
            display:'flex',
            justifyContent:"flex-start",
            alignItems:"center",
            flexDirection:"row",
            paddingLeft:40,
            backgroundColor:'#2b2b2b',
            color:"#fff"
            
        },
        title:{
            fontSize:30,
            margin:30,
            color:"#fff"
            
        },
        itemText:{
            marginRight: 50,
            fontSize:20,
            color:"#fff"

        }
    })
export default ThemeScreen