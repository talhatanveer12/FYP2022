import React, { useState } from "react";
import {
  SafeAreaView,
  Dimensions,
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import * as Animatable from 'react-native-animatable';
import { COLOR } from "../constants/theme";
//For Fake Data

import faker from "faker";

faker.seed(10);

const AVATAR = `https://randomuser.me/api/portraits/${faker.helpers.randomize([
  "women",
  "men",
])}/${faker.random.number(60)}.jpg`;
const NAME = faker.name.findName();
const JOBTITLE = faker.name.jobTitle();
const EMAIL = faker.internet.email();
//
const SPACING = 20;
const AVATAR_SIZE = 150;

const App = () => {
  const [defaultRatingCommunication, setdefaultRatingCommunication] = useState(0);
  const [maxRatingCommunication, setmaxRatingCommunication] = useState([1, 2, 3, 4, 5]);
  const [defaultRatingBehavior, setdefaultRatingBehavior] = useState(0);
  const [maxRatingBehavior, setmaxRatingBehavior] = useState([1, 2, 3, 4, 5]);
  const [defaultRatingEfficiency, setdefaultRatingEfficiency] = useState(0);
  const [maxRatingEfficiency, setmaxRatingEfficiency] = useState([1, 2, 3, 4, 5]);
  const starImgFilled =
    "https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/star.png";
  const starImgCorner =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/1024px-Empty_Star.svg.png";

  const Shaded_BG = () => {
    return (
      <View>
        <View >
          <Text style={styles.textStyle}> Give Me Rating </Text>
          <Text style={styles.text}> Communication </Text>
          <View style={styles.CustomRatingBarStyle}>
            {maxRatingCommunication.map((item1, key1) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  key1={item1}
                  onPress={() => setdefaultRatingCommunication(item1)}
                >
                  <Image
                    style={styles.starImgStyle}
                    source={
                      item1 <= defaultRatingCommunication
                        ? { uri: starImgFilled }
                        : { uri: starImgCorner }
                    }
                  />
                </TouchableOpacity>
              );
            })}
          </View>
          <Text style={styles.textStyle}>
            {defaultRatingCommunication + " / " + maxRatingCommunication.length}
          </Text>

          <Text style={styles.text}> Behavior </Text>
          <View style={styles.CustomRatingBarStyle}>
            {maxRatingBehavior.map((item2, key2) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  key2={item2}
                  onPress={() => setdefaultRatingBehavior(item2)}
                >
                  <Image
                    style={styles.starImgStyle}
                    source={
                      item2 <= defaultRatingBehavior
                        ? { uri: starImgFilled }
                        : { uri: starImgCorner }
                    }
                  />
                </TouchableOpacity>
              );
            })}
          </View>
          <Text style={styles.textStyle}>
            {defaultRatingBehavior + " / " + maxRatingBehavior.length}
          </Text>


          <Text style={styles.text}> Efficiency </Text>
          <View style={styles.CustomRatingBarStyle}>
            {maxRatingEfficiency.map((item, key) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  key={item}
                  onPress={() => setdefaultRatingEfficiency(item)}
                >
                  <Image
                    style={styles.starImgStyle}
                    source={
                      item <= defaultRatingEfficiency
                        ? { uri: starImgFilled }
                        : { uri: starImgCorner }
                    }
                  />
                </TouchableOpacity>
              );
            })}
          </View>
          <Text style={styles.textStyle}>
            {defaultRatingEfficiency + " / " + maxRatingEfficiency.length}
          </Text>

          <TouchableOpacity
            onPress={() => alert("You gave " + defaultRatingCommunication + " stars in Communication, " + defaultRatingBehavior + " stars in Behavior and  " + defaultRatingEfficiency + " stars in Efficiency to "  + NAME)}
            style={[
              styles.SignIn,
              { borderColor: COLOR.primary, borderWidth: 1, marginTop: 10 },
            ]}
          >
            <Text style={[styles.textSign, { color: COLOR.primary }]}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <Image source={{ uri: AVATAR }} style={styles.avatar} />
        <Text
          style={{
            fontSize: 22,
            fontWeight: "700",
            color: "#00008B",
            alignSelf: "center",
          }}
        >
          {NAME}
        </Text>
        <Text style={{ fontSize: 18, opacity: 0.7, alignSelf: "center" }}>
          {JOBTITLE}
        </Text>
        <Text
          style={{
            fontSize: 14,
            opacity: 0.8,
            alignSelf: "center",
          }}
        >
          {EMAIL}
        </Text>
      </View>
      {/* </View> */}
      <Animatable.View
      style={styles.footer}
      animation="fadeInUpBig"
      >
          <Shaded_BG />
        </Animatable.View>
    </View>
  );
};

const {height} = Dimensions.get("screen");
const avatar_logo = height * 0.13;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.primary,
},
header: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
},
footer: {
    flex: 6,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 30,
    //For Borders
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 50,
    marginHorizontal: 10
},
title: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 70
},
text: {
    color: 'grey',
    textAlign: 'center',
    marginTop: 15,
    justifyContent: 'center'
},
button: {
    alignItems: 'flex-end',
    marginTop: 280,
},
SignIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    margin: 65,
    flexDirection: 'row'
},
textSign: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold'
},
  textStyle: {
    textAlign: "center",
    fontSize: 25,
    marginTop: 1,
  },
  textStyleButton: {
    textAlign: "center",
    fontSize: 23,
  },
  CustomRatingBarStyle: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  starImgStyle: {
    width: 40,
    height: 40,
    resizeMode: "cover",
  },
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,
    margin: 50,
    padding: 15,
    backgroundColor: "#28C59B",
    borderRadius: 20,
  },
  shaded_BG: {
    width: 300,
    height: 300,
    backgroundColor: "white",
    borderRadius: 45,
    alignSelf: "center",
  },
  avatar: {
    marginTop: 40,
    width: avatar_logo,
    height: avatar_logo,
    // width: AVATAR_SIZE,
    // height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE,
    // marginBottom: 20,
    // alignSelf: "center",
  },
});

export default App;
