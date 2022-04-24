import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const AiPerscription = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.5 }}></View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            //alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 22, left: 3, fontWeight: "bold" }}>
            Talha Tanveer
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text1}>View Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 7 }}>
        <View style={{ flex: 1.5 }}>
          <View>
            <Text
              style={{
                fontSize: 22,
                left: 10,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Disease
            </Text>
          </View>
          <View
            style={[
              styles.radioButton,
              {
                backgroundColor: "#28D5DA",
                borderColor: "#28D5DA",
                borderRadius: 10,
                flexWrap: "wrap",
              },
            ]}
          >
            <Text>Fever</Text>
          </View>
        </View>
        <View style={{ flex: 1.5 }}>
          <View>
            <Text
              style={{
                fontSize: 22,
                left: 10,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Symptoms
            </Text>
          </View>
          <View
            style={[
              styles.radioButton,
              {
                backgroundColor: "#28D5DA",
                borderColor: "#28D5DA",
                borderRadius: 10,
                flexWrap: "wrap",
              },
            ]}
          >
            <Text>Fever</Text>
          </View>
        </View>
        <View style={{ flex: 3 }}>
          <View>
            <Text
              style={{
                fontSize: 22,
                left: 10,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Other
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              //height: 60,
              //width: 300,
              //padding: 20,
              borderWidth: 2,
              //alignItem: "center",
              //justifyContent: "center",
              borderColor: "#ffd75e",
            }}
          >
            <Text>Fever</Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View>
            <Text
              style={{
                fontSize: 22,
                left: 10,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Medicine Name
            </Text>
          </View>
          <View
            style={[
              styles.radioButton,
              {
                backgroundColor: "#28D5DA",
                borderColor: "#28D5DA",
                borderRadius: 10,
                flexWrap: "wrap",
              },
            ]}
          >
            <Text>Medicine Name</Text>
          </View>
        </View>
        <View style={{ flex: 2, flexDirection: "row" }}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text1}>Reject</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text1}>Accept</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AiPerscription;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 7,
    //width: 300,
    elevation: 3,
    backgroundColor: "black",
  },
  text1: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  radioButton: {
    backgroundColor: "black",
    flexDirection: "row",
    alignSelf: "baseline",
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderRadius: 28,
    borderWidth: 1.5,
    left: 5,
  },
});

// import { StyleSheet, Text, View } from "react-native";
// import React from "react";

// const AiPerscription = () => {
//   return (
//     <View>
//       <Text>AiPerscription</Text>
//     </View>
//   );
// };

// export default AiPerscription;

// const styles = StyleSheet.create({});
