import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { firebaseConfig } from "./FirebaseConfig";
// import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, set, update } from "firebase/database";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Dimensions,
  Image,
  Alert,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";
import { Platform } from "react-native";
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import AdditionalInfo2 from "./AdditionalInfo2";
import { COLOR } from "../constants/theme";
import "./GlobalVariables";
import { async } from "@firebase/util";
import {
  getDownloadURL,
  getStorage,
  ref as sRef,
  uploadBytes,
} from "firebase/storage";

const EditProfile = ({ navigation }) => {
  // var config = {
  //   apiKey: "AIzaSyDb6MLMi8hy3Ul04IGWAitrcsAPKzFtlXU",
  //   authDomain: "fyp-project-5bc55.firebaseapp.com",
  //   databaseURL: "https://fyp-project-5bc55-default-rtdb.firebaseio.com",
  //   projectId: "fyp-project-5bc55",
  //   storageBucket: "fyp-project-5bc55.appspot.com",
  //   messagingSenderId: "306828604096",
  //   appId: "1:306828604096:web:ddf17fc2975eb837103325",
  //   measurementId: "G-070J28ENZ5",
  // };

  //Start for retrieve data
  var main = [];
  //var Name = "";
  var value = "";
  const app = initializeApp(firebaseConfig);
  const dbRef = ref(getDatabase());
  const _retrieveData = async () => {
    try {
      value = await AsyncStorage.getItem("UserEmail");
      console.log(value);
      if (value !== null) {
        console.log(value);
      }
    } catch (error) {
      console.log("not found");
    }
  };

  //Experiment

  const check = () => {
    console.log("guut");
    _retrieveData();
    console.log(value);
    get(child(dbRef, `UserRecord`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((child) => {
            console.log(child.val());
            if (child.val().UserEmail == `${value}`) {
              global.PatientName = child.val().UserName;
              global.PatientCNIC = child.val().UserCNIC;
              global.PatientAddress = child.val().UserAddress;
              global.PatientWeight = child.val().Weight;
              global.PatientEmail = child.val().UserEmail;
              global.PatientGender = child.val().Gender;
              global.PatientAge = child.val().Age;
              // child.val().UserName = "Ali";
              // const database = getDatabase();
              // update(ref(database,'UserRecord/'+child.UserCNIC+child.UserEmail),{
              //   UserName : data.Name,
              // });
              // getDatabase().ref('UserRecord/'+PatientCNIC).update({
              //   UserName : data.Name
              // }).then (() => console.log('Data Updated. '));
              // setName(child.val().UserName);
              // update((dbRef,'UserRecord/'+PatientCNIC)).update({
              //   UserName : data.Name
              // });
              // alert("Address: "+data.Name);
              // set(ref(dbRef, "UserRecord/" + UserCNIC), {
              //   Email,
              //   Name,
              //   Address,
              //   CNIC,
              //   Age,
              //   Weight,
              //   Gender,
              // })
              // main.push({
              //   key: child.val().Age,
              //   Name: child.val().UserName,
              //   //Contact: child.val().Contact,
              // });

              //Update Code:
            }
          });
          // console.log(data.Name);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    const database = getDatabase();
    // update(ref(database, `UserRecord/`+global.PatientCNIC){
    //   UserName: data.Name,
    // })
    // .then((snapshot) => {
    // if (snapshot.exists()) {
    //   snapshot.forEach((child) => {
    //     console.log(child.val());
    //     if (child.val().UserEmail == `${value}`) {
    //       // global.PatientName = child.val().UserName;
    //       // global.PatientCNIC = child.val().UserCNIC;
    //       // global.PatientAddress = child.val().UserAddress;
    //       // global.PatientWeight = child.val().Weight;
    //       // child.val().UserName = "Ali";
    //       // const database = getDatabase();
    //       // update(ref(database,'UserRecord/'+child.UserCNIC+child.UserEmail),{
    //   UserName : data.Name,
    // });
    // UserName: data.Name;
    // setName(child.val().UserName);
    // alert("Address: "+data.Name);
    // set(ref(dbRef, "UserRecord/" + UserCNIC), {
    //   Email,
    //   Name,
    //   Address,
    //   CNIC,
    //   Age,
    //   Weight,
    //   Gender,
    // })
    // main.push({
    //   key: child.val().Age,
    //   Name: child.val().UserName,
    //   //Contact: child.val().Contact,
    // });

    //Update Code:

    //       }
    //     });
    //     setValue(main);
    //     console.log(data.Name);
    //   } else {
    //     console.log("No data available");
    //   }
    // })
    // .catch((error) => {
    //   console.error(error);
    // });
  };

  //End

  const [value1, setValue] = useState([]);
  const [Name, setName] = useState("");
  const check11 = () => {
    console.log("guut");
    _retrieveData();
    console.log(value);
    get(child(dbRef, `UserRecord`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((child) => {
            console.log(child.val());
            if (child.val().UserEmail == `${value}`) {
              global.PatientName = child.val().UserName;
              global.PatientCNIC = child.val().UserCNIC;
              global.PatientAddress = child.val().UserAddress;
              global.PatientWeight = child.val().Weight;
              setName(child.val().UserName);
              // main.push({
              //   key: child.val().Age,
              //   Name: child.val().UserName,
              //   //Contact: child.val().Contact,
              // });
            }
          });
          setValue(main);
          console.log(Name);
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
  const [count, setCount] = useState(0);
  //End

  // const Email = route.params.Email1;
  //console.log(Email);
  const [data, setData] = React.useState({
    Address: "",
    Name: "",
    CNIC: "",
    Weight: "",
    check_textInputChangeForAddress: false,
    check_textInputChangeForName: false,
    check_textInputChangeForCNIC: false,
    check_textInputChangeForWeight: false,
    isValidAddress: true,
    isValidName: true,
    isValidCNIC: true,
    isValidWeight: true,
  });

  const check_textInputChangeForAddress = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        Address: val,
        check_textInputChangeForAddress: true,
      });
    } else {
      setData({
        ...data,
        Address: val,
        check_textInputChangeForAddress: false,
      });
    }
  };
  const check_textInputChangeForName = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        Name: val,
        check_textInputChangeForName: true,
      });
    } else {
      setData({
        ...data,
        Profession: val,
        check_textInputChangeForName: false,
      });
    }
  };
  const check_textInputChangeForCNIC = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        CNIC: val,
        check_textInputChangeForCNIC: true,
      });
    } else {
      setData({
        ...data,
        CNIC: val,
        check_textInputChangeForCNIC: false,
      });
    }
  };
  const check_textInputChangeForWeight = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        Weight: val,
        check_textInputChangeForWeight: true,
      });
    } else {
      setData({
        ...data,
        Weight: val,
        check_textInputChangeForWeight: false,
      });
    }
  };
  const handleValidUser = (val) => {
    if (val.length > 4) {
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
  const handleValidAddress = (val) => {
    if (val.length > 8) {
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
  const handleValidCNIC = (val) => {
    if (val.length == 13) {
      setData({
        ...data,
        CNIC: val,
        check_textInputChangeForCNIC: true,
        isValidCNIC: true,
      });
    } else {
      setData({
        ...data,
        CNIC: val,
        check_textInputChangeForCNIC: false,
        isValidCNIC: false,
      });
    }
  };
  const handleValidWeight = (val) => {
    if (val.length > 0) {
      setData({
        ...data,
        Weight: val,
        check_textInputChangeForWeight: true,
        isValidWeight: true,
      });
    } else {
      setData({
        ...data,
        Weight: val,
        check_textInputChangeForWeight: false,
        isValidWeight: false,
      });
    }
  };

  const handleAdditionalInfo = () => {
    if (
      data.isValidAddress &&
      data.isValidName &&
      data.Address.length > 0 &&
      data.Name.length > 0
    ) {
      check();
      const UserName = data.Name;
      const UserCNIC = global.PatientCNIC;
      const UserAddress = data.Address;
      const Weight = data.Weight;
      const UserEmail = global.PatientEmail;
      const Gender = global.PatientGender;
      const Age = global.PatientAge;
      const UserImageUri = url;
      global.UserImageUri = UserImageUri;
      // console.log("ffffffffffffffffffffffffff");
      // console.log(UserEmail);
      // console.log(UserAddress);
      // console.log(uri);
      const app = initializeApp(firebaseConfig);

      const dbRef = getDatabase();
      set(ref(dbRef, "UserRecord/" + UserCNIC), {
        UserEmail,
        UserName,
        UserAddress,
        UserCNIC,
        UserImageUri,
        Age,
        Weight,
        Gender,
      }).then((Date) => {
        navigation.navigate("Tab");
        console.log(Date);
      });
    } else if (data.isValidAddress && data.isValidCNIC && data.isValidName) {
      Alert.alert("Wrong Input", "Enter Correct Data", [{ text: "Okay" }]);
    } else {
      Alert.alert(
        "Wrong Input",
        "Name, Address or CNIC field cannot be empty",
        [{ text: "Okay" }]
      );
    }
  };
  // <TouchableOpacity onPress={pickImage}>
  //         <Image
  //           source={image == "" ? require("../icons/user.png") : { uri: image }}
  //           style={{ width: 100, height: 100, borderRadius: 100 }}
  //         />
  //       </TouchableOpacity>

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
  const [image, setImage] = useState("");
  const [url, setUrl] = useState();
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [2, 2],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      const temp = global.PatientCNIC;
      console.log("fdfdfd");
      console.log(temp);
      const storage = getStorage(); //the storage itself
      const storageRef = sRef(storage, "Images/" + temp); //how the image will be addressed inside the storage
      const img = await fetch(result.uri);
      const bytes = await img.blob();
      await uploadBytes(storageRef, bytes).then((x) => {
        getDownloadURL(storageRef).then((x) => {
          setUrl(x);
        });
      }); //upload images
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLOR.primary} barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Edit Profile</Text>
      </View>

      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <View style={{ justifyContent: "center", alignSelf: "center" }}>
          <TouchableOpacity onPress={pickImage}>
            <Image
              source={
                image == "" ? require("../icons/user.png") : { uri: image }
              }
              style={{ width: 100, height: 100, borderRadius: 100 }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.text_footer}>Name</Text>
        <View style={styles.action}>
          <TextInput
            placeholder={global.PatientName}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => check_textInputChangeForName(val)}
            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
          {data.check_textInputChangeForName ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidName ? null : (
          <Animatable.View animation="fadeInLeft" duraton={500}>
            <Text style={{ color: "red" }}>
              Name must be 4 characters long.
            </Text>
          </Animatable.View>
        )}
        <Text style={[styles.text_footer, { marginTop: 20 }]}>Address</Text>
        <View style={styles.action}>
          <TextInput
            placeholder={global.PatientAddress}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => check_textInputChangeForAddress(val)}
            onEndEditing={(e) => handleValidAddress(e.nativeEvent.text)}
          />
          {data.check_textInputChangeForAddress ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidAddress ? null : (
          <Animatable.View animation="fadeInLeft" duraton={500}>
            <Text style={{ color: "red" }}>Enter Correct Addrress</Text>
          </Animatable.View>
        )}

        {/* <Text style={[styles.text_footer, { marginTop: 20 }]}>CNIC</Text>
        <View style={styles.action}>
          <TextInput
            placeholder={global.PatientCNIC}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => check_textInputChangeForCNIC(val)}
            onEndEditing={(e) => handleValidCNIC(e.nativeEvent.text)}
          />
          {data.check_textInputChangeForCNIC ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidCNIC ? null : (
          <Animatable.View animation="fadeInLeft" duraton={500}>
            <Text style={{ color: "red" }}>Invaild CNIC</Text>
          </Animatable.View>
        )} */}

        {/* New Data */}
        <Text style={[styles.text_footer, { marginTop: 20 }]}>Weight</Text>
        <View style={styles.action}>
          <TextInput
            placeholder={global.PatientWeight}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => check_textInputChangeForWeight(val)}
            onEndEditing={(e) => handleValidWeight(e.nativeEvent.text)}
          />
          {data.check_textInputChangeForWeight ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidWeight ? null : (
          <Animatable.View animation="fadeInLeft" duraton={500}>
            <Text style={{ color: "red" }}>Invaild CNIC</Text>
          </Animatable.View>
        )}
        {/* Until */}

        <View style={styles.button}>
          <TouchableOpacity
            onPress={handleAdditionalInfo}
            style={[
              styles.signIn,
              { borderColor: COLOR.primary, borderWidth: 1, marginTop: 15 },
            ]}
          >
            <Text style={[styles.textSign, { color: COLOR.primary }]}>
              Change
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

export default EditProfile;

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
    marginTop: 10,
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
