import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import Mapbox from '@rnmapbox/maps';
import { ThemeContext } from '../../theme/ThemeContext';

import '../../Config/MapBox';

const Map = () => {
  const theme = useContext(ThemeContext);

  const mapStyle =
    theme.background === '#000000'
      ? Mapbox.StyleURL.Dark
      : Mapbox.StyleURL.Street;

  useEffect(() => {
    const requestPermission = async () => {
      if (Platform.OS === 'android') {
        await Mapbox.requestAndroidLocationPermissions();
      }
    };

    requestPermission();
  }, []);

  return (
    <View style={styles.container}>
      <Mapbox.MapView
        style={styles.map}
        styleURL={mapStyle}
        compassPosition={{ top: 80, right: 20 }}
        logoEnabled={false}
        pitchEnabled={false}   
        rotateEnabled={false}
      >
        {/* ✅ UPDATED CAMERA: follow user */}
        <Mapbox.Camera
          followUserLocation={true}   // ✅ follows user
          followZoomLevel={16}
          pitch={0}
          heading={0}
        />

        {/* ✅ ADDED: User Location (Blue Dot) */}
        <Mapbox.LocationPuck
          visible={true}
          pulsing={{ isEnabled: true }}
        />

        {/* 3D Buildings Layer (will stay flat at pitch 0) */}
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
      </Mapbox.MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});
