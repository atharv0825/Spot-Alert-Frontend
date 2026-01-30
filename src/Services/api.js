import BASE_URL from '../Config/baseURL';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const addHazard = async (hazardData) => {
    try {
        const token = await AsyncStorage.getItem("token");
        if (!token) {
            throw new Error("Authentication token not found");
        }

        const response = await fetch(`${BASE_URL}api/user/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(hazardData),
        });

        console.log('Response:', response);
        if (!response.ok) {
            const errorBody = await response.text();
            console.error('Error response body:', errorBody);
            throw new Error('Failed to add hazard');
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error adding hazard:', error);
        throw error;
    }
};
