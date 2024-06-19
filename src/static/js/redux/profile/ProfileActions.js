/* eslint-disable import/no-anonymous-default-export */
// import http from "../../services/_httpServices";
// import actionTypes from './ProfileActionTypes';

// export const getProfile = (url, params) => {
//     return (dispatch) => {
//         http.HttpGet(url, params)
//             .then((response) => {
//                 if (response.data.status === 200) {
//                     dispatch(get_profile(response.data.data))
//                 }
//             })
//             .catch((error) => {
//                 console.log("Error: ", error);
//             })
//     }
// }

// export const editProfile = (url, body) => {
//     return (dispatch) => {
//         return new Promise((resolve, reject) => {
//             http.HttpCall(url, "post", {}, body)
//                 .then((response) => {
//                     if (response.data.status === 200) {
//                         dispatch(edit_profile(body))
//                         return resolve('');
//                     }
//                     return reject('');
//                 })
//                 .catch((error) => {
//                     console.log("Error: ", error);
//                     return reject(error);
//                 })
//         })
//     }
// }

// const get_profile = (data) => {
//     return {
//         type: actionTypes.GET_PROFILE,
//         payload: data
//     }
// }

// const edit_profile = (data) => {
//     return {
//         type: actionTypes.EDIT_PROFILE,
//         payload: data
//     }
// }

//updated on 26 may 24 

//ProfileActions.js
import actionTypes from './ProfileActionTypes';

export const getProfile = (email) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`/api/profile/user/${email}`);

            if (!response.ok) {
                throw new Error('Failed to fetch profile');
            }

            const data = await response.json();
            dispatch(get_profile(data));

            return data;
        } catch (error) {
            console.error('Error fetching profile:', error.message);
            // Handle error scenario
        }
    };
};

export const editProfile = (formData) => {
    return async (dispatch) => {
        try {
            const response = await fetch('/api/profile/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to update profile');
            }

            const data = await response.json();
            dispatch(edit_profile(data));

            return data;
        } catch (error) {
            console.error('Error updating profile:', error.message);
            // Handle error scenario
        }
    };
};

const get_profile = (data) => {
    return {
        type: actionTypes.GET_PROFILE,
        payload: data
    };
};

const edit_profile = (data) => {
    return {
        type: actionTypes.EDIT_PROFILE,
        payload: data
    };
};

export default {
    getProfile,
    editProfile
};


//updated on 27 may

// import axios from 'axios';
// import actionTypes from './ProfileActionTypes';
// axios.defaults.baseURL = 'http://localhost:8000/api';

// export const getProfile = (email) => {
//     return async (dispatch) => {
//         try {
//             const response = await axios.get(`http://localhost:8000/api/profile/user/${email}`);

//             dispatch(get_profile(response.data));

//             return response.data;
//         } catch (error) {
//             console.error('Error fetching profile:', error.message);
//             throw error;
//         }
//     };
// };

// export const editProfile = (formData) => {
//     return async (dispatch) => {
//         try {
//             const response = await axios.post('http://localhost:8000/api/profile/user', formData);

//             dispatch(edit_profile(response.data));

//             return response.data;
//         } catch (error) {
//             console.error('Error updating profile:', error.message);
//             throw error;
//         }
//     };
// };

// const get_profile = (data) => {
//     return {
//         type: actionTypes.GET_PROFILE,
//         payload: data
//     };
// };

// const edit_profile = (data) => {
//     return {
//         type: actionTypes.EDIT_PROFILE,
//         payload: data
//     };
// };

// export default {
//     getProfile,
//     editProfile
// };
