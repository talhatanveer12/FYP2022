import * as React from "react";
// import { Button, View, Text } from "react-native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import ScreenPatientDoctor from "./screens/ScreenPatientDoctor";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createStackNavigator } from "@react-navigation/stack";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import Appointment from "./screens/Appointment";
// import Profile from "./screens/Profile";
import Perscription from "./screens/Perscription";
import Profilelnfo from "./screens/ProfileInfo";
import PerscriptionCheck from "./screens/PerscriptionCheck";
// //import 'react-native-gesture-handler';
// import { DrawerContent } from "./Navigation/DrawerContent";
// import SplashScreen from "./screens/SplashScreen";
// import SignInScreen from "./screens/SignInScreen";
// import SignUpSreen from "./screens/SignUpScreen";
// import DoctorList from "./screens/DoctorList";
import PaymentInfo from "./screens/PaymentInfo";
import Rating from "./screens/Rating";
// import AdditionalInfo from "./screens/AdditionalInfo";
// import AdditionalInfo2 from "./screens/AdditionalInfo2";
import StackNavigation from "./Navigation/StackNavigation";
import TopTabBar from "./screens/TopTabBar";
import Home from "./screens/Home";
import AiPerscription from "./screens/AiPerscription";
//import {firebaseConfig} from "Fire"

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

// // function Tab1() {
// //   return (
// //     <Tab.Navigator
// //       initialRouteName={HomeScreen}
// //       screenOptions={({ route }) => ({
// //         tabBarIcon: ({ focused, color, size }) => {
// //           let iconName;
// //           let rn = route.name;

// //           if (rn === "Home") {
// //             iconName = focused ? "home" : "home-outline";
// //           } else if (rn === "Settings") {
// //             iconName = focused ? "list" : "list-outline";
// //           } else if (rn === "Settings") {
// //             iconName = focused ? "settings" : "settings-outline";
// //           }

// //           // You can return any component that you like here!
// //           return <Ionicons name={iconName} size={size} color={color} />;
// //         },
// //       })}
// //       tabBarOptions={{
// //         activeTintColor: "tomato",
// //         inactiveTintColor: "grey",
// //         labelStyle: { paddingBottom: 10, fontSize: 10 },
// //         style: { padding: 10, height: 70 },
// //       }}
// //     >
// //       <Tab.Screen name="Home" component={HomeScreen} />
// //       <Tab.Screen name="Setting" component={Appointment} />
// //       <Tab.Screen name="Settings" component={SettingsScreen} />
// //     </Tab.Navigator>
// //   );
// // }

// function Root() {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: "#28C59B" },
//         headerTitleAlign: "center",
//         headerShadowVisible: true,
//       }}
//       drawerContent={(props) => <DrawerContent {...props} />}
//     >
//       <Drawer.Screen name="Home" component={Home} />
//     </Drawer.Navigator>
//   );
// }

// const HomeStackNavigator = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="SplashScreen"
//         component={SplashScreen}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="SignInScreen"
//         component={SignInScreen}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="SignUpScreen"
//         component={SignUpSreen}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="AdditionalInfo"
//         component={AdditionalInfo}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="AdditionalInfo2"
//         component={AdditionalInfo2}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="Tab"
//         component={TabNavigator}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="Appointment"
//         component={Appointment}
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// };

// const TabNavigator = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName={HomeScreen}
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;
//           let rn = route.name;

//           if (rn === "Home") {
//             iconName = focused ? "home" : "home-outline";
//           } else if (rn === "Lists") {
//             iconName = focused ? "list" : "list-outline";
//           } else if (rn === "Settings") {
//             iconName = focused ? "settings" : "settings-outline";
//           }
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//       })}
//       tabBarOptions={{
//         headerShown: false,
//         activeTintColor: "#28C59B",
//         inactiveTintColor: "black",
//         labelStyle: { paddingBottom: 10, fontSize: 10 },
//         style: { padding: 10, height: 70 },
//       }}
//     >
//       <Tab.Screen name="Home" component={Root} />
//       <Tab.Screen name="Lists" component={PaymentInfo} />
//       <Tab.Screen name="Settings" component={Profile} />
//     </Tab.Navigator>
//   );
// };

// const DrawerNavigator = () => {
//   return (
//     <Drawer.Navigator
//       screenOptions={
//         ({ route }) => ({
//           //title:route.props.name,
//           headerStyle: { backgroundColor: "#28C59B" },
//           headerTitleAlign: "center",
//           headerShadowVisible: true,
//           headerShown: false,
//         })
//         //{
//         //headerStyle: { backgroundColor: "#28C59B" },
//         //headerTitleAlign: "center",
//         //headerShadowVisible: true,
//         //}
//       }
//       drawerContent={(props) => DrawerContent(props)}
//     >
//       <Drawer.Screen name="Home" component={HomeStackNavigator} />
//       <Drawer.Screen name="Lists" component={HomeScreen} />
//     </Drawer.Navigator>
//   );
// };

export default function App() {
  return (
    //<Profilelnfo />
    //<AdditionalInfo />
    //<SignUpSreen />
    //<SignInScreen />
    //<SplashScreen />
    //<Appointment />
    //<Profile />
    //<Root />
    //<Rating />
    //<PaymentInfo />
    //<DoctorList />
    //<Home />
    //<TopTabBar />
    // <AiPerscription />
    //<ScreenPatientDoctor />
    //<PerscriptionCheck />
    <NavigationContainer>
      {/* <TabNavigator /> */}
      <StackNavigation />
    </NavigationContainer>
  );
}

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
