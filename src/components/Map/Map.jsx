import React, { useContext, useEffect, useRef } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import Mapbox from '@rnmapbox/maps';
import { ThemeContext } from '../../theme/ThemeContext';

import '../../Config/MapBox';

const Map = ({ onLocationUpdate, selectedLocation, route, isNavigation }) => {
  const theme = useContext(ThemeContext);
  const cameraRef = useRef(null);

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

  useEffect(() => {
    if (selectedLocation && cameraRef.current && !isNavigation) {
      cameraRef.current.flyTo(
        [selectedLocation.longitude, selectedLocation.latitude],
        10000
      );
    }
  }, [selectedLocation, isNavigation]);

  return (
    <View style={styles.container}>
      <Mapbox.MapView
        style={styles.map}
        styleURL={mapStyle}
        compassPosition={{ top: 80, right: 20 }}
        logoEnabled={false}
        pitchEnabled={isNavigation}
        rotateEnabled={isNavigation}
      >
        <Mapbox.UserLocation
          visible={false}
          onUpdate={(location) => {
            if (location && location.coords && onLocationUpdate) {
              onLocationUpdate(location.coords);
            }
          }}
        />

        <Mapbox.Camera
          ref={cameraRef}
          followUserLocation={isNavigation || !selectedLocation}
          followZoomLevel={isNavigation ? 18 : 16}
          followPitch={isNavigation ? 60 : 40}
          pitch={isNavigation ? 60 : 40}
          heading={0}
        />

        <Mapbox.LocationPuck
          visible={true}
          pulsing={{ isEnabled: true }}
        />

        {selectedLocation && (
          <Mapbox.PointAnnotation
            id="selectedLocation"
            coordinate={[
              selectedLocation.longitude,
              selectedLocation.latitude,
            ]}
          />
        )}

        {route && (
          <Mapbox.ShapeSource id="routeSource" shape={{ type: 'Feature', geometry: route }}>
            <Mapbox.LineLayer
              id="routeLine"
              style={{
                lineColor: '#007AFF',
                lineWidth: 4,
                lineOpacity: 0.8,
              }}
            />
          </Mapbox.ShapeSource>
        )}

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
