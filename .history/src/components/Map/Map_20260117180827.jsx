import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import Mapbox from '@rnmapbox/maps';
import { ThemeContext } from '../../theme/ThemeContext';

import '../../Config/MapBox';

const Map = () => {
  const theme = useContext(ThemeContext);

  const mapStyle =
    theme.background === '#000000'
      ? Mapbox.StyleURL.Dark
      : Mapbox.StyleURL.Street;

  return (
    <View style={styles.container}>
      <Mapbox.MapView
        style={styles.map}
        styleURL={mapStyle}        
        compassPosition={{ top: 80, right: 20 }}
        logoEnabled={false}
      >
        <Mapbox.Camera
          zoomLevel={15}
          pitch={60}              
          heading={0}
          centerCoordinate={[77.5946, 12.9716]} // Bengaluru
        />

        {/* 3D Buildings Layer */}
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
