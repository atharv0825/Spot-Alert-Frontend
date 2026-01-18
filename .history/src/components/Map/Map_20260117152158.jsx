import { Text, View , StyleSheet } from 'react-native'
import Mapbox from '@rnmapbox/maps'

import  '../../Config/MapBox'

export class Map  {
  render() {
    return (
      <View style={styles.container}>
      <Mapbox.MapView
        style={styles.map}
        styleURL={Mapbox.StyleURL.Street}
      >
        <Mapbox.Camera
          zoomLevel={14}
          centerCoordinate={[77.5946, 12.9716]} // Bengaluru (example)
        />
      </Mapbox.MapView>
    </View>
    )
  }
}

export default Map
