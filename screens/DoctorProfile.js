// import React, { useState, useEffect } from "react";
// import {
//   StatusBar,
//   FlatList,
//   Image,
//   Animated,
//   Text,
//   View,
//   Dimensions,
//   StyleSheet,
//   TouchableOpacity,
//   Easing,
//   Alert,
//   SafeAreaViewBase,
//   SafeAreaView,
// } from "react-native";
// const { width, height } = Dimensions.get("screen");
// import faker from "faker";
// import { firebaseConfig } from "./FirebaseConfig";
// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, child, get, set } from "firebase/database";
// import { useNavigation } from "@react-navigation/core";
// import { COLOR } from "../constants/theme";
// import Colors from "react-native-multi-selectbox/src/constants/Colors";
// import "./GlobalVariables";

// faker.seed(10);

// const AVATAR_SIZE = 160;
// const AVATAR = `https://randomuser.me/api/portraits/${faker.helpers.randomize([
//   "women",
//   "men",
// ])}/${faker.random.number(60)}.jpg`;
// const name = faker.name.findName();
// const email = faker.internet.email();
// const address = "House # 123, Street # 456, xyz Town, Lahore";
// const age = "29";
// // const SaveEmail = (g) => {
// //   const app = initializeApp(firebaseConfig);
// //   const dbRef = ref(getDatabase());
// //   const t = g.split(".");
// //   console.log(t[0] + "898989898");
// //   get(child(dbRef, `UserRecord/${t[0]}`))
// //     .then((snapshot) => {
// //       if (snapshot.exists()) {
// //         g = snapshot.val();
// //         console.log(snapshot.val());
// //       } else {
// //         console.log("No data available");
// //       }
// //     })
// //     .catch((error) => {
// //       console.error(error);
// //     });
// //   return g;
// // };

// export default function App() {
//   //   const [g, sete] = useState("");
//   //   const [g1, sete1] = useState("1");
//   //   if (g1 == "1") {
//   //     AsyncStorage.getItem("UserEmail").then((value) => {
//   //       if (value != null) {
//   //         sete(value);
//   //         sete1(SaveEmail(g));
//   //         console.log(g);
//   //       } else {
//   //         console.log("yyyyy");
//   //       }
//   //     });
//   //   }
//   //sete1(SaveEmail(g));
//   //name = g1.UserEmail;
//   //const e = "talhatanveer158@gmail.com";
//   const navigation = useNavigation();
//   return (
//     <View style={styles.container}>
//       <View style={styles.topBottomContainer}></View>
//       <View style={{ flex: 3, alignContent: "center" }}>
//         <Image source={{ uri: AVATAR }} style={styles.avatar} />
//       </View>

//       <View style={styles.textContainer}>
//         <Text style={styles.Title}>Name</Text>
//         <Text style={styles.subTitle}>{global.DoctorName}</Text>
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.Title}>Email</Text>
//         <Text style={styles.subTitle}>{global.Email}</Text>
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.Title}>Doctor City</Text>
//         <Text style={styles.subTitle}>{global.DoctorCity}</Text>
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.Title}>Specialization</Text>
//         <Text style={styles.subTitle}>{global.Specialization}</Text>
//       </View>
//       <View style={styles.topBottomContainer}></View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignContent: "center",
//     backgroundColor: COLOR.primary,
//   },
//   avatar: {
//     width: AVATAR_SIZE,
//     height: AVATAR_SIZE,
//     borderRadius: AVATAR_SIZE,
//     alignSelf: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       window: 0,
//       height: 8,
//     },
//   },
//   textContainer: {
//     flex: 2,
//     borderRadius: 20,
//     marginTop: 15,
//     marginBottom: 15,
//     marginLeft: 28,
//     marginRight: 28,
//     backgroundColor: "white",
//     shadowColor: "#000",
//     shadowOffset: {
//       window: 0,
//       height: 8,
//     },
//   },
//   topBottomContainer: {
//     flex: 1,
//     backgroundColor: COLOR.primary,
//   },
//   Title: {
//     fontSize: 18,
//     marginLeft: 20,
//     marginTop: 10,
//     fontFamily: "sans-serif",
//     fontWeight: "bold",
//     color: "green",
//   },
//   subTitle: {
//     fontSize: 20,
//     opacity: 1,
//     fontFamily: "sans-serif",
//     fontWeight: "bold",
//     marginLeft: 30,
//     marginRight: 15,
//     marginTop: 5,
//   },
// });

import * as Animatable from 'react-native-animatable';
import React from 'react';
import { COLOR } from "../constants/theme";
import './GlobalVariables';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import {View, SafeAreaView, Button, StyleSheet } from 'react-native';
import { G } from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from 'react-native-multi-selectbox/src/constants/Colors';

const DoctorProfileScreen = () => {
  return(
    <SafeAreaView style={styles.container}>
     {/* <View style={styles.doctorInfoScreen}>
       <View style={{flexDirection: 'row', marginTop: 15}}>
         <Avatar.Image
         source={{
           uri: "https://pngimg.com/uploads/baby/baby_PNG17931.png",
         }}
         size={80}
         />
         <View style={{marginLeft: 20}}>
           <Title style={[styles.title, {
             marginTop: 15,
             marginBottom: 5,
           }]}>{global.DoctorName}</Title>
           <Caption style={styles.caption}>@HealthEz_Doctor</Caption>
         </View>
       </View>
     </View>

     <View style={styles.doctorInfoScreen}>
        <View style={styles.row}>
           <Icon name="map-marker-radius" color='#777777' size={20}/>
           <Text style={{color: '#777777', marginLeft: 15}}>{global.DoctorCity}, Pakistan</Text>
        </View>
        <View style={styles.row}>
           <Icon name="phone" color='#777777' size={20}/>
           <Text style={{color: '#777777', marginLeft: 15}}>{global.DoctorCity}</Text>
        </View>
        <View style={styles.row}>
           <Icon name="email" color='#777777' size={20}/>
           <Text style={{color: '#777777', marginLeft: 15}}>{global.Email}</Text>
        </View>
        <View style={styles.row}>
           <Icon name="briefcase-check" color='#777777' size={20}/>
           <Text style={{color: '#777777', marginLeft: 15}}>{global.Specialization}</Text>
        </View>
     </View>
     <View style={styles.infoBoxWrapper}>
       <View style={[styles.infoBox,{
         borderRightColor: '#dddddd',
         borderRightWidth: 1
       }]}>
         <Title>Rating  <Icon name="star" color='#000000' size={20}/> </Title>
         <Caption>4/5</Caption>
       </View>
       <View style={styles.infoBox}>
         <Title>Total Patients</Title>
         <Caption>35</Caption>
       </View>
     </View>

     <View style={styles.menuWrapper}>
        <View style={styles.menuItem}>

        </View>
     </View> */}
     <Animatable.View
      style={styles.footer}
      animation="fadeInUpBig"
      >
        <View style={styles.doctorInfoScreen}>
       <View style={{flexDirection: 'row', marginTop: 15}}>
         <Avatar.Image
         source={{
           uri: "https://pngimg.com/uploads/baby/baby_PNG17931.png",
         }}
         size={80}
         backgroundColor='#777'
         />
         <View style={{marginLeft: 20}}>
           <Title style={[styles.title, {
             marginTop: 15,
             marginBottom: 5,
           }]}>{global.DoctorName}</Title>
           <Caption style={styles.caption}>@HealthEZ_Doctor</Caption>
         </View>
       </View>
     </View>

     <View style={styles.doctorInfoScreen}>
        <View style={styles.row}>
           <Icon name="map-marker-radius" color='#777777' size={20}/>
           <Text style={{color: '#777777', marginLeft: 15}}>{global.DoctorCity}, Pakistan</Text>
        </View>
        <View style={styles.row}>
           <Icon name="phone" color='#777777' size={20}/>
           <Text style={{color: '#777777', marginLeft: 15}}>{global.DoctorCity}</Text>
        </View>
        <View style={styles.row}>
           <Icon name="email" color='#777777' size={20}/>
           <Text style={{color: '#777777', marginLeft: 15}}>{global.Email}</Text>
        </View>
        <View style={styles.row}>
           <Icon name="briefcase-check" color='#777777' size={20}/>
           <Text style={{color: '#777777', marginLeft: 15}}>{global.Specialization}</Text>
        </View>
     </View>
     <View style={styles.infoBoxWrapper}>
       <View style={[styles.infoBox,{
         borderRightColor: '#dddddd',
         borderRightWidth: 1
       }]}>
         <Title>Rating <Icon name="star" color='#000000' size={15}/> </Title>
         <Caption>4/5</Caption>
       </View>
       <View style={styles.infoBox}>
         <Title>Total Patients</Title>
         <Caption>35</Caption>
       </View>
     </View>

     <View style={styles.menuWrapper}>
        <View style={styles.menuItem}>

        </View>
     </View>
        </Animatable.View>
    </SafeAreaView>
  );
};

export default DoctorProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: COLOR.primary,
  },
  doctorInfoScreen: {
    paddingHorizontal: 0,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26
  },
  footer: {
    flex: 6,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 30,
    //For Borders
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 50,
    marginTop: 50,
    marginHorizontal: 10
  },

});