import {View,FlatList,StyleSheet, ActivityIndicator,} from "react-native";
import React, {useEffect } from "react";
import ProductRender from "../Components/ProductRender";
import { useSelector, useDispatch } from "react-redux";
import { setIsLoading, setData } from "../redux/actions";

const HomeScreen = () => {
  const { isLoading, data } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => dispatch(setData(json)))
      .catch((err) => console.log(err))
      .finally(dispatch(setIsLoading(false)));
  }, []);
  return (
    <>
      {isLoading ? (
        <View style={styles.container}>
          <ActivityIndicator color="#020202" size="large" />
        </View>
      ) : (
        <>
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <ProductRender product={item}  />
            )}
          />
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default HomeScreen;
