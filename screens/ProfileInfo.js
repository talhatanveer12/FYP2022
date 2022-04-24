import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import faker from "faker";
import { shadowOffset } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { getDatabase, ref, child, get } from "firebase/database";
import { firebaseConfig } from "./FirebaseConfig";
import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

faker.seed(10);

const AVATAR_SIZE = 160;
const AVATAR = `https://randomuser.me/api/portraits/${faker.helpers.randomize([
  "women",
  "men",
])}/${faker.random.number(60)}.jpg`;
const name = faker.name.findName();
const email = faker.internet.email();
const address = "House # 123, Street # 456, xyz Town, Lahore";
const age = "29";
// const SaveEmail = (g) => {
//   const app = initializeApp(firebaseConfig);
//   const dbRef = ref(getDatabase());
//   const t = g.split(".");
//   console.log(t[0] + "898989898");
//   get(child(dbRef, `UserRecord/${t[0]}`))
//     .then((snapshot) => {
//       if (snapshot.exists()) {
//         g = snapshot.val();
//         console.log(snapshot.val());
//       } else {
//         console.log("No data available");
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//     });
//   return g;
// };

export default function App() {
  //   const [g, sete] = useState("");
  //   const [g1, sete1] = useState("1");
  //   if (g1 == "1") {
  //     AsyncStorage.getItem("UserEmail").then((value) => {
  //       if (value != null) {
  //         sete(value);
  //         sete1(SaveEmail(g));
  //         console.log(g);
  //       } else {
  //         console.log("yyyyy");
  //       }
  //     });
  //   }
  //sete1(SaveEmail(g));
  //name = g1.UserEmail;
  //const e = "talhatanveer158@gmail.com";

  return (
    <View style={styles.container}>
      <View style={styles.topBottomContainer}></View>
      <View style={{ flex: 3, alignContent: "center" }}>
        <Image source={{ uri: AVATAR }} style={styles.avatar} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.Title}>Name</Text>
        <Text style={styles.subTitle}>{name}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.Title}>Email</Text>
        <Text style={styles.subTitle}>{email}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.Title}>Age</Text>
        <Text style={styles.subTitle}>{age}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.Title}>Address</Text>
        <Text style={styles.subTitle}>{address}</Text>
      </View>
      <View style={styles.topBottomContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    backgroundColor: "#28C59B",
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      window: 0,
      height: 8,
    },
  },
  textContainer: {
    flex: 2,
    borderRadius: 20,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 28,
    marginRight: 28,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      window: 0,
      height: 8,
    },
  },
  topBottomContainer: {
    flex: 1,
    backgroundColor: "#28C59B",
  },
  Title: {
    fontSize: 18,
    marginLeft: 20,
    marginTop: 10,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    color: "green",
  },
  subTitle: {
    fontSize: 20,
    opacity: 1,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    marginLeft: 30,
    marginRight: 15,
    marginTop: 5,
  },
});
