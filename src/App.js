import React, { useEffect } from "react";
import { View,Text,FlatList,StyleSheet, TextInput} from "react-native";
import products_data from "./product.json"
import ProductsCard from "./components/ProductsCard";

const App = () =>{

  const renderProducts = ({item}) => <ProductsCard products ={item}/>
  const [text,onChangeText] = React.useState("Ara");

  // useEffect(()=>{
  //   console.log(text)
  // },[text])

  return(
    <View style={styles.container}>
      <Text style={styles.title}>PatikaStore</Text>
      <TextInput style={styles.text_input} value={text} onChangeText={onChangeText}/>
      <FlatList
      horizontal={false}
      numColumns={2}
      data={products_data}
      renderItem={renderProducts}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "white"
  },
  title:{
    fontSize:40,
    fontWeight:"bold",
    color:"purple"
  },
  text_input:{
    backgroundColor: "#F1F1F1",
    borderRadius:10,
    margin:10,
    padding:10,
  }
})

export default App;