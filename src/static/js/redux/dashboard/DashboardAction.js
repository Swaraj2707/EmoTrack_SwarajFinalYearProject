// import http from '../../services/_httpServices';
// import actionTypes from './DashboardActionTypes';
// import { updateBarLoading } from '../Actions';
// import axios from "axios";

// export const getGoogleFitData = (body, action) => {
//     return async (dispatch) => {
//         const authCode = localStorage.getItem('authCode');
//         try {
//             const response = await axios.post("https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate", body, {
//                 headers: {
//                     "Authorization": `Bearer ${authCode}`,
//                     "Content-Type": "application/json"
//                 }
//             });
//             dispatch(get_google_fit_data(response.data.bucket, action));
//         } catch (error) {
//             console.error("ERROR: ", error);
//         } finally {
//             dispatch(updateBarLoading(false));
//         }
//     };
// };

// export const getWeeklyData = (url, params) => {
//     return async (dispatch) => {
//         try {
//             const response = await http.HttpGet(url, params);
//             if (response.data.status === 200) {
//                 dispatch(get_weekly_data(response.data.data));
//             }
//         } catch (error) {
//             console.error("Error: ", error);
//         }
//     };
// };

// export const getMonthlyData = (url, params) => {
//     return async (dispatch) => {
//         try {
//             const response = await http.HttpGet(url, params);
//             if (response.data.status === 200) {
//                 dispatch(get_monthly_data(response.data.data));
//             }
//         } catch (error) {
//             console.error("Error: ", error);
//         }
//     };
// };

// const get_google_fit_data = (data, action) => ({
//     type: action,
//     payload: data
// });

// const get_weekly_data = (data) => ({
//     type: actionTypes.GET_WEEKLY_DATA,
//     payload: data
// });

// const get_monthly_data = (data) => ({
//     type: actionTypes.GET_MONTHLY_DATA,
//     payload: data
// });

import http from '../../services/_httpServices';
import actionTypes from './DashboardActionTypes';
import {
    updateBarLoading
} from '../Actions';
import axios from "axios";

export const getGoogleFitData = (body, action) => {
    return (dispatch) => {
        const authCode = localStorage.getItem('authCode');
        axios.post("https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate", body, {
                headers: {
                    "Authorization": `Bearer ${authCode}`,
                }
            })
            .then((response) => {
                    dispatch(get_google_fit_data(response.data.bucket, action))
                    dispatch(updateBarLoading(false));
                },
                (error) => {
                    dispatch(updateBarLoading(false));
                    console.log("ERROR: ", error);
                });
    }
}

export const getWeeklyData = (url, params) => {
    return (dispatch) => {
        http.HttpGet(url, params)
            .then((response) => {
                if (response.data.status === 200) {
                    dispatch(get_weekly_data(response.data.data))
                }
            })
            .catch((error) => {
                console.log("Error: ", error);
            })
    }
}

export const getMonthlyData = (url, params) => {
    return (dispatch) => {
        http.HttpGet(url, params)
            .then((response) => {
                if (response.data.status === 200) {
                    dispatch(get_monthly_data(response.data.data))
                }
            })
            .catch((error) => {
                console.log("Error: ", error);
            })
    }
}

const get_google_fit_data = (data, action) => {
    return {
        type: action,
        payload: data
    }
}

const get_weekly_data = (data) => {
    return {
        type: actionTypes.GET_WEEKLY_DATA,
        payload: data
    }
}

const get_monthly_data = (data) => {
    return {
        type: actionTypes.GET_MONTHLY_DATA,
        payload: data
    }
}

