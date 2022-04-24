import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/SplashScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import AdditionalInfo from "../screens/AdditionalInfo";
import AdditionalInfo2 from "../screens/AdditionalInfo2";
import BottomTabNavigation from "./BottomTabNavigation";
import DoctorBottomTabNavigation from "./DoctorBottomTabNavigation";
import Appointment from "../screens/Appointment";
import DoctorList from "../screens/DoctorList";
import Rating from "../screens/Rating";
import ProfileInfo from "../screens/ProfileInfo";
import Perscription from "../screens/Perscription";
import Map from "../screens/Map";
import PaymentInfo from "../screens/PaymentInfo";
import TopTabBar from "../screens/TopTabBar";
import ScreenPatientDoctor from "../screens/ScreenPatientDoctor";
import EditProfile from "../screens/EditProfile";
import PerscriptionCheck from "../screens/PerscriptionCheck";
import DoctorSignInScreen from "../screens/DoctorSignInScreen";
import DoctorSigUpScreen from "../screens/DoctorSignUpScreen";
import DoctorAdditionInfo from "../screens/DoctorAdditionInfo";
import DoctorAdditionInfo2 from "../screens/DoctorAdditionInfo2";
//import DoctorAppointment from "../screens/DoctorAppointment";
import DoctorAppointment from "../screens/DoctorAppointment";
//import AiPerscription from "../screens/AiPerscription";
import AiPerscription from "../screens/AiPerscription";
//import DoctorAdditionalInfo from "../screens/DoctorAdditionInfo";
//import DoctorAdditionalInfo2 from "../screens/DoctorAdditionInfo2";
// import DoctorAdditionalInfo from "../screens/DoctorAdditionalInfo";
// import DoctorAdditionalInfo2 from "../screens/DoctorAdditionalInfo2";
//import MapViewComponent from "../MapViewComponent";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ScreenPatientDoctor"
        component={ScreenPatientDoctor}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AdditionalInfo"
        component={AdditionalInfo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AdditionalInfo2"
        component={AdditionalInfo2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DoctorSignInScreen"
        component={DoctorSignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DoctorSignUpScreen"
        component={DoctorSigUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DoctorAdditionInfo"
        component={DoctorAdditionInfo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DoctorAdditionInfo2"
        component={DoctorAdditionInfo2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tab"
        component={BottomTabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tab1"
        component={DoctorBottomTabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Appointment"
        component={Appointment}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DoctorList"
        component={DoctorList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Rating"
        component={Rating}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Perscription"
        component={Perscription}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileInfo"
        component={ProfileInfo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Map"
        component={Map}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentInfo"
        component={PaymentInfo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TopTabBar"
        component={TopTabBar}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PerscriptionCheck"
        component={PerscriptionCheck}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DoctorAppointment"
        component={DoctorAppointment}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AiPerscription"
        component={AiPerscription}
        options={{ headerShown: false }}
      />

      {/* <Stack.Screen
        name="Rating"
        component={Rating}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
