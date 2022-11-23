import React from "react";
import { Image, Text, View } from "react-native"
import style from './Products.style'

const Products = ({ products }) => {
    return (
        <View style={style.container}>
            <Image style={style.image} source={{ uri: products.imgURL }} />
            <Text style={style.title}>{products.title}</Text>
            <Text style={style.price}>{products.price}</Text>
            <Text style={style.inStock}>{products.inStock === true ? '' : 'Stokta Yok'}</Text>
        </View>
    )
}

export default Products