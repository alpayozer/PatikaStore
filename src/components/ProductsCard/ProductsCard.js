import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import styles from "./ProductsCard.style";

const ProductsCard = ({ products }) => {
    return (
        <View style={styles.container}>
            <View >
                <Image resizeMode="contain" style={styles.image} source={{ uri: products.imgURL }} />
            </View>
            
            <View style={styles.inner_container}>
                <Text style={styles.product_title}>{products.title}</Text>
                <Text style={styles.product_price}>{products.price}</Text>
                {products.inStock ? null: <Text style={styles.stock}>Stokta Yok</Text>}
            </View>
        </View>
    )
}

export default ProductsCard;