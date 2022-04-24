// // import * as React from "react";
// // import { Button, View, Text } from "react-native";
// // import { createDrawerNavigator } from "@react-navigation/drawer";
// // import { NavigationContainer } from "@react-navigation/native";
// // import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// // import { createStackNavigator } from "@react-navigation/stack";
// // import Ionicons from "@expo/vector-icons/Ionicons";
// // import Appointment from "./screens/Appointment";
// // import Profile from "./screens/Profile";
// // import Perscription from "./screens/Perscription";
// // //import 'react-native-gesture-handler';
// // import { DrawerContent } from "./DrawerContent";
// // import SplashScreen from "./SplashScreen";
// // import SignInScreen from "./SignInScreen";
// // import SignUpSreen from "./SignUpScreen";
// // import AdditionalInfo from "./AdditionalInfo";

// // import Home from "./screens/Home";

// // function HomeScreen() {
// //   return (
// //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
// //       <Text>Home!</Text>
// //     </View>
// //   );
// // }

// // function SettingsScreen() {
// //   return (
// //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
// //       <Text>Settings!</Text>
// //     </View>
// //   );
// // }

// // const Drawer = createDrawerNavigator();
// // const Tab = createBottomTabNavigator();
// // const Stack = createStackNavigator();

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

// // function Root() {
// //   return (
// //     <Drawer.Navigator
// //       screenOptions={{
// //         headerStyle: { backgroundColor: "#28C59B" },
// //         headerTitleAlign: "center",
// //         headerShadowVisible: true,
// //       }}
// //       drawerContent={(props) => <DrawerContent {...props} />}
// //     >
// //       <Drawer.Screen name="Home" component={Home} />
// //     </Drawer.Navigator>
// //   );
// // }

// // const HomeStackNavigator = () => {
// //   return (
// //     <Stack.Navigator>
// //       <Stack.Screen
// //         name="SplashScreen"
// //         component={SplashScreen}
// //         options={{ headerShown: false }}
// //       />
// //       <Stack.Screen
// //         name="SignInScreen"
// //         component={SignInScreen}
// //         options={{ headerShown: false }}
// //       />
// //       <Stack.Screen
// //         name="SignUpScreen"
// //         component={SignUpSreen}
// //         options={{ headerShown: false }}
// //       />
// //       <Stack.Screen
// //         name="Tab"
// //         component={TabNavigator}
// //         options={{ headerShown: false }}
// //       />
// //       <Stack.Screen
// //         name="Appointment"
// //         component={Appointment}
// //         options={{ headerShown: false }}
// //       />
// //     </Stack.Navigator>
// //   );
// // };

// // const TabNavigator = () => {
// //   return (
// //     <Tab.Navigator
// //       initialRouteName={HomeScreen}
// //       screenOptions={({ route }) => ({
// //         headerShown: false,
// //         tabBarIcon: ({ focused, color, size }) => {
// //           let iconName;
// //           let rn = route.name;

// //           if (rn === "Home") {
// //             iconName = focused ? "home" : "home-outline";
// //           } else if (rn === "Lists") {
// //             iconName = focused ? "list" : "list-outline";
// //           } else if (rn === "Settings") {
// //             iconName = focused ? "settings" : "settings-outline";
// //           }
// //           return <Ionicons name={iconName} size={size} color={color} />;
// //         },
// //       })}
// //       tabBarOptions={{
// //         headerShown: false,
// //         activeTintColor: "#28C59B",
// //         inactiveTintColor: "black",
// //         labelStyle: { paddingBottom: 10, fontSize: 10 },
// //         style: { padding: 10, height: 70 },
// //       }}
// //     >
// //       <Tab.Screen name="Home" component={Home} />
// //       <Tab.Screen name="Lists" component={HomeScreen} />
// //       <Tab.Screen name="Settings" component={Profile} />
// //     </Tab.Navigator>
// //   );
// // };

// // const DrawerNavigator = () => {
// //   return (
// //     <Drawer.Navigator
// //       screenOptions={
// //         ({ route }) => ({
// //           //title:route.props.name,
// //           headerStyle: { backgroundColor: "#28C59B" },
// //           headerTitleAlign: "center",
// //           headerShadowVisible: true,
// //           headerShown: false,
// //         })
// //         //{
// //         //headerStyle: { backgroundColor: "#28C59B" },
// //         //headerTitleAlign: "center",
// //         //headerShadowVisible: true,
// //         //}
// //       }
// //       drawerContent={(props) => DrawerContent(props)}
// //     >
// //       <Drawer.Screen name="Home" component={HomeStackNavigator} />
// //       <Drawer.Screen name="Lists" component={HomeScreen} />
// //     </Drawer.Navigator>
// //   );
// // };

// // export default function App() {
// //   return (
// //     //<Perscription />
// //     //<AdditionalInfo />
// //     //<SignUpSreen />
// //     //<SignInScreen />
// //     //<SplashScreen />
// //     //<Appointment/>
// //     <NavigationContainer>
// //       <DrawerNavigator />
// //     </NavigationContainer>
// //   );
// // }

// // // import { StatusBar } from 'expo-status-bar';
// // // import { StyleSheet, Text, View } from 'react-native';
// // // import { NavigationContainer } from '@react-navigation/native';

// // // export default function App() {
// // //   return (
// // //     <View style={styles.container}>
// // //       <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
// // //       <Text>Open up App.js to start working on your app!</Text>
// // //       <StatusBar style="auto" />
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: '#fff',
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //   },
// // // });

// import React, { Component, useEffect, useState } from "react";
// import { Text, StyleSheet, View, Alert, Image } from "react-native";
// import MapView from "react-native-maps";
// import { Marker } from "react-native-maps";
// export default function MapViewComponent() {
//   state = {
//     coordinate: {
//       latitude: 31.6022316,
//       longitude: 73.0328303,
//     },
//     marginBottom: 1,
//   };

//   let { latitude, longitude } = this.state.coordinate;
//   return (
//     <View style={styles.map}>
//       {/* <View style ={{
//                   zIndex: 1,
//                   position: 'absolute',
//                   marginTop: -37,
//                   marginLeft: -11,
//                   left: '50%',
//                   top: '50%'
//                 }}>
//                     <Image
//                         source = {{uri: "https://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-Free-Download-PNG.png"}}
//                         style = {{
//                           height: 50, width: 50
//                         }}
//                         resizeMode = "contain"
//                      />
//                 </View> */}
//       <MapView
//         style={[styles.map, { marginBottom: this.state.marginBottom }]}
//         intialRegion={{
//           latitude: latitude,
//           longitude: longitude,
//           latutudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//         showUserLocation={true}
//         showMyLocationButton={true}
//         onMapReady={() => {
//           this.setState({ marginBottom: 0 });
//         }}
//       >
//         <Marker
//           coordinate={{
//             latitude,
//             longitude,
//           }}
//           title="Current Location"
//           description="You are here"
//         />
//       </MapView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// });

// // *********************MAIN ACITIVTY CODE********************
// // import React, {useEffect, useState} from "react";
// // import  {
// //     StyleSheet,
// //     View,
// //     Text,
// //     YellowBox,
// //     ActivityIndicator
// // } from 'react-native';
// // import MapViewComponent from "./MapViewComponent";
// // // import Geolocation from "@react-native-community/geolocation";
// // // import { PERMISSION } from "react-native-permissions";
// // // import { request } from "react-native-permissions";

// // const App = () => {

// // // const [userLocation, setUserLocation] = useState(false);

// // //    useEffect(() => {
// // //       function getUserLocation(){
// // //         requestLocationPermission();
// // //       }
// // //       getUserLocation()
// // //    }, [])

// // // async function requestLocationPermission(){

// // //   var response = await request(PERMISSION.ANDROID.ACCESS_FINE_LOCATION);
// // //     if(response == 'granted'){
// // //       await Geolocation.getCurrentPosition(
// // //         ({coords}) => {
// // //         setUserLocation(coords)
// // //       },
// // //       (error) => {
// // //         Alert.alert(error.code, error.message);
// // //       },
// // //       {enableHighAccuracy: true, timeout: 15000, maximumAge:10000 }
// // //     );
// // //   }
// // // }

// // // if(!userLocation) return <ActivityIndicator/>
// // //     return(
// // //         <View style={styles.container}>
// // //             <MapViewComponent
// // //             myLocation = {userLocation}
// // //             />
// // //         </View>
// // //     );
// //     return(
// //             <View style={styles.container}>
// //                 <MapViewComponent
// //                 //myLocation = {userLocation}
// //                 />
// //             </View>
// //         );
// // };

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         backgroundColor: '#fff',
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //     },
// //     heading: {
// //         color:'#fff',
// //         fontSize: 25
// //     }
// // });
// // export default App;
