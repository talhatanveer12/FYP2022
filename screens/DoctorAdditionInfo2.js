// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const DoctorAdditionInfo2 = () => {
//   return (
//     <View>
//       <Text>DoctorAdditionInfo2</Text>
//     </View>
//   )
// }

// export default DoctorAdditionInfo2

// const styles = StyleSheet.create({})

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Alert,
  Picker,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";
import { Platform } from "react-native";
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import AdditionalInfo3 from "../AdditionalInfo3";
import AdditionalInfo from "./AdditionalInfo";
import { firebaseConfig } from "./FirebaseConfig";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { COLOR } from "../constants/theme";
import {
  getDownloadURL,
  getStorage,
  ref as sRef,
  uploadBytes,
} from "firebase/storage";

//import * as firebase from "firebase";
//import { firebase, database } from "@react-native-firebase/database";

const DoctorAdditionInfo2 = ({ navigation, route }) => {
  const DoctorEmail = route.params.UserEmail;
  const DoctorName = route.params.UserName;
  const DoctorAddress = route.params.UserAddress;
  const DoctorCNIC = route.params.UserCNIC;
  const [UserImageUri, setUrl] = useState("");
  //console.log(UserEmail1);
  const [data, setData] = React.useState({
    PMDC: "",
    profession: "",
    Gender: "Female",
    check_textInputChangeForWeight: false,
    check_textInputChangeForAge: false,
    check_textInputChangeForGender: false,
    isValidWeight: true,
    isValidAge: true,
  });

  const check_textInputChangeForWeight = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        PMDC: val,
        check_textInputChangeForWeight: true,
      });
    } else {
      setData({
        ...data,
        PMDC: val,
        check_textInputChangeForWeight: false,
      });
    }
  };
  const check_textInputChangeForAge = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        profession: val,
        check_textInputChangeForAge: true,
      });
    } else {
      setData({
        ...data,
        profession: val,
        check_textInputChangeForAge: false,
      });
    }
  };
  const check_textInputChangeForGender = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        Gender: val,
        check_textInputChangeForGender: true,
      });
    } else {
      setData({
        ...data,
        Gender: val,
        check_textInputChangeForGender: false,
      });
    }
  };
  const app = initializeApp(firebaseConfig);

  const dbRef = getDatabase();
  //const snapshot = get(child(dbRef, "kontak"));
  // const ImageStorage = async () => {
  //   const storage = getStorage(); //the storage itself
  //   const storageRef = sRef(storage, "Images/" + { DoctorCNIC }); //how the image will be addressed inside the storage
  //   const img = await fetch("../icons/user.png");
  //   const bytes = await img.blob();
  //   await uploadBytes(storageRef, bytes).then((x) => {
  //     getDownloadURL(storageRef).then((x) => {
  //       setUrl(x);
  //     });
  //   });
  // };
  const handleCreateAccount = () => {
    if (data.profession.length > 0 && data.PMDC.length > 0) {
      const profession = data.profession;
      const PMDC = data.PMDC;
      const Gender = data.Gender;
      //ImageStorage();
      //const child = DoctorEmail.split(".");
      //const t = child.spite
      //app.firebase.database()
      set(ref(dbRef, "DoctorRecord/" + DoctorCNIC), {
        DoctorEmail,
        DoctorName,
        DoctorAddress,
        DoctorCNIC,
        //UserImageUri,
        profession,
        PMDC,
        Gender,
      }).then((Date) => {
        navigation.navigate("DoctorSignInScreen");
        console.log(Date);
      });
    } else {
      Alert.alert("Wrong Input", "PMDC or profession field cannot be empty", [
        { text: "Okay" },
      ]);
    }
  };

  const handleValidWeight = (val) => {
    if (val.length > 0) {
      setData({
        ...data,
        Name: val,
        check_textInputChangeForName: true,
        isValidName: true,
      });
    } else {
      setData({
        ...data,
        Name: val,
        check_textInputChangeForName: false,
        isValidName: false,
      });
    }
  };
  const handleValidAge = (val) => {
    if (val.length > 0) {
      setData({
        ...data,
        Address: val,
        check_textInputChangeForAddress: true,
        isValidAddress: true,
      });
    } else {
      setData({
        ...data,
        Address: val,
        check_textInputChangeForAddress: false,
        isValidAddress: false,
      });
    }
  };
  // const updateSecureTextEntry = () => {
  //     setData({
  //         ...data,
  //         secureTextEntry: !data.secureTextEntry
  //     });
  // }

  // const updateConfirmSecureTextEntry = () => {
  //     setData({
  //         ...data,
  //         confirm_secureTextEntry: !data.confirm_secureTextEntry
  //     });
  // }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLOR.primary} barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Additional Info</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.text_footer}>PMDC Number</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Your PMDC Number"
            style={styles.textInput}
            autoCapitalize="none"
            keyboardType="decimal-pad"
            onChangeText={(val) => check_textInputChangeForWeight(val)}
            onEndEditing={(e) => handleValidWeight(e.nativeEvent.text)}
          />
          {data.check_textInputChangeForWeight ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>

        <Text style={[styles.text_footer, { marginTop: 35 }]}>profession</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Your profession"
            style={styles.textInput}
            autoCapitalize="none"
            //keyboardType="number-pad"
            onChangeText={(val) => check_textInputChangeForAge(val)}
            onEndEditing={(e) => handleValidAge(e.nativeEvent.text)}
          />
          {data.check_textInputChangeForAge ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        <Text style={[styles.text_footer, { marginTop: 35 }]}>Gender</Text>
        <View style={styles.action}>
          <Picker
            selectedValue={data.Gender}
            style={{ height: 50, width: 130, alignItems: "center" }}
            onValueChange={(itemValue, itemIndex) =>
              setData({ ...data, Gender: itemValue })
            }
          >
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Male" value="male" />
          </Picker>
          {data.check_textInputChangeForGender ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={handleCreateAccount}
            style={[
              styles.signIn,
              { borderColor: COLOR.primary, borderWidth: 1, marginTop: 15 },
            ]}
          >
            <Text style={[styles.textSign, { color: COLOR.primary }]}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

export default DoctorAdditionInfo2;

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
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
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
