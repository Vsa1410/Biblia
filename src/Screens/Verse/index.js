import { useParams } from "react-router-native";
import{ Text, StyleSheet, ScrollView, View } from "react-native"
import Header from "../../Components/Header/index"

const data = require("../../../assets/database/aa.json")

const Verses = () => {
    const id = useParams()
    console.log(id)

    return(
        <ScrollView>

            <Text style={styles.title}>{data[id.chapter].name}  {Number(id.verses) + 1}</Text>
            <ScrollView style={styles.view}>

                {data[id.chapter].chapters[id.verses].map((text, index) =>{
                    return(
                        <Text key={index} style={styles.text}>{(index + 1) + "  " + text}</Text>
                    )
                })}
            </ScrollView>
        </ScrollView>
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
        paddingBottom:50,
    },
    title:{
        fontSize:30,
        marginBottom:10,
        marginTop:20,
        paddingLeft:15,
    }
})
export default Verses