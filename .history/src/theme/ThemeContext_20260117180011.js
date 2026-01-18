import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import Mapbox from '@rnmapbox/maps';
import { ThemeContext } from '../../theme/ThemeContext';

// IMPORTANT: initialize Mapbox once
import '../../Config/MapBox';

const Map = () => {
  const theme = useContext(ThemeContext);

  // ✅ Decide map style based on current theme
  const mapStyle =
    theme.background === '#000000'
      ? Mapbox.StyleURL.Dark
      : Mapbox.StyleURL.Street;

  return (
    <View style={styles.container}>
      <Mapbox.MapView
        style={styles.map}
        styleURL={mapStyle}        // ✅ THEME-AWARE MAP
        compassPosition={{ top: 80, right: 20 }}
        logoEnabled={false}
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
  container: { flex: 1 },
  map: { flex: 1 },
});
