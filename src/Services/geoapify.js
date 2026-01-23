import { GEOAPIFY_API_KEY } from '../Config/Geoapify';

const AUTOCOMPLETE_BASE_URL = 'https://api.geoapify.com/v1/geocode/autocomplete';
const ROUTING_BASE_URL = 'https://api.geoapify.com/v1/routing';

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
    const params = new URLSearchParams({
      waypoints: `${userLocation.latitude},${userLocation.longitude}|${destinationLocation.latitude},${destinationLocation.longitude}`,
      mode: 'drive',
      apiKey: GEOAPIFY_API_KEY,
    });

    const response = await fetch(`${ROUTING_BASE_URL}?${params.toString()}`);
    const data = await response.json();

    if (data && data.features && data.features.length > 0) {
      return data.features[0].geometry;
    }
    return null;
  } catch (error) {
    console.error('Geoapify routing error:', error);
    return null;
  }
};
