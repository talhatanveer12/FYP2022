import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  NativeModules,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "./GlobalVariables";

import {
  getDownloadURL,
  getStorage,
  ref as sRef,
  uploadBytes,
} from "firebase/storage";
//import { Picker } from "@react-native-picker/picker";
import Rating from "./Rating";
//import ImagePicker from "react-native-image-crop-picker";

//var ImagePicker = NativeModules.ImageCropPicker;

const Profile = ({ navigation }) => {
  var value = "";
  var value2 = "";
  var value3 = "";
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [image, setImage] = useState(global.UserImageUri);
  const [url, setUrl] = useState();
  const pickImageFunction = () => {};

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
      const storage = getStorage(); //the storage itself
      const storageRef = sRef(storage, "Images/Talha"); //how the image will be addressed inside the storage
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
  const retrieveData = async () => {
    try {
      value3 = await AsyncStorage.getItem("UserName");
      value = await AsyncStorage.getItem("UserEmail");
      value2 = await AsyncStorage.getItem("UserCNIC");
      setEmail(value);
      setName(value3);
      console.log(global.UserImageUri);
    } catch (error) {}
  };
  useEffect(() => {
    retrieveData();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.5 }}></View>
      <View
        style={{
          flex: 2,
          alignItems: "center",
          justifyContent: "center",
          borderBottomWidth: 1,
          borderBottomColor: "black",
        }}
      >
        {/* <TouchableOpacity onPress={pickImage}> */}
        <Image
          source={
            global.UserImageUri == ""
              ? require("../icons/user.png")
              : { uri: global.UserImageUri }
          }
          style={{ width: 100, height: 100, borderRadius: 100 }}
        />
        {/* </TouchableOpacity> */}
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          {global.PatientName}
        </Text>
        <Text style={{ fontSize: 16 }}>{global.PatientEmail}</Text>
      </View>
      <View style={{ flex: 4 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            paddingStart: 12,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("ProfileInfo")}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../icons/profile/user.png")}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text style={{ fontSize: 18, marginLeft: 12, marginTop: 2 }}>
                My Profile
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            paddingStart: 12,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../icons/profile/user.png")}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text style={{ fontSize: 18, marginLeft: 12, marginTop: 2 }}>
                Edit Project
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            paddingStart: 12,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../icons/profile/notification.png")}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text style={{ fontSize: 18, marginLeft: 12, marginTop: 2 }}>
                Notification
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            paddingStart: 12,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("PaymentInfo")}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../icons/profile/credit-card.png")}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text style={{ fontSize: 18, marginLeft: 12, marginTop: 2 }}>
                Payment
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            paddingStart: 12,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Rating")}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../icons/profile/info.png")}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text style={{ fontSize: 18, marginLeft: 12, marginTop: 2 }}>
                Rating
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}></View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            paddingStart: 12,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../icons/profile/logout.png")}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text style={{ fontSize: 18, marginLeft: 12, marginTop: 2 }}>
                Logout
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    // <View style={{ flex: 1,backgroundColor:"white" }}>
    //     <View style={{flex:0.05}}></View>
    //     <View style={{flex:0.15,flexDirection:"row"}}>
    //         <View style={{flex:0.05}}></View>
    //         <View style={{flex:0.25}}>
    //         <Image
    //             source={require("../icons/user.png")}
    //             style={{ width: 80, height: 80, alignSelf: "center",marginTop:5}}
    //         />
    //         </View>
    //         <View style={{flex:0.7,flexDirection:"column"}}>
    //             <Text style={{ fontSize: 20,marginTop:16,marginLeft:8 }}>Talha Tanveer</Text>
    //             <Text style={{ fontSize: 16,marginLeft:8}}>talhatanveer930@gmail.com</Text>
    //         </View>
    //     </View>
    //     <View style={{flex:0.05}}></View>
    //     <View style={{flex:0.1,flexDirection:"row"}}>
    // <TouchableOpacity>
    //     <View style={{flexDirection:"row"}}>
    //     <Image
    //         source={require("../icons/profile/user.png")}
    //         style={{ width: 30, height: 30,marginTop:18,marginLeft:10,marginRight:15}}
    //     />
    //     <Text style={{ fontSize: 18,marginTop:19}}>My Profile</Text>
    //     </View>
    // </TouchableOpacity>
    //     </View>
    //     <View style={{flex:0.1}}>
    // <TouchableOpacity>
    //     <View style={{flexDirection:"row"}}>
    //     <Image
    //         source={require("../icons/profile/setting.png")}
    //         style={{ width: 30, height: 30,marginTop:18,marginLeft:10,marginRight:15}}
    //     />
    //     <Text style={{ fontSize: 18,marginTop:19}}>Settings</Text>
    //     </View>
    // </TouchableOpacity>
    //     </View>
    //     <View style={{flex:0.1}}>
    // <TouchableOpacity>
    //     <View style={{flexDirection:"row"}}>
    //     <Image
    //         source={require("../icons/profile/notification.png")}
    //         style={{ width: 30, height: 30,marginTop:18,marginLeft:10,marginRight:15}}
    //     />
    //     <Text style={{ fontSize: 18,marginTop:19}}>Notification</Text>
    //     </View>
    // </TouchableOpacity>
    //     </View>
    //     <View style={{flex:0.1}}>
    // <TouchableOpacity>
    //     <View style={{flexDirection:"row"}}>
    //     <Image
    //         source={require("../icons/profile/credit-card.png")}
    //         style={{ width: 30, height: 30,marginTop:18,marginLeft:10,marginRight:15}}
    //     />
    //     <Text style={{ fontSize: 18,marginTop:19}}>Payment</Text>
    //     </View>
    // </TouchableOpacity>
    //     </View>
    //     <View style={{flex:0.1}}>
    // <TouchableOpacity>
    //     <View style={{flexDirection:"row"}}>
    //     <Image
    //         source={require("../icons/profile/info.png")}
    //         style={{ width: 30, height: 30,marginTop:15,marginLeft:10,marginRight:15}}
    //     />
    //     <Text style={{ fontSize: 18,marginTop:18}}>About App</Text>
    //     </View>
    // </TouchableOpacity>
    //     </View>
    //     <View style={{flex:0.15}}></View>
    //     <View style={{flex:0.1}}>
    // <TouchableOpacity>
    //     <View style={{flexDirection:"row"}}>
    //     <Image
    //         source={require("../icons/profile/logout.png")}
    //         style={{ width: 30, height: 30,marginTop:18,marginLeft:10,marginRight:15}}
    //     />
    //     <Text style={{ fontSize: 18,marginTop:19}}>Logout</Text>
    //     </View>
    // </TouchableOpacity>
    //     </View>
    // </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});

// import React, { useState } from "react";
// import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import * as ImagePicker from "expo-image-picker";
// import Rating from "./Rating";
// import EditProfile from "./EditProfile";

// const Profile = ({ navigation }) => {
//   const [image, setImage] = useState();

//   const pickImage = async () => {
//     // No permissions request is necessary for launching the image library
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [2, 2],
//       quality: 1,
//     });

//     console.log(result);

//     if (!result.cancelled) {
//       setImage(result.uri);
//     }
//   };
//   return (
//     <View style={{ flex: 1 }}>
//       <View style={{ flex: 0.5 }}></View>
//       <View
//         style={{
//           flex: 2,
//           alignItems: "center",
//           justifyContent: "center",
//           borderBottomWidth: 1,
//           borderBottomColor: "black",
//         }}
//       >
//         <Image
//           source={require("../icons/user.png")}
//           style={{ width: 100, height: 100 }}
//         />
//         <Text style={{ fontSize: 20, fontWeight: "bold" }}>
//           {global.PatientName}
//         </Text>
//         <Text style={{ fontSize: 16 }}>{global.PatientEmail}</Text>
//       </View>
//       <View style={{ flex: 4 }}>
//         <View
//           style={{
//             flex: 1,
//             flexDirection: "row",
//             paddingStart: 12,
//             alignItems: "center",
//             justifyContent: "flex-start",
//           }}
//         >
//           <TouchableOpacity onPress={() => navigation.navigate("ProfileInfo")}>
//             <View style={{ flexDirection: "row" }}>
//               <Image
//                 source={require("../icons/profile/user.png")}
//                 style={{
//                   width: 30,
//                   height: 30,
//                 }}
//               />
//               <Text style={{ fontSize: 18, marginLeft: 12, marginTop: 2 }}>
//                 My Profile
//               </Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//         <View
//           style={{
//             flex: 1,
//             flexDirection: "row",
//             paddingStart: 12,
//             alignItems: "center",
//             justifyContent: "flex-start",
//           }}
//         >
//           <TouchableOpacity>
//             <View style={{ flexDirection: "row" }}>
//               <Image
//                 source={require("../icons/profile/setting.png")}
//                 style={{
//                   width: 30,
//                   height: 30,
//                 }}
//               />
//               <Text style={{ fontSize: 18, marginLeft: 12, marginTop: 2 }}>
//                 Settings
//               </Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//         <View
//           style={{
//             flex: 1,
//             flexDirection: "row",
//             paddingStart: 12,
//             alignItems: "center",
//             justifyContent: "flex-start",
//           }}
//         >
//           <TouchableOpacity>
//             <View style={{ flexDirection: "row" }}>
//               <Image
//                 source={require("../icons/profile/notification.png")}
//                 style={{
//                   width: 30,
//                   height: 30,
//                 }}
//               />
//               <Text style={{ fontSize: 18, marginLeft: 12, marginTop: 2 }}>
//                 Notification
//               </Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//         <View
//           style={{
//             flex: 1,
//             flexDirection: "row",
//             paddingStart: 12,
//             alignItems: "center",
//             justifyContent: "flex-start",
//           }}
//         >
//           <TouchableOpacity onPress={() => navigation.navigate("PaymentInfo")}>
//             <View style={{ flexDirection: "row" }}>
//               <Image
//                 source={require("../icons/profile/credit-card.png")}
//                 style={{
//                   width: 30,
//                   height: 30,
//                 }}
//               />
//               <Text style={{ fontSize: 18, marginLeft: 12, marginTop: 2 }}>
//                 Payment
//               </Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//         <View
//           style={{
//             flex: 1,
//             flexDirection: "row",
//             paddingStart: 12,
//             alignItems: "center",
//             justifyContent: "flex-start",
//           }}
//         >
//           <TouchableOpacity onPress={() => navigation.navigate("Rating")}>
//             <View style={{ flexDirection: "row" }}>
//               <Image
//                 source={require("../icons/profile/info.png")}
//                 style={{
//                   width: 30,
//                   height: 30,
//                 }}
//               />
//               <Text style={{ fontSize: 18, marginLeft: 12, marginTop: 2 }}>
//                 Rating
//               </Text>
//             </View>
//           </TouchableOpacity>
//         </View>

//         <View
//           style={{
//             flex: 1,
//             flexDirection: "row",
//             paddingStart: 12,
//             alignItems: "center",
//             justifyContent: "flex-start",
//           }}
//         >
//           <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
//             <View style={{ flexDirection: "row" }}>
//               <Image
//                 source={require("../icons/profile/info.png")}
//                 style={{
//                   width: 30,
//                   height: 30,
//                 }}
//               />
//               <Text style={{ fontSize: 18, marginLeft: 12, marginTop: 2 }}>
//                 Edit Profile
//               </Text>
//             </View>
//           </TouchableOpacity>
//         </View>

//         <View style={{ flex: 1 }}></View>
//         <View
//           style={{
//             flex: 1,
//             flexDirection: "row",
//             paddingStart: 12,
//             alignItems: "center",
//             justifyContent: "flex-start",
//           }}
//         >
//           <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
//             <View style={{ flexDirection: "row" }}>
//               <Image
//                 source={require("../icons/profile/logout.png")}
//                 style={{
//                   width: 30,
//                   height: 30,
//                 }}
//               />
//               <Text style={{ fontSize: 18, marginLeft: 12, marginTop: 2 }}>
//                 Logout
//               </Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//     // <View style={{ flex: 1,backgroundColor:"white" }}>
//     //     <View style={{flex:0.05}}></View>
//     //     <View style={{flex:0.15,flexDirection:"row"}}>
//     //         <View style={{flex:0.05}}></View>
//     //         <View style={{flex:0.25}}>
//     //         <Image
//     //             source={require("../icons/user.png")}
//     //             style={{ width: 80, height: 80, alignSelf: "center",marginTop:5}}
//     //         />
//     //         </View>
//     //         <View style={{flex:0.7,flexDirection:"column"}}>
//     //             <Text style={{ fontSize: 20,marginTop:16,marginLeft:8 }}>Talha Tanveer</Text>
//     //             <Text style={{ fontSize: 16,marginLeft:8}}>talhatanveer930@gmail.com</Text>
//     //         </View>
//     //     </View>
//     //     <View style={{flex:0.05}}></View>
//     //     <View style={{flex:0.1,flexDirection:"row"}}>
//     // <TouchableOpacity>
//     //     <View style={{flexDirection:"row"}}>
//     //     <Image
//     //         source={require("../icons/profile/user.png")}
//     //         style={{ width: 30, height: 30,marginTop:18,marginLeft:10,marginRight:15}}
//     //     />
//     //     <Text style={{ fontSize: 18,marginTop:19}}>My Profile</Text>
//     //     </View>
//     // </TouchableOpacity>
//     //     </View>
//     //     <View style={{flex:0.1}}>
//     // <TouchableOpacity>
//     //     <View style={{flexDirection:"row"}}>
//     //     <Image
//     //         source={require("../icons/profile/setting.png")}
//     //         style={{ width: 30, height: 30,marginTop:18,marginLeft:10,marginRight:15}}
//     //     />
//     //     <Text style={{ fontSize: 18,marginTop:19}}>Settings</Text>
//     //     </View>
//     // </TouchableOpacity>
//     //     </View>
//     //     <View style={{flex:0.1}}>
//     // <TouchableOpacity>
//     //     <View style={{flexDirection:"row"}}>
//     //     <Image
//     //         source={require("../icons/profile/notification.png")}
//     //         style={{ width: 30, height: 30,marginTop:18,marginLeft:10,marginRight:15}}
//     //     />
//     //     <Text style={{ fontSize: 18,marginTop:19}}>Notification</Text>
//     //     </View>
//     // </TouchableOpacity>
//     //     </View>
//     //     <View style={{flex:0.1}}>
//     // <TouchableOpacity>
//     //     <View style={{flexDirection:"row"}}>
//     //     <Image
//     //         source={require("../icons/profile/credit-card.png")}
//     //         style={{ width: 30, height: 30,marginTop:18,marginLeft:10,marginRight:15}}
//     //     />
//     //     <Text style={{ fontSize: 18,marginTop:19}}>Payment</Text>
//     //     </View>
//     // </TouchableOpacity>
//     //     </View>
//     //     <View style={{flex:0.1}}>
//     // <TouchableOpacity>
//     //     <View style={{flexDirection:"row"}}>
//     //     <Image
//     //         source={require("../icons/profile/info.png")}
//     //         style={{ width: 30, height: 30,marginTop:15,marginLeft:10,marginRight:15}}
//     //     />
//     //     <Text style={{ fontSize: 18,marginTop:18}}>About App</Text>
//     //     </View>
//     // </TouchableOpacity>
//     //     </View>
//     //     <View style={{flex:0.15}}></View>
//     //     <View style={{flex:0.1}}>
//     // <TouchableOpacity>
//     //     <View style={{flexDirection:"row"}}>
//     //     <Image
//     //         source={require("../icons/profile/logout.png")}
//     //         style={{ width: 30, height: 30,marginTop:18,marginLeft:10,marginRight:15}}
//     //     />
//     //     <Text style={{ fontSize: 18,marginTop:19}}>Logout</Text>
//     //     </View>
//     // </TouchableOpacity>
//     //     </View>
//     // </View>
//   );
// };

// export default Profile;

// const styles = StyleSheet.create({});
