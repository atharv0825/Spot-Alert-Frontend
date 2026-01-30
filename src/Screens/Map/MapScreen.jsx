import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import Map from "../../components/Map/Map";
import Searchbar from "../../components/Searchbar/Searchbar";
import { getRoute } from "../../Services/geoapify";

const MapScreen = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [route, setRoute] = useState(null);
  const [hazards, setHazards] = useState([]);
  const [isNavigation, setIsNavigation] = useState(false);

  const handleLocationUpdate = (location) => {
    setUserLocation(location);
  };

  const handlePlaceSelect = async (location) => {
    setSelectedLocation(location);
    if (userLocation) {
      const routeData = await getRoute(userLocation, location);
      if (routeData) {
        setRoute(routeData.route);
        setHazards(routeData.hazards);
      } else {
        console.log("Could not retrieve route. Server might be down or no route found.");
      }
    }
  };

  const handleStartRide = () => {
    setIsNavigation(true);
  };

  return (
    <View style={styles.container}>
      <Map
        onLocationUpdate={handleLocationUpdate}
        selectedLocation={selectedLocation}
        route={route}
        hazards={hazards}
        isNavigation={isNavigation}
      />
      {!isNavigation && (
        <Searchbar
          userLocation={userLocation}
          onPlaceSelect={handlePlaceSelect}
        />
      )}
      {route && !isNavigation && (
        <TouchableOpacity style={styles.startButton} onPress={handleStartRide}>
          <Text style={styles.startButtonText}>Start Ride</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  startButton: {
    position: "absolute",
    bottom: 30,
    left: "50%",
    marginLeft: -50,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  startButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
