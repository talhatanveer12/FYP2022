import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "./DrawerContent";
import DoctorHome from "../screens/DoctorHome";
import { COLOR } from "../constants/theme";

const Drawer = createDrawerNavigator();

const DoctorDrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLOR.primary },
        headerTitleAlign: "center",
        headerShadowVisible: true,
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={DoctorHome} />
    </Drawer.Navigator>
  );
};

export default DoctorDrawerNavigation;

const styles = StyleSheet.create({});
