const API_BASE_URL = 'BACKEND URL API';

export const addHazard = async (hazardData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(hazardData),
        });

        if (!response.ok) {
            throw new Error('Failed to add hazard');
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error adding hazard:', error);
        throw error;
    }
};
