// import React, { useState } from "react";
// import {
//   SafeAreaView,
//   View,
//   Image,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
// } from "react-native";
// import faker from "faker";

// faker.seed(10);

// const AVATAR = `https://randomuser.me/api/portraits/${faker.helpers.randomize([
//   "women",
//   "men",
// ])}/${faker.random.number(60)}.jpg`;
// const NAME = faker.name.findName();
// const JOBTITLE = faker.name.jobTitle();
// const EMAIL = faker.internet.email();

// const SPACING = 20;
// const AVATAR_SIZE = 150;
// const SELECTED_PAYMENT_METHOD = "Jazz Cash";
// const TRANSACTION_COUNT = "04";

// const App = () => {
//   const Payment_info = () => {
//     return (
//       <View style={styles.shaded_BG}>
//         <Image source={{ uri: AVATAR }} style={styles.avatar} />
//         <Text
//           style={{
//             fontSize: 24,
//             fontWeight: "700",
//             color: "green",
//             alignSelf: "center",
//           }}
//         >
//           {NAME}
//         </Text>
//         <Text style={{ fontSize: 18, opacity: 0.7, alignSelf: "center" }}>
//           {JOBTITLE}
//         </Text>
//         <Text
//           style={{
//             fontSize: 14,
//             opacity: 0.8,
//             alignSelf: "center",
//             marginBottom: 20,
//           }}
//         >
//           {EMAIL}
//         </Text>

//         <View style={styles.small_BG}>
//           <Text style={styles.fontHeading}>Payment Method</Text>
//           <Text style={styles.fontsubHeading}>{SELECTED_PAYMENT_METHOD}</Text>
//         </View>

//         <View style={styles.small_BG}>
//           <Text style={styles.fontHeading}>Contact</Text>
//           <Text style={styles.fontsubHeading}>00092 (0) 300 1234567</Text>
//         </View>

//         <View style={styles.small_BG}>
//           <Text style={styles.fontHeading}>Total Transactions</Text>
//           <Text style={styles.fontsubHeading}>{TRANSACTION_COUNT}</Text>
//         </View>

//         <View style={styles.small_BG}>
//           <Text style={styles.fontHeading}>Alternate Methods</Text>
//           <Text style={styles.fontsubHeading}>UBL Debit Mastercard</Text>
//         </View>
//         {/* <View style={styles.shaded_BG}>
//                 </View> */}
//       </View>
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Payment_info />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     backgroundColor: "#28C59B",
//   },
//   shaded_BG: {
//     width: 350,
//     height: 750,
//     backgroundColor: "white",
//     borderRadius: 45,
//     alignSelf: "center",
//     shadowColor: "white",
//     shadowOffset: {
//       width: 0,
//       height: 10,
//     },
//     shadowOpacity: 1,
//   },
//   avatar: {
//     width: AVATAR_SIZE,
//     height: AVATAR_SIZE,
//     borderRadius: AVATAR_SIZE,
//     marginRight: SPACING / 2,
//     marginBottom: 20,
//     marginTop: 20,
//     alignSelf: "center",
//   },
//   fontHeading: {
//     fontSize: 20,
//     opacity: 1,
//     fontFamily: "sans-serif",
//     fontWeight: "700",
//     marginLeft: 25,
//     marginTop: 15,
//     color: "#28C59B",
//   },
//   fontsubHeading: {
//     fontSize: 22,
//     opacity: 1,
//     fontFamily: "sans-serif",
//     fontWeight: "700",
//     marginLeft: 25,
//     marginTop: 5,
//   },
//   small_BG: {
//     width: 330,
//     height: 100,
//     backgroundColor: "#EBECF0",
//     borderRadius: 25,
//     alignSelf: "center",
//     marginTop: 10,
//   },
// });

// export default App;

import { StyleSheet, Text, View, SafeAreaView } from "react-native";
//import { NeuView } from "react-native-neu-element";
import React from "react";
//import Svg, { Circle, Rect } from "react-native-svg";

import { VideoExportPreset } from "expo-image-picker";

const PaymentInfo = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>PaymentInfo</Text>
        {/* <NeuView color="#eef2f9" height={100} width={100} borderRadius={16}>
          <Text>PaymentInfo</Text>
        </NeuView> */}
      </View>
    </SafeAreaView>
  );
};

export default PaymentInfo;

const styles = StyleSheet.create({});
