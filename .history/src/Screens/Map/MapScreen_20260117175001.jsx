import { StyleSheet, View } from 'react-native';
import Map from '../../components/Map/Map';

const MapScreen = () => {
  return (
    <View style={styles.container}> 
      <Map />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});
