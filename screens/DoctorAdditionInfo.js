// import { StyleSheet, Text, View } from "react-native";
// import React from "react";

// const DoctorAdditionInfo = () => {
//   return (
//     <View>
//       <Text>DoctorAdditionInfo</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

import { StatusBar } from "expo-status-bar";
import React from "react";
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

const DoctorAdditionInfo = ({ navigation, route }) => {
  const Email = route.params.Email1;
  //console.log(Email);
  const [data, setData] = React.useState({
    Address: "",
    Name: "",
    CNIC: "",
    check_textInputChangeForAddress: false,
    check_textInputChangeForName: false,
    check_textInputChangeForCNIC: false,
    isValidAddress: true,
    isValidName: true,
    isValidCNIC: true,
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

  const handleAdditionalInfo = () => {
    if (
      data.isValidAddress &&
      data.isValidCNIC &&
      data.isValidName &&
      data.Address.length > 0 &&
      data.CNIC.length > 0 &&
      data.Name.length > 0
    ) {
      navigation.navigate("DoctorAdditionInfo2", {
        UserEmail: Email,
        UserName: data.Name,
        UserAddress: data.Address,
        UserCNIC: data.CNIC,
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
        <Text style={styles.text_footer}>Name</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Your Name"
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
        <Text style={[styles.text_footer, { marginTop: 35 }]}>Address</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Your Address"
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
        <Text style={[styles.text_footer, { marginTop: 35 }]}>CNIC</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Your CNIC"
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
        )}
        <View style={styles.button}>
          <TouchableOpacity
            onPress={handleAdditionalInfo}
            style={[
              styles.signIn,
              { borderColor: COLOR.primary, borderWidth: 1, marginTop: 15 },
            ]}
          >
            <Text style={[styles.textSign, { color: COLOR.primary }]}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

export default DoctorAdditionInfo;

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
