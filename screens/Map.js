//npm install expo-location
import React, { useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet } from "react-native";
import * as Location from "expo-location";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

export default function Map() {
  Latitude = 0;
  Longitude = 0;
  let subTitle = "";
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let Title = "Waiting..";
  if (errorMsg) {
    Title = errorMsg;
  } else if (location) {
    Title = "Current Location";
    subTitle = "You Are Here";
    Latitude = location.coords.latitude;
    Longitude = location.coords.longitude;
  }

  return (
    <View style={{ flex: 1 }}>
      <Text>{Title}</Text>
      <MapView
        style={styles.map}
        intialRegion={{
          latitude: Latitude,
          longitude: Longitude,
        }}
      >
        <Marker
          coordinate={{
            latitude: Latitude,
            longitude: Longitude,
          }}
          title={Title}
          description={subTitle}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
