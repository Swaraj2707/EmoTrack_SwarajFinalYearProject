import action from "../Depression/DepressionActions.js";

const initialState = {
    answers: {},
    loading: false,
    error: null,
};

const depressionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SUBMIT_DEPRESSION_ANSWERS_SUCCESS':
            return {
                ...state,
                answers: action.payload,
                loading: false,
                error: null,
            };
        case 'SUBMIT_DEPRESSION_ANSWERS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default depressionReducer;
