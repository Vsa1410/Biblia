import { ScrollView, View, Image, StyleSheet, Text } from "react-native"
import { Surface } from "@react-native-material/core"
import { useNavigate } from "react-router-native"


const CarrousselPlans = () =>{
    //const navigate = useNavigate()
    return(
        
            <ScrollView horizontal={true} style={styles.carrousel} showsHorizontalScrollIndicator={false}>
                <View style={styles.newsBanners}>

                    
                            <Image style={styles.image} source={require("../../../assets/img/Frame2.png")}/>
                            <View>

                                <Text style={styles.subtitle}>
                                    Planos de Leitura Anual
                                </Text>  
                            </View>
                    
                    
                </View>
                <View style={styles.newsBanners}>
                    
                            <Image style={styles.image} source={require("../../../assets/img/Frame1.png")}/>
                            <View>

                                <Text style={styles.subtitle} onPress={navigate("/plans")}>
                                    Com medo? Ansioso?
                                </Text>
                            </View>
                    
                    
                </View>
                <View style={styles.newsBanners}>
                    
                            <Image style={styles.image} source={require("../../../assets/img/Frame1.png")}/>
                            <View>

                                <Text style={styles.subtitle} onPress={navigate("/plans")}>
                                    Com medo? Ansioso?
                                </Text>
                            </View>
                    
                    
                </View>
                <View style={styles.newsBanners}>
                    
                            <Image style={styles.image} source={require("../../../assets/img/Frame1.png")}/>
                            <View>

                                <Text style={styles.subtitle} onPress={navigate("/plans")}>
                                    Com medo? Ansioso?
                                </Text>
                            </View>
                    
                    
                </View>
            </ScrollView>
    )
}
const styles = StyleSheet.create({
    surface: {
        width: 400,
        height: 350,
        justifyContent:"center",
        alignItems:"center",
        maxWidth: "90%",
        margin:4,    
        alignSelf:"center",
        
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        alignSelf:"flex-start",
        marginLeft: 20,
    },
    subtitle: {
        fontSize: 15,
        color: '#000',
        alignSelf:"flex-start",
        
        maxWidth:150,
        alignSelf:"center",
        fontWeight:"bold"
        
    },
    image:{
        width: 150,
        height: 150,
        marginTop: 20,
        marginLeft:10,
        marginRight:10,
        resizeMode:"contain",
        borderRadius:12,
        alignSelf:"center",

    }, newsBanners:{
        margin:0
    },
    carrousel:{
        
    }
})
export default CarrousselPlans