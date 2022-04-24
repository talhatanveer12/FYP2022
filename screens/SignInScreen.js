import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Platform,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Dimensions,
  Image,
  Alert,
} from "react-native";
import "./GlobalVariables";
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLOR } from "../constants/theme";
import { getDatabase, ref, child, get, set } from "firebase/database";

import { useNavigation } from "@react-navigation/core";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./FirebaseConfig";

const SignInScreen = () => {
  const [data, setData] = React.useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidEmail: true,
    isValidPassword: true,
  });

  const textInputChange = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = (val) => {
    const regx =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (regx.test(val)) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
        isValidEmail: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
        isValidEmail: false,
      });
    }
  };
  const [CNIC, setCNIC] = useState("");

  const retrieveUserData = () => {
    const app = initializeApp(firebaseConfig);
    const dbRef = ref(getDatabase());
    get(child(dbRef, `UserRecord`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((child) => {
            console.log(child.val());
            if (child.val().UserEmail == `${data.email}`) {
              //Home
              global.PatientName = child.val().UserName;
              global.PatientCNIC = child.val().UserCNIC;
              global.PatientAddress = child.val().UserAddress;
              global.PatientWeight = child.val().Weight;
              global.PatientEmail = child.val().UserEmail;
              global.PatientGender = child.val().Gender;
              global.UserImageUri = child.val().UserImageUri;
              //global.PatientWeight = child.val().Weight;
              AsyncStorage.setItem(global.PatientCNIC);
              AsyncStorage.setItem(global.PatientName);
              // global.patientAge = child.val().Age;
              //END
              // main.push({
              //   key: child.val().Age,
              //   Name: child.val().UserName,
              //   //Contact: child.val().Contact,
              // });
            }
          });
          console.log(child.val().UserCNIC);
          console.log("dsdsd66666s");
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const dbRef = ref(getDatabase());

  const SaveEmail = async () => {
    retrieveUserData();
    // await AsyncStorage.setItem("UserEmail", data.email);

    // console.log(data.email);
    // console.log("fdfdfdfdfd");
    // console.log(CNIC);
    navigation.navigate("Tab");
  };
  const handleSignIn = () => {
    if (data.isValidEmail && data.isValidPassword) {
      signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          console.log("Account Login");
          const user = userCredential.user;
          console.log(user);
          SaveEmail();
        })
        .catch((error) => {
          console.log(error);
          Alert.alert("Invaid User!", "Email or Password is incorrect.", [
            { text: "Okay" },
          ]);
        });
    } else {
      Alert.alert("Invaid User!", "Email or Password is incorrect.", [
        { text: "Okay" },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLOR.primary} barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={COLOR.primary} size={20} />
          <TextInput
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidEmail ? null : (
          <Animatable.View animation="fadeInLeft" duraton={500}>
            <Text style={{ color: "red" }}>Invaild Email</Text>
          </Animatable.View>
        )}

        <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
        <View style={styles.action}>
          <Feather name="lock" color={COLOR.primary} size={20} />
          <TextInput
            placeholder="Your Password"
            style={styles.textInput}
            secureTextEntry={data.secureTextEntry ? true : false}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duraton={500}>
            <Text style={{ color: "red" }}>
              Password must be 8 characters long.
            </Text>
          </Animatable.View>
        )}

        <View style={styles.button}>
          <TouchableOpacity
            onPress={handleSignIn}
            style={[
              styles.signIn,
              { borderColor: COLOR.primary, borderWidth: 1, marginTop: 15 },
            ]}
          >
            <Text style={[styles.textSign, { color: COLOR.primary }]}>
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUpScreen")}
            style={[
              styles.signIn,
              { borderColor: COLOR.primary, borderWidth: 1, marginTop: 15 },
            ]}
          >
            <Text style={[styles.textSign, { color: COLOR.primary }]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.primary,
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: COLOR.primary,
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 0 : -12,
    paddingLeft: 10,
    color: COLOR.primary,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
