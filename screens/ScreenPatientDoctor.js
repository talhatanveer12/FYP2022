import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const ScreenPatientDoctor = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#006693" }}>
      <View style={{ flex: 0.5 }}></View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignInScreen")}
        >
          <Image
            source={require("../icons/patient.png")}
            style={{
              width: 80,
              height: 80,
              marginTop: 30,
              marginLeft: 30,
              marginRight: 30,
              marginEnd: 30,
            }}
          />
          <Text
            style={{
              alignSelf: "center",
              marginBottom: 30,
              top: 8,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Patient
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("DoctorSignInScreen")}
        >
          <Image
            source={require("../icons/doctor.png")}
            style={{
              width: 80,
              height: 80,
              marginTop: 30,
              marginLeft: 30,
              marginRight: 30,
              marginEnd: 30,
            }}
          />
          <Text
            style={{
              alignSelf: "center",
              marginBottom: 30,
              top: 8,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Doctor
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0.5 }}></View>
    </View>
  );
};

export default ScreenPatientDoctor;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    borderRadius: 20,
    //margin: 40,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    //margin: 40,
    //top: 3,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 3,
    shadowOpacity: 1,
  },
});
