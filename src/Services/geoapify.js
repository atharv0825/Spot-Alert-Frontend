import { GEOAPIFY_API_KEY } from '../Config/Geoapify';
import BASE_URL from '../Config/baseURL';
import AsyncStorage from "@react-native-async-storage/async-storage";

const AUTOCOMPLETE_BASE_URL = 'https://api.geoapify.com/v1/geocode/autocomplete';

export const searchPlaces = async (text, userLocation = null) => {
  if (!text) return [];

  try {
    const params = new URLSearchParams({
      text: text,
      apiKey: GEOAPIFY_API_KEY,
      filter: 'countrycode:in',
      limit: '5',
    });

    if (userLocation && userLocation.longitude && userLocation.latitude) {
      params.append('bias', `proximity:${userLocation.longitude},${userLocation.latitude}`);
    }

    const response = await fetch(`${AUTOCOMPLETE_BASE_URL}?${params.toString()}`);
    const data = await response.json();

    if (data && data.features) {
      return data.features.map((feature) => ({
        id: feature.properties.place_id,
        name: feature.properties.formatted,
        lat: feature.properties.lat,
        lon: feature.properties.lon,
        ...feature.properties,
      }));
    }
    return [];
  } catch (error) {
    console.error('Geoapify search error:', error);
    return [];
  }
};

export const getRoute = async (userLocation, destinationLocation) => {
  if (!userLocation || !destinationLocation) return null;

  try {
    const token = await AsyncStorage.getItem("token");
    if (!token) {
        console.error("Routing error: No auth token found");
        return null;
    }
    const response = await fetch(`${BASE_URL}/api/user/route/optimal`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        sourceLat: userLocation.latitude,
        sourceLng: userLocation.longitude,
        destLat: destinationLocation.latitude,
        destLng: destinationLocation.longitude,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data && data.polyline) {
        const decoded_waypoints = [];

        for (const waypoint of data.polyline) {
            decoded_waypoints.push(waypoint);
        }
        return {
          route: {
            type: 'LineString',
            coordinates: decoded_waypoints.map(p => [p.longitude, p.latitude])
          },
          hazards: data.allHazardsOnRoute
        };
    }
    }
    return null;
  } catch (error) {
    console.error('Routing error:', error);
    return null;
  }
};

