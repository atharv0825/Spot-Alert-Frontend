import { StyleSheet, View } from 'react-native';
import Map from '../../components/Map/Map';

const MapScreen = () => {
  return (
    <View style={styles.container}> {/* ❗ FIX: container must have flex: 1 */}
      <Map />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, // ❗ REQUIRED so Map gets height
  },
});
