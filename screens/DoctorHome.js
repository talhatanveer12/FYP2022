import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";
import { COLOR } from "../constants/theme";
import { getDatabase, ref, child, get, set } from "firebase/database";
//import AsyncStorage from "@react-native-async-storage/async-storage";
import "./GlobalVariables";

const DoctorHome = ({ navigation }) => {
  console.log(global.DoctorName);
  //   var value = "";
  //   var value2 = "";
  //   var value3 = "";
  //   const dbRef = ref(getDatabase());
  //   var g = 0;
  //   const [Count, setCount] = useState(0);
  //   const retrieveAppointmentData = () => {
  //     get(child(dbRef, `AppointmentRecord`))
  //       .then((snapshot) => {
  //         if (snapshot.exists()) {
  //           snapshot.forEach((child) => {
  //             if (child.val().UserCNIC == `${global.PatientCNIC}`) {
  //               g = g + 1;
  //               setCount(g);
  //             }
  //           });
  //         }
  //       })
  //       .catch((error) => {});
  //   };
  //   useEffect(() => {
  //     retrieveAppointmentData();
  //   }, []);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "column",
          flex: 1.5,
          backgroundColor: COLOR.primary,
        }}
      >
        <View style={{ flex: 0.5 }}></View>
        <View
          style={{
            flex: 2,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 2,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Text style={{ fontSize: 26, fontWeight: "bold", padding: 14 }}>
              {global.DoctorName}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar.Image
              style={{
                backgroundColor: "white",
              }}
              source={{
                uri: global.UserImageUri,
              }}
              size={70}
            />
          </View>
        </View>
        <View style={{ flex: 0.5 }}></View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 0.5 }}></View>
          <View style={{ flex: 8 }}>
            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 4, flexDirection: "row" }}>
              {/* <View
                style={{
                  flex: 1,
                  backgroundColor: "white",
                  borderRadius: 100,
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    flex: 1.4,
                    backgroundColor: "white",
                    borderWidth: 1,
                    borderRadius: 100,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>0</Text>
                </View>
                <View
                  style={{
                    flex: 4,
                    backgroundColor: "white",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    borderTopRightRadius: 100,
                    borderBottomRightRadius: 100,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => navigation.navigate("PerscriptionCheck")}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 17,
                      }}
                    >
                      Perscription
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 0.6 }}></View>
              </View>
              <View style={{ flex: 0.1 }}></View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: "white",
                  borderRadius: 100,
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    flex: 1.4,
                    backgroundColor: "white",
                    borderRadius: 100,
                    borderWidth: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>{Count}</Text>
                </View>
                <View
                  style={{
                    flex: 4,
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => navigation.navigate("TopTabBar")}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 17,
                      }}
                    >
                      Appointment
                    </Text>
                  </TouchableOpacity>
                </View> */}
              {/* <View style={{ flex: 0.6 }}></View>
              </View> */}
            </View>
            <View style={{ flex: 1 }}></View>
          </View>
          <View style={{ flex: 0.5 }}></View>
        </View>
        <View style={{ flex: 0.5 }}></View>
      </View>
      <View style={{ flex: 2 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("AiPerscription")}
            >
              <Image
                source={require("../icons/prescription.png")}
                style={{
                  width: 50,
                  height: 50,
                  marginTop: 30,
                  marginLeft: 40,
                  marginRight: 40,
                }}
              />
              <Text style={{ alignSelf: "center", marginBottom: 30, top: 8 }}>
                Perscription
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
              onPress={() => navigation.navigate("DoctorAppointment")}
            >
              <Image
                source={require("../icons/appointment.png")}
                style={{
                  width: 50,
                  height: 50,
                  marginTop: 30,
                  marginLeft: 40,
                  marginRight: 40,
                }}
              />
              <Text style={{ alignSelf: "center", marginBottom: 30, top: 8 }}>
                Appointment
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.navigate("DoctorList", { UserEmail: "temp" })
              }
            >
              <Image
                source={require("../icons/clipboard.png")}
                style={{
                  width: 50,
                  height: 50,
                  marginTop: 30,
                  marginLeft: 40,
                  marginRight: 40,
                }}
              />
              <Text style={{ alignSelf: "center", marginBottom: 30, top: 8 }}>
                Doctor List
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
              onPress={() => navigation.navigate("Map")}
            >
              <Image
                source={require("../icons/map.png")}
                style={{
                  width: 50,
                  height: 50,
                  marginTop: 30,
                  marginLeft: 40,
                  marginRight: 40,
                }}
              />
              <Text style={{ alignSelf: "center", marginBottom: 30, top: 8 }}>
                Map
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ flex: 0.4 }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 3,
    shadowOpacity: 1,
  },
  button1: {
    backgroundColor: "white",
    borderRadius: 20,
    margin: 20,
    top: -10,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 15,
    shadowOpacity: 1,
  },
});

export default DoctorHome;

// import { StyleSheet, Text, View } from "react-native";
// import React from "react";

// const DoctorHome = () => {
//   return (
//     <View>
//       <Text>DoctorHome</Text>
//     </View>
//   );
// };

// export default DoctorHome;

// const styles = StyleSheet.create({});
