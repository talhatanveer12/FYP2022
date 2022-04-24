import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  //Text,
  Switch,
  TouchableRipple,
} from "react-native-paper";
import "../screens/GlobalVariables";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "../screens/Home";

export function DrawerContent(props) {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flex: 0.2,
          backgroundColor: "#006693",
          borderBottomRightRadius: 50,
        }}
      ></View>
      <View style={{ flex: 0.8, backgroundColor: "#006693" }}>
        <View
          style={{ flex: 1, backgroundColor: "white", borderTopLeftRadius: 50 }}
        >
          <View
            style={{
              top: -50,
              alignSelf: "center",
              backgroundColor: "white",
              height: 100,
              width: 100,
              borderRadius: 50,
            }}
          >
            <Image
              source={
                global.UserImageUri == ""
                  ? require("../icons/user.png")
                  : { uri: global.UserImageUri }
              }
              style={{ width: 100, height: 100, borderRadius: 100 }}
            />
          </View>
          <View>
            <Text
              style={{
                top: -25,
                fontSize: 24,
                fontWeight: "bold",
                alignSelf: "center",
              }}
            >
              {global.PatientName}
            </Text>
          </View>
          <View>
            <Text style={{ top: -25, fontSize: 16, alignSelf: "center" }}>
              {global.PatientEmail}
            </Text>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Profile"
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Settings"
            />
          </Drawer.Section>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
