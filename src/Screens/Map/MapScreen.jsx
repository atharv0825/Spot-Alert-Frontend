import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Map from "../../components/Map/Map";
import Searchbar from "../../components/Searchbar/Searchbar";

const MapScreen = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationUpdate = (location) => {
    setUserLocation(location);
  };

  const handlePlaceSelect = (location) => {
    setSelectedLocation(location);
  };

  return (
    <View style={styles.container}>
      <Map
        onLocationUpdate={handleLocationUpdate}
        selectedLocation={selectedLocation}
      />
      <Searchbar
        userLocation={userLocation}
        onPlaceSelect={handlePlaceSelect}
      />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
