import React, { useState, useEffect } from "react";
import {
  StatusBar,
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Easing,
  Alert,
  SafeAreaViewBase,
  SafeAreaView,
} from "react-native";
const { width, height } = Dimensions.get("screen");
import faker from "faker";
import { firebaseConfig } from "./FirebaseConfig";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, set } from "firebase/database";

faker.seed(10);

const DATA = [...Array(2).keys()].map((_, i) => {
  return {
    key: faker.random.uuid(),
    image: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
      "women",
      "men",
    ])}/${faker.random.number(60)}.jpg`,
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    email: faker.internet.email(),
  };
});
const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

const DoctorList = ({ navigation, route }) => {
  const app = initializeApp(firebaseConfig);
  const dbRef = ref(getDatabase());
  var main = [];
  const [value1, setValue] = useState([]);

  console.log(DATA);
  const check = route.params.UserEmail;
  const Check = (val) => {
    //console.log(val.Email);
    //console.log("232");
    if (check == "Appointment") {
      navigation.navigate("Appointment", {
        DoctorEmail: val.Email,
        DoctorName: val.Name,
      });
    } else {
      Alert.alert("Doctor Profile Coming Soon");
    }
  };
  const temp11 = (item) => {
    console.log("erererer");
    console.log(item);
    Check();
  };
  const check11 = () => {
    // console.log("guut");
    // _retrieveData();
    // console.log(value);
    get(child(dbRef, `DoctorRecord`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((child) => {
            console.log(child.val());
            if (child.val().DoctoreEmail == `talhatanveer538@gmail.com`) {
              //setName(child.val().UserName);
              main.push({
                profession: child.val().profession,
                Name: child.val().DoctorName,
                Email: child.val().DoctoreEmail,
              });
            }
          });
          setValue(main);
          console.log(value1);
          console.log("dsdsd6667777766s");
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    check11();
  }, []);
  const scrollY = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={{ flex: 1, backgroundColor: "#006693" }}>
      <Animated.FlatList
        data={value1}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{
          padding: SPACING,
          paddingTop: StatusBar.currentHeight || 42,
        }}
        renderItem={({ item, index }) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];
          const opacityinputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 0.01),
          ];
          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });

          const opacity = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });

          return (
            <TouchableOpacity onPress={() => Check(item)}>
              <Animated.View
                style={{
                  flexDirection: "row",
                  padding: SPACING,
                  marginBottom: SPACING,
                  backgroundColor: "#EBECF0",
                  borderRadius: 12,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 10,
                  },
                  shadowOpacity: 1,
                  shadowRadius: 20,
                  opacity,
                  transform: [{ scale }],
                }}
              >
                <Image
                  source={{
                    uri: "https://pngimg.com/uploads/baby/baby_PNG17931.png",
                  }}
                  style={{
                    width: AVATAR_SIZE,
                    height: AVATAR_SIZE,
                    borderRadius: AVATAR_SIZE,
                    marginRight: SPACING / 2,
                  }}
                />
                <View>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: "700",
                      color: "#00008B",
                    }}
                  >
                    {item.Name}
                  </Text>
                  <Text style={{ fontSize: 16, opacity: 0.7 }}>
                    {item.profession}
                  </Text>
                  <Text style={{ fontSize: 14, opacity: 0.8 }}>
                    {item.Email}
                  </Text>
                </View>
              </Animated.View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default DoctorList;
