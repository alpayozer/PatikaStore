import { Dimensions, StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#F1F1F1",
        margin:10,
        borderRadius:10,
        width:Dimensions.get("window").width/2,
    },
    image:{
        height:Dimensions.get("window").height/4,
        margin:10,
    },
    product_title:{
        color:"black",
        fontWeight:"bold",
        fontSize:15
    },
    product_price:{
        fontSize:10
    },
    inner_container:{
        margin:10
    },
    stock:{
        color:"red",
        fontWeight:"bold",
    }
   
})