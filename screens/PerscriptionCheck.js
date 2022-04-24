import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useState, useEffect } from "react";
import "./GlobalVariables";
import { getDatabase, ref, child, get } from "firebase/database";

const listtab = [
  {
    status: "Pending",
  },
  {
    status: "cancelled",
  },
  {
    status: "Complete",
  },
];
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

var main = [];
const PerscriptionCheck = () => {
  const [status, setstatus] = useState("Pending");
  const [datalist, setDataList] = useState(main);

  useEffect(() => {
    //_retrieveData();
    countfunction();
  }, []);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
    //countfunction();
  }, []);

  const setStatusFilter = (status) => {
    if (status == "Complete") {
      setDataList([...main.filter((e) => e.status === status)]);
    } else if (status == "Pending") {
      setDataList([...main.filter((e) => e.status === status)]);
    } else if (status == "cancelled") {
      setDataList([...main.filter((e) => e.status === status)]);
    }
    setstatus(status);
  };

  const renderItem = ({ item, index }) => {
    return (
      <View key={index} style={styles.container1}>
        <View style={styles.cardContainer}>
          <View style={{ flex: 0.7 }}></View>
          <View
            style={{
              flex: 2,
              flexDirection: "row",
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={styles.titleStyle}>{item.UserName}</Text>
              <Text style={styles.categoryStyle}>
                {item.PerscriptionDisease}
              </Text>
            </View>
            <Image
              style={styles.imageStyle}
              source={require("../icons/appointment.png")}
            />
            <View style={{ flex: 0.05 }}></View>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ left: 4 }}>{"symptoms : " + item.DiseaseType}</Text>
          </View>
          <View
            style={{
              flex: 0.03,
              top: 3,
              width: 300,
              left: 10,
              backgroundColor: "black",
            }}
          />
          <View style={{ flex: 4, top: 10 }}>
            <View
              style={{
                flex: 1.1,
                flexDirection: "row",
              }}
            >
              {/* <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../icons/calendar.png")}
                />
                <Text style={{ left: 3 }}>{item.DiseaseType}</Text>
              </View> */}
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../icons/medicine.png")}
                />
                <Text style={{ left: 3 }}>{item.MedicineName}</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../icons/accept.png")}
                />
                <Text style={{ left: 3 }}>{item.status}</Text>
              </View>
            </View>
            <View
              style={{
                flex: 2,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                disabled={item.status == "cancelled"}
                style={
                  item.status != "cancelled" ? styles.button : styles.button1
                }
              >
                <Text style={styles.text1}>
                  {item.status == "Complete" ? "Rating" : "Pending"}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 0.5 }}></View>
          </View>
        </View>
      </View>
    );
  };

  const dbRef = ref(getDatabase());
  const countfunction = () => {
    main = [];
    get(child(dbRef, `PerscriptionRecord`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((child) => {
            console.log(child.val());
            if (child.val().UserCNIC == `${global.PatientCNIC}`) {
              main.push({
                UserName: child.val().UserName,
                PerscriptionDisease: child.val().Disease,
                DiseaseType: child.val().Type,
                MedicineName: child.val().Medicine,
                status: child.val().status,
              });
            }
          });
          setDataList(main);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.TabBar}>
        {listtab.map((e) => (
          <TouchableOpacity
            style={[
              styles.buttonTab,
              status === e.status && styles.buttonTabActive,
            ]}
            onPress={() => setStatusFilter(e.status)}
          >
            <Text style={[styles.Text]}>{e.status}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <FlatList
          data={datalist}
          keyExtractor={(e, i) => i.toString()}
          renderItem={renderItem}
          style={{ paddingBottom: 40 }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PerscriptionCheck;

const deviceWidth = Math.round(Dimensions.get("window").width);
const offset = 40;
const radius = 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 30,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  TabBar: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 20,
  },
  buttonTab: {
    width: Dimensions.get("window").width / 3.5,
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: "#EBEBEB",
    padding: 10,
    justifyContent: "center",
  },
  Text: {
    fontSize: 16,
    color: "#000",
  },
  buttonTabActive: {
    backgroundColor: "#006693",
  },

  container1: {
    width: deviceWidth - 20,
    alignItems: "center",
    marginTop: 25,
  },

  cardContainer: {
    flexDirection: "column",
    width: deviceWidth - offset,
    backgroundColor: "#ffffff",
    height: 200,
    borderRadius: radius,

    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  imageStyle: {
    height: 50,
    width: 50,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity: 0.9,
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  titleStyle: {
    left: 5,
    fontSize: 20,
    fontWeight: "800",
  },
  categoryStyle: {
    left: 5,

    fontWeight: "200",
  },
  infoStyle: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  iconLabelStyle: {
    flexDirection: "row",
    marginTop: 10,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 7,
    width: 300,
    elevation: 3,
    backgroundColor: "#006693",
  },
  button1: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 7,
    width: 300,
    opacity: 0.5,
    elevation: 3,
    backgroundColor: "blue",
  },
  text1: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
