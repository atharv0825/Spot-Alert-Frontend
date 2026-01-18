import { StyleSheet, View } from 'react-native';
import Map from '../../components/Map/Map';
import Searchbar from '../../components/Searchbar/Searchbar'
const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Map />
      <Searchbar style={styles.wrapper} />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapper: {
    position: "absolute",   // REQUIRED
    top: 50,
    width: "100%",
    alignItems: "center",
    zIndex: 10,             // REQUIRED (Android)
    elevation: 10,          // REQUIRED (Android)
  },

});
