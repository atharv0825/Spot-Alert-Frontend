import React from 'react';
import { View, StyleSheet } from 'react-native';
import Mapbox from '@rnmapbox/maps';

// IMPORTANT: initialize Mapbox once
import '../../Config/MapBox';

const Map = () => {
  return (
    <View style={styles.container}>
      <Mapbox.MapView
        style={styles.map}
        styleURL={Mapbox.StyleURL.Street}
        attributionEnabled={false}
      >
        <Mapbox.Camera
          zoomLevel={14}
          centerCoordinate={[77.5946, 12.9716]} // Bengaluru
        />
      </Mapbox.MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
