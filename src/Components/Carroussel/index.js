import { ScrollView, View, Image, StyleSheet, Text } from "react-native"
import { Surface } from "@react-native-material/core"
import { useNavigate } from "react-router-native"


const Carroussel = () =>{
    const navigate = useNavigate()
    return(
        
            <ScrollView horizontal={true} style={styles.carrousel} showsHorizontalScrollIndicator={false}>
                <View style={styles.newsBanners}>

                    <Surface
                        elevation={6}
                        category="medium"
                        style={styles.surface}
                        >
                            <Image style={styles.image} source={require("../../../assets/img/banner1.jpg")}/>
                            <View>

                                <Text style={styles.title}>
                                    Planos de Leitura Anual
                                </Text>

                                <Text style={styles.subtitle}>
                                    Conheça mais de Deus esse ano
                                </Text>    
                            </View>
                    
                    </Surface>
                </View>
                <View >
                    <Surface
                        elevation={6}
                        category="medium"
                        style={styles.surface}
                        
                        >
                            <Image style={styles.image} source={require("../../../assets/img/banner2.jpg")}/>
                            <View>

                                <Text style={styles.title} onPress={navigate("/plans")}>
                                    Com medo? Ansioso?
                                </Text>

                                <Text style={styles.subtitle}>
                                    Leia a Palavra para cada momento da vida
                                </Text>    
                            </View>
                    
                    </Surface>
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
        fontSize: 20,
        color: '#000',
        alignSelf:"flex-start",
        marginLeft: 20,
        
    },
    image:{
        width: 300,
        height: 200,
        marginTop: 20,
        resizeMode:"contain"

    }, newsBanners:{
        
    },
    carrousel:{
        alignContent:"space-around",
    }
})
export default Carroussel