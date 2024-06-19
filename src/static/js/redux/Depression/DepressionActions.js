import axios from 'axios';

export const submitDepressionAnswers = (answers) => async (dispatch) => {
    try {
        const response = await axios.post('/api/depression/submit', { answers });
        dispatch({ type: 'SUBMIT_DEPRESSION_ANSWERS_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'SUBMIT_DEPRESSION_ANSWERS_FAILURE', payload: error });
    }
};