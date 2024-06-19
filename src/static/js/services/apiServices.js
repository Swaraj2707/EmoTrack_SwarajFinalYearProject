import axios from 'axios';

const API_URL = 'http://localhost:5000/predict';

const predictIllness = async (options) => {
    try {
        const response = await axios.post(API_URL, { options });
        return response.data;
    } catch (error) {
        console.error("Error making prediction:", error);
        throw error;
    }
};

export default predictIllness;
