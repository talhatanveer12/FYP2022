import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Picker,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import SelectBox from "react-native-multi-selectbox";
import "./GlobalVariables";
import { xorBy } from "lodash";

import { firebaseConfig } from "./FirebaseConfig";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, set } from "firebase/database";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { async } from "@firebase/util";

const DiseaseList = [
  {
    item: "Allergies",
  },
  {
    item: "Colds and Flu",
  },
  {
    item: "Headaches",
  },
  {
    item: "Stomach Aches",
  },
];

const StomachAches = [
  {
    item: "Gas",
  },
  {
    item: "muscle strain or pull",
  },
  {
    item: "Cannot poo,Gas",
  },
  {
    item: "Watery poo",
  },
];

const AllergiesTypes = [
  {
    item: "Drug Allergy",
  },
  {
    item: "Food Allergy",
  },
  {
    item: "Mold Allergy",
  },
  {
    item: "Insect Allergy",
  },
];

const ColdsandFlu = [
  {
    item: "Fever",
  },
  {
    item: "Headache",
  },
  {
    item: "Fever,Headache",
  },
  {
    item: "Sneezing",
  },
  {
    item: "Fever,Headache,Sneezing",
  },
];

const HeadachesType = [
  {
    item: "Sinus Headaches",
  },
  {
    item: "Tension Headaches",
  },
  {
    item: "Migraine Headaches",
  },
  {
    item: "Cluster Headaches",
  },
  {
    item: "Low/High Pressure Headaches",
  },
];

const Perscription = () => {
  const UserName = global.PatientName;
  const UserEmail = global.PatientEmail;
  const UserCNIC = global.PatientCNIC;
  const dbRef = ref(getDatabase());
  const dbRef1 = getDatabase();

  const [selectedDisease, setselectedDisease] = useState("");
  const [selectedAllergiesTypes, setselectedAllergiesTypes] = useState("");
  const [selectedHeadachesType, setselectedHeadachesType] = useState("");
  const [selectedColdsandFlu, setselectedColdsandFlu] = useState("");
  const [selectedStomachAches, setSelectedStomachAches] = useState("");
  const [information, setinformation] = useState("");
  const [Disease, SetDisease] = useState("");

  const [PerscriptionCount, setPerscriptionCount] = useState(0);

  const countfunction = () => {
    get(child(dbRef, `PerscriptionRecord`))
      .then((snapshot) => {
        setPerscriptionCount(snapshot.size + 1);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    countfunction();
  }, []);

  const status = "Pending";

  const MachinePerscription = async () => {
    var Type = "";
    if (Disease == "Allergies") {
      Type = selectedAllergiesTypes.item;
    } else if (Disease == "Headaches") {
      Type = selectedHeadachesType.item;
    } else if (Disease == "Colds and Flu") {
      Type = selectedColdsandFlu.item;
    } else if (Disease == "Stomach Aches") {
      Type = selectedStomachAches.item;
    }

    set(
      ref(dbRef1, "PerscriptionRecord/" + "Perscription" + PerscriptionCount),
      {
        UserName,
        UserEmail,
        UserCNIC,
        Disease,
        Type,
        status,
      }
    ).then((Date) => {
      console.log(Date);
    });
  };
  const handleSelectedDisease = (val) => {
    setselectedDisease(val);
    SetDisease(val.item);
  };
  return (
    <View
      style={{
        flex: 1,
        margin: 30,
        minHeight: Math.round(Dimensions.get("window").height),
      }}
    >
      <View style={{ flex: 5 }}>
        <View style={{ width: "100%", alignItems: "center" }}>
          <Text style={{ fontSize: 30, paddingBottom: 20 }}>Perscription</Text>
        </View>
        <Text style={{ fontSize: 20, paddingBottom: 10 }}>Select Disease</Text>
        <SelectBox
          label="Select Disease"
          options={DiseaseList}
          arrowIconColor="#05386B"
          toggleIconColor="#05386B"
          searchIconColor="#05386B"
          value={selectedDisease}
          onChange={(val) => handleSelectedDisease(val)}
          hideInputFilter={false}
        />
        <View style={{ height: 40 }} />
        {returnTextView(selectedDisease.item)}
        {returnSelectBox(selectedDisease.item)}
        <View style={{ height: 40 }} />
        <Text style={{ fontSize: 20, paddingBottom: 10 }}>
          Enter Other Information
        </Text>
        <TextInput
          multiline
          numberOfLines={4}
          //autoFocus={true}
          autoCapitalize="none"
          style={{
            borderWidth: 2,
            height: 80,
            paddingLeft: 4,
            fontSize: 16,
          }}
          onChangeText={(val) => setinformation(val)}
          //autoComplete={autoComplete}
        />
      </View>
      <View style={{ flex: 2 }} />
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={MachinePerscription}
          style={[
            styles.signIn,
            {
              borderColor: "#009387",
              backgroundColor: "#009387",
              borderWidth: 1,
              marginTop: 15,
            },
          ]}
        >
          <Text style={[styles.textSign, { color: "white" }]}>
            Machine Perscription
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={[
            styles.signIn,
            {
              borderColor: "#009387",
              backgroundColor: "#009387",
              borderWidth: 1,
              marginTop: 15,
            },
          ]}
        >
          <Text style={[styles.textSign, { color: "white" }]}>
            Doctor Perscription
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0.4 }} />
      {/* <TouchableOpacity
        style={[
          styles.signIn,
          { borderColor: "#009387", borderWidth: 1, marginTop: 15 },
        ]}
      >
        <Text style={[styles.textSign, { color: "#009387" }]}>Next</Text>
      </TouchableOpacity> */}
    </View>
  );
  function returnTextView(val) {
    if (val == "Allergies") {
      return (
        <Text style={{ fontSize: 20, paddingBottom: 10 }}>
          Select Allergie Type
        </Text>
      );
    } else if (val == "Headaches") {
      return (
        <Text style={{ fontSize: 20, paddingBottom: 10 }}>
          Select Headaches Type
        </Text>
      );
    } else if (val == "Colds and Flu") {
      return (
        <Text style={{ fontSize: 20, paddingBottom: 10 }}>
          Select Colds and Flu symptoms
        </Text>
      );
    } else if (val == "Stomach Aches") {
      return (
        <Text style={{ fontSize: 20, paddingBottom: 10 }}>
          Select Stomach Aches symptoms
        </Text>
      );
    } else {
    }
  }
  function returnSelectBox(val) {
    if (val == "Allergies") {
      // setSelectedStomachAches("");
      // setselectedColdsandFlu("");
      // setselectedHeadachesType("");
      return (
        <SelectBox
          label="Select symptoms"
          options={AllergiesTypes}
          arrowIconColor="#05386B"
          toggleIconColor="#05386B"
          searchIconColor="#05386B"
          value={selectedAllergiesTypes}
          onChange={(val) => setselectedAllergiesTypes(val)}
          hideInputFilter={false}
        />
      );
    } else if (val == "Headaches") {
      // setSelectedStomachAches("");
      // setselectedColdsandFlu("");
      // setselectedAllergiesTypes("");
      return (
        <SelectBox
          label="Select symptoms"
          options={HeadachesType}
          arrowIconColor="#05386B"
          toggleIconColor="#05386B"
          searchIconColor="#05386B"
          value={selectedHeadachesType}
          onChange={(val) => setselectedHeadachesType(val)}
          hideInputFilter={false}
        />
      );
    } else if (val == "Colds and Flu") {
      // setSelectedStomachAches("");
      // selectedAllergiesTypes("");
      // setselectedHeadachesType("");
      return (
        <SelectBox
          label="Select symptoms"
          options={ColdsandFlu}
          arrowIconColor="#05386B"
          toggleIconColor="#05386B"
          searchIconColor="#05386B"
          value={selectedColdsandFlu}
          onChange={(val) => setselectedColdsandFlu(val)}
          hideInputFilter={false}
          // selectedValues={selectedColdsandFlu}
          // onMultiSelect={coldsandFlu()}
          // onTapClose={coldsandFlu()}
          // onChange={(val) => SetTypes1(val)}
          // isMulti
        />
      );
    } else if (val == "Stomach Aches") {
      // setselectedAllergiesTypes("");
      // setselectedColdsandFlu("");
      // setselectedHeadachesType("");
      return (
        <SelectBox
          label="Select symptoms"
          options={StomachAches}
          arrowIconColor="#05386B"
          toggleIconColor="#05386B"
          searchIconColor="#05386B"
          value={selectedStomachAches}
          onChange={(val) => setSelectedStomachAches(val)}
          hideInputFilter={false}
          // selectedValues={selectedStomachAches}
          // onMultiSelect={stomachAches()}
          // onTapClose={stomachAches()}
          // isMulti
        />
      );
    } else {
    }
  }
  function coldsandFlu() {
    //SetTypes1(item);
    return (item) => {
      //SetTypes1(xorBy(selectedColdsandFlu, item));
      setselectedColdsandFlu(xorBy(selectedColdsandFlu, [item]));
    };
  }
  function stomachAches() {
    return (item) =>
      setSelectedStomachAches(xorBy(selectedStomachAches, [item], "id"));
  }
};
const styles = StyleSheet.create({
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

export default Perscription;
