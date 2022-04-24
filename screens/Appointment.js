import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button,
  Alert,
  //Dimensions,
} from "react-native";
import DatePicker from "react-native-datepicker";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  //Text,
  Switch,
  TouchableRipple,
} from "react-native-paper";

import { firebaseConfig } from "./FirebaseConfig";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, set } from "firebase/database";
import AsyncStorage from "@react-native-async-storage/async-storage";

var date12 = new Date();
var day1 = date12.getDate() + 1;
var day2 = date12.getDate() + 2;
var month = date12.getMonth() + 1;

const getDate = [
  {
    Date: date12.getDate() + "-" + month + "-" + date12.getFullYear(),
    Selected: false,
  },
  {
    Date: day1 + "-" + month + "-" + date12.getFullYear(),
    Selected: false,
  },
  {
    Date: day2 + "-" + month + "-" + date12.getFullYear(),
    Selected: false,
  },
];

const Option = [
  { time: "10:00", Selected: false },
  { time: "11:00", Selected: false },
  { time: "12:00", Selected: false },
  { time: "13:00", Selected: false },
  { time: "14:00", Selected: false },
  { time: "15:00", Selected: false },
  { time: "16:00", Selected: false },
  { time: "17:00", Selected: false },
  { time: "18:00", Selected: false },
];

const DiseaseList = [
  { disease: "Allergies", Selected: false },
  { disease: "Colds and Flu", Selected: false },
  { disease: "Headaches", Selected: false },
  { disease: "Stomach Aches", Selected: false },
  { disease: "Other", Selected: false },
];

const meeting = [
  { Type: "In Person", Selected: false },
  { Type: "Online", Selected: false },
];

//const [height,width] = Dimensions.get("window");

const Appointment = ({ navigation, route }) => {
  const DoctorEmail = route.params.DoctorEmail;
  const DoctorName = route.params.DoctorName;
  const [AppointmentDate, SetAppointmentDate] = useState("");
  const [AppointmentTime, SetAppointmentTime] = useState("");
  const [AppointmentDisease, SetAppointmentDisease] = useState("");
  const [AppointmentMeetingType, SetAppointmentMeetingType] = useState("");
  //var AppointmentDate = ""
  // var AppointmentTime = ""
  // var AppointmentDisease = ""
  // var AppointmentMeetingType = ""

  console.log(DoctorName);
  console.log("wewe");

  const [date1, setDate1] = useState(getDate);
  // const [date, setDate] = useState("09-10-2020");
  const [count, setCount] = useState(Option);
  const [DiseaseName, setDisease] = useState(DiseaseList);
  const [MeetingType, setMeeting] = useState(meeting);

  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
  });

  var value = "";
  const app = initializeApp(firebaseConfig);
  const dbRef = ref(getDatabase());
  const dbRef1 = getDatabase();
  const _retrieveData = async () => {
    try {
      value = await AsyncStorage.getItem("UserEmail");
      if (value !== null) {
      }
    } catch (error) {
    }
  };
  const [UserCNIC, setName] = useState("");
  const check11 = () => {
    _retrieveData();
    get(child(dbRef, `UserRecord`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((child) => {
            console.log(child.val());
            if (child.val().UserEmail == `${value}`) {
              setName(child.val().UserCNIC);
              console.log(child.key);
            }
          });
          //setValue(UserCNIC);
          console.log(UserCNIC);
          console.log("dsdsd66666s");
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const [AppointmentCount, setAppointmentCount] = useState(0);
  var AppointmentCount1 = 0;
  const countfunction = () => {
    get(child(dbRef, `AppointmentRecord`))
      .then((snapshot) => {
        console.log("sdsdsds");

        setAppointmentCount(snapshot.size + 1);
        // if (snapshot.exists()) {
        //   snapshot.forEach((child) => {
        //     AppointmentCount1++;
        //     setAppointmentCount(AppointmentCount1);
        //     console.log(AppointmentCount);
        //   });
        //   //setValue(UserCNIC);
        //   // console.log(UserCNIC);
        //   // console.log("dsdsd66666s");
        // } else {
        //   console.log("No data available");
        // }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    check11();
    countfunction();
  }, []);
  const Next = () => {
    Alert.alert("Appointment Add");
    console.log("AppointmentTime");
    console.log(AppointmentDate);
    console.log(AppointmentTime);
    console.log(AppointmentDisease);
    console.log(AppointmentMeetingType);
    console.log("AppointmentTime111");

    //navigation.navigate("Tab");
    const status = "Pending";

    console.log(AppointmentCount);
    set(ref(dbRef1, "AppointmentRecord/" + "Appointment" + AppointmentCount), {
      DoctorEmail,
      DoctorName,
      UserCNIC,
      AppointmentDate,
      AppointmentTime,
      AppointmentDisease,
      AppointmentMeetingType,
      status,
    }).then((Date) => {
      //navigation.navigate("SignInScreen");
      console.log(Date);
    });
    setDate1(getDate);
    setCount(Option);
    setDisease(DiseaseList);
    setMeeting(meeting);
    navigation.navigate("Tab");
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          //flexDirection: "column",
          flex: 0.2,
          backgroundColor: "white",
        }}
      >
        <View style={{ flex: 0.3 }}></View>
        <View style={{ flex: 0.5, flexDirection: "row" }}>
          <View style={{ flex: 0.05 }}></View>
          <Avatar.Image
            style={{ backgroundColor: "white" }}
            source={require("../icons/user.png")}
            size={80}
          />
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 20, left: 8, top: 8 }}>{DoctorName}</Text>
            <Text style={{ fontSize: 16, left: 8, top: 8 }}>{DoctorEmail}</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 0.15 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 15,
            marginTop: 6,
            marginBottom: 5,
          }}
        >
          Pick a time
        </Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {getDate.map((tip, index) => {
            return (
              <TouchableOpacity
                style={{ left: 19 }}
                onPress={() => {
                  const state1 = getDate;
                  if (
                    state1.some((tip) => {
                      if (tip.Selected) return true;
                    })
                  ) {
                    const select = state1.findIndex(
                      (tip) => tip.Selected == true
                    );
                    if (select == index) {
                      state1[select].Selected = false;
                    } else {
                      state1[select].Selected = false;
                      state1[index].Selected = !state1[index].Selected;
                    }
                  } else {
                    state1[index].Selected = !state1[index].Selected;
                  }
                  SetAppointmentDate(
                    state1[state1.findIndex((tip) => tip.Selected == true)].Date
                  );
                  // AppointmentDate =
                  //   state1[state1.findIndex((tip) => tip.Selected == true)]
                  //     .Date;
                  console.log(
                    state1[state1.findIndex((tip) => tip.Selected == true)].Date
                  );
                  setDate1([...date1, state1]);
                  //console.log(state1);
                }}
              >
                <View
                  style={[
                    styles.radioButton,
                    {
                      backgroundColor: tip.Selected ? "#28D5DA" : "#D2F9FA",
                      borderColor: tip.Selected ? "#28D5DA" : "#D2F9FA",
                      borderRadius: 10,
                    },
                  ]}
                >
                  <Text>{tip.Date}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        {/* <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 15,
            marginTop: 6,
          }}
        >
          Pick a day
        </Text>
        <DatePicker
          style={{
            alignSelf: "center",
            backgroundColor: "#D2F9FA",
            borderRadius: 10,
            top: 20,
          }}
          date={date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2019"
          maxDate="01-01-2025"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              display: "none",
              // position: "relative",
              // left: 0,
              // top: 0,
              // marginLeft: 0,
            },
            dateInput: {
              borderColor: "#28D5DA",
              borderRadius: 10,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        /> */}
      </View>
      <View style={{ flex: 0.2 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 15,
            marginTop: 6,
            marginBottom: 5,
          }}
        >
          Pick a time
        </Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {Option.map((tip, index) => {
            return (
              <TouchableOpacity
                style={{ left: 19 }}
                onPress={() => {
                  const state1 = Option;
                  if (
                    state1.some((tip) => {
                      if (tip.Selected) return true;
                    })
                  ) {
                    const select = state1.findIndex(
                      (tip) => tip.Selected == true
                    );
                    if (select == index) {
                      state1[select].Selected = false;
                    } else {
                      state1[select].Selected = false;
                      state1[index].Selected = !state1[index].Selected;
                    }
                  } else {
                    state1[index].Selected = !state1[index].Selected;
                  }
                  SetAppointmentTime(
                    state1[state1.findIndex((tip) => tip.Selected == true)].time
                  );
                  // AppointmentTime =
                  //   state1[state1.findIndex((tip) => tip.Selected == true)]
                  //     .time;
                  console.log(
                    state1[state1.findIndex((tip) => tip.Selected == true)].time
                  );
                  setCount([...count, state1]);
                }}
              >
                <View
                  style={[
                    styles.radioButton,
                    {
                      backgroundColor: tip.Selected ? "#28D5DA" : "#D2F9FA",
                      borderColor: tip.Selected ? "#28D5DA" : "#D2F9FA",
                      borderRadius: 10,
                    },
                  ]}
                >
                  <Text>{tip.time}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <View style={{ flex: 0.2 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 15,
            marginTop: 6,
            marginBottom: 5,
          }}
        >
          Choose a symptoms
        </Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {DiseaseList.map((tip, index) => {
            return (
              <TouchableOpacity
                style={{ left: 19 }}
                onPress={() => {
                  const state1 = DiseaseList;
                  if (
                    state1.some((tip) => {
                      if (tip.Selected) return true;
                    })
                  ) {
                    const select = state1.findIndex(
                      (tip) => tip.Selected == true
                    );
                    if (select == index) {
                      state1[select].Selected = false;
                    } else {
                      state1[select].Selected = false;
                      state1[index].Selected = !state1[index].Selected;
                    }
                  } else {
                    state1[index].Selected = !state1[index].Selected;
                  }
                  SetAppointmentDisease(
                    state1[state1.findIndex((tip) => tip.Selected == true)]
                      .disease
                  );
                  // AppointmentDisease =
                  //   state1[state1.findIndex((tip) => tip.Selected == true)]
                  //     .disease;
                  console.log(
                    state1[state1.findIndex((tip) => tip.Selected == true)]
                      .disease
                  );
                  setDisease([...DiseaseName, state1]);
                }}
              >
                <View
                  style={[
                    styles.radioButton,
                    {
                      backgroundColor: tip.Selected ? "#28D5DA" : "#D2F9FA",
                      borderColor: tip.Selected ? "#28D5DA" : "#D2F9FA",
                      borderRadius: 10,
                    },
                  ]}
                >
                  <Text>{tip.disease}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <View style={{ flex: 0.125 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 15,
            marginTop: 6,
            marginBottom: 5,
          }}
        >
          Type
        </Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {meeting.map((tip, index) => {
            return (
              <TouchableOpacity
                style={{ left: 19 }}
                onPress={() => {
                  const state1 = meeting;
                  if (
                    state1.some((tip) => {
                      if (tip.Selected) return true;
                    })
                  ) {
                    const select = state1.findIndex(
                      (tip) => tip.Selected == true
                    );
                    if (select == index) {
                      state1[select].Selected = false;
                    } else {
                      state1[select].Selected = false;
                      state1[index].Selected = !state1[index].Selected;
                    }
                  } else {
                    state1[index].Selected = !state1[index].Selected;
                  }
                  SetAppointmentMeetingType(
                    state1[state1.findIndex((tip) => tip.Selected == true)].Type
                  );
                  // AppointmentMeetingType =
                  //   state1[state1.findIndex((tip) => tip.Selected == true)]
                  //     .Type;
                  console.log(
                    state1[state1.findIndex((tip) => tip.Selected == true)].Type
                  );
                  setMeeting([...MeetingType, state1]);
                }}
              >
                <View
                  style={[
                    styles.radioButton,
                    {
                      backgroundColor: tip.Selected ? "#28D5DA" : "#D2F9FA",
                      borderColor: tip.Selected ? "#28D5DA" : "#D2F9FA",
                      borderRadius: 10,
                    },
                  ]}
                >
                  <Text>{tip.Type}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <View style={{ flex: 0.125 }}>
        <TouchableOpacity style={styles.button} onPress={Next}>
          {
            <Text
              style={{ alignSelf: "center", fontSize: 18, fontWeight: "bold" }}
            >
              Confirm
            </Text>
          }
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "white",
    flex: 1,
  },
  radioView: {
    marginTop: 16,
    marginLeft: 16,
  },
  radioButton: {
    backgroundColor: "black",
    flexDirection: "row",
    alignSelf: "baseline",
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderRadius: 28,
    borderWidth: 1.5,
    margin: 6,
  },
  button: {
    backgroundColor: "#13A4A4",
    borderRadius: 10,
    padding: 20,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 16,
    //left:99,
    //top:3,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 15,
    shadowOpacity: 1,
  },
});
export default Appointment;
