import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DrawerNavigation from "./DrawerNavigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import DoctorList from "../screens/DoctorList";
import Profile from "../screens/Profile";
import { COLOR } from "../constants/theme";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      //initialRouteName={HomeScreen}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === "Lists") {
            iconName = focused ? "list" : "list-outline";
          } else if (rn === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        headerShown: false,
        activeTintColor: COLOR.primary,
        inactiveTintColor: "black",
        labelStyle: { paddingBottom: 10, fontSize: 10 },
        style: { padding: 10, height: 70 },
      }}
    >
      <Tab.Screen name="Home" component={DrawerNavigation} />

      <Tab.Screen name="Settings" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
