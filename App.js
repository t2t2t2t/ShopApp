import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BasketScreen from "./src/screen/BasketScreen";
import HomeScreen from "./src/screen/HomeScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";

import { Provider } from "react-redux";
import { Store } from "./src/redux/store";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={() => ({
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "black",
          })}
        >
          <Tab.Screen
            name="Shop"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ size, color }) => (
                <Ionicons name={"home"} color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Basket"
            component={BasketScreen}
            options={{
              tabBarIcon: ({ size, color }) => (
                <Ionicons name={"basket"} color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
