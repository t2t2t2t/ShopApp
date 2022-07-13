import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
  SafeAreaView
} from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProductBasket } from "../redux/actions";
import { COLOURS } from "../../assets/COLOR";

const Remove = (id, productBasket, dispatch) => {
  const prod = productBasket.find((t) => t.id === id);

  Alert.alert(
    "Remove",
    `Are you sure you want to remove ${prod.title} from your basket?`,
    [
      {
        text: "Cancel",
      },
      {
        text: "Remove",
        onPress: () => {
          dispatch(
            setProductBasket(productBasket.filter((prod) => prod.id !== id))
          );
        },
      },
    ],
    { cancelable: true }
  );
};

export default function BasketRender({ product }) {
  const { productBasket } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  return (
    <View style={styles.main}>
      <TouchableOpacity
        onPress={() => {
          Remove(product.id, productBasket, dispatch);
        }}
      >

          <View
            style={{ paddingHorizontal: 10, paddingVertical: 5 ,flexDirection:'row'}}
          >

              <Text style={{flex:2/3, fontSize: 20 ,alignSelf:'center'}}>{product.title}</Text>


          <View style={{ flex:1/3, paddingVertical: 5 }}>
            <Image
              style={{ width:120,height:120, borderRadius: 10 }}
              source={{ uri: product.image }}
            />
          </View>
        </View>
      </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex:1, 
    borderBottomWidth:2,
    borderColor: COLOURS.backgroundMedium,
    borderRadius:10,
    marginBottom:5,
    paddingHorizontal: 10, 
    justifyContent:'center',
    paddingVertical: 5 ,
  },
});

