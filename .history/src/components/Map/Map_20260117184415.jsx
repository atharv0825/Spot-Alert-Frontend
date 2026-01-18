import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import Mapbox from '@rnmapbox/maps';
import { ThemeContext } from '../../theme/ThemeContext';

import '../../Config/MapBox';

const Map = () => {
  const theme = useContext(ThemeContext);
  const [styleLoaded, setStyleLoaded] = useState(false); // ✅ ADDED

  const mapStyle =
    theme.background === '#000000'
      ? Mapbox.StyleURL.Dark
      : Mapbox.StyleURL.Street;

  useEffect(() => {
    if (Platform.OS === 'android') {
      Mapbox.requestAndroidLocationPermissions();
    }
  }, []);

  return (
    <View style={styles.container}>
      <Mapbox.MapView
        style={styles.map}
        styleURL={mapStyle}
        compassPosition={{ top: 80, right: 20 }}
        logoEnabled={false}
        pitchEnabled={false}        // 🔒 forces flat map
        rotateEnabled={false}
        onDidFinishLoadingStyle={() => setStyleLoaded(true)} // ✅ REQUIRED
      >
        <Mapbox.Camera
          followUserLocation={true}
          followZoomLevel={16}
          pitch={0}                 // ❗ keeps 90° top-down
          heading={0}
        />

        <Mapbox.LocationPuck
          visible
          pulsing={{ isEnabled: true }}
        />

        {/* ✅ ONLY ADD AFTER STYLE LOAD */}
        {styleLoaded && (
          <Mapbox.FillExtrusionLayer
            id="3d-buildings"
            sourceID="composite"
            sourceLayerID="building"
            minZoomLevel={15}
            style={{
              fillExtrusionColor:
                theme.background === '#000000' ? '#AAAAAA' : '#CCCCCC',
              fillExtrusionHeight: ['get', 'height'],
              fillExtrusionBase: ['get', 'min_height'],
              fillExtrusionOpacity: 0.9,
            }}
          />
        )}
      </Mapbox.MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});
