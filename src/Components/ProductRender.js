import React from "react";

import { StyleSheet, Text, View,Image,TouchableOpacity,SafeAreaView } from "react-native";

import { setProductBasket } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";

import { COLOURS } from "../../assets/COLOR";

const Remove = (productBasket, dispatch, product) => {
  const prod = productBasket.find((t) => t.id === product.id);
  {
    typeof prod == "undefined"
      ? dispatch(setProductBasket([...productBasket, product]))
      : dispatch(
          setProductBasket(
            productBasket.filter((prod) => prod.id !== product.id)
          )
        );
  }
};

const ProductRender = ({ product }) => {

  const { productBasket } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  if (typeof productBasket.find((t) => t.id === product.id) == "undefined")
    styles.color = { ...styles.color, backgroundColor: COLOURS.backgroundLight };
  else 
    styles.color = { ...styles.color, backgroundColor: COLOURS.backgroundMedium };

  return (
    <SafeAreaView style={styles.color}>
      <TouchableOpacity
        onPress={() => {
          Remove(productBasket, dispatch, product);
        }}
      >
      <View style={{flexDirection:'column',alignItems:'center'}}>

        <Image
              style={{ width: 200, height: 150, borderRadius: 10,marginTop:10 }}
              source={{ uri: product.image }}
            />
                    <Text style={{color:COLOURS.black,fontSize:20}}>{product.title}</Text>
                    <View style={{flexDirection:'row'}}>
                <Text style={{color:COLOURS.red,fontSize:15,alignSelf:'flex-start',marginLeft:20}}>Price {product.price}$</Text>
                <Text style={{color:COLOURS.green,fontSize:15,alignSelf:'flex-end',marginLeft:20}}>Rating:{product.rating.rate}★</Text>
                </View>
      </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  color: {
    borderBottomWidth:2,
    borderColor: COLOURS.backgroundDark,
    borderRadius:10,
    marginBottom:5,
    marginHorizontal:25,
  },
});

export default ProductRender;
