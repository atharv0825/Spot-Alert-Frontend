import { StyleSheet, View } from "react-native";
import Map from "../../components/Map/Map";
import Searchbar from "../../components/Searchbar/Searchbar";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Map />
      <Searchbar />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
