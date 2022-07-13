import React from "react";
import {View,Text,FlatList,StyleSheet,ScrollView,TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native";
import BasketRender from "../Components/BasketRender";
import { useSelector, useDispatch } from "react-redux";
import { setProductBasket } from "../redux/actions";
import { COLOURS } from "../../assets/COLOR";

const BasketScreen = ({ route }) => {
  const { productBasket } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (route.params?.prod) {
      dispatch(setProductBasket([...productBasket, route.params?.prod]));
    }
  }, [route.params?.prod]);

  let sum = productBasket.reduce((a, c) => { return a + c.price}, 0);
          
  return (
    <View style={{flex: 1}}>
      {productBasket.length > 0 ? (
        <>
        

          <FlatList
            data={productBasket}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <BasketRender product={item} />
            )}
          />
          <View style={{ alignItems: "stretch" }}>
          <Text style={{fontSize:18,color:COLOURS.red,borderTopWidth:2,    borderColor: COLOURS.backgroundMedium,    borderRadius:2,padding:4}}>Total  price :{sum} $</Text>
            <TouchableOpacity
              style={styles.Button}
            >
              <Text style={{fontSize:18}}>Buy</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (

        <Text style={{alignSelf:'center',fontSize:20}}>Basket is empty</Text>

      )}
    </View>
  );
};
const styles = StyleSheet.create({
  Button: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: COLOURS.backgroundMedium,
   marginVertical:10
  },
});
export default BasketScreen;
