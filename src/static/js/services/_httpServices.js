// import axios from "axios";

// const BaseUrl = "http://localhost:8000/";
// // const BaseUrl = "https://www.mindwaves.live/";

// const getConfig = (method, url, params, body, token) => ({
//     method,
//     url: BaseUrl + url,
//     data: body,
//     params,
//     headers: {
//         "Accept": "application/json",
//         "Authorization": `Bearer ${token}`,
//     },
// });

// const HttpCall = async (url, method, params, body) => {
//     try {
//           const token = localStorage.getItem('token');
//           axios.get('https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate', {
//           headers: { Authorization: `Bearer ${token}` }
// });
//         const response = await axios(getConfig(method, url, params, body, token));
//         return response;
//     } catch (error) {
//         console.error("API call error:", error);
//         throw error;
//     }
// };

// const HttpGet = async (url, params) => {
//     try {
//         const token = localStorage.getItem('token');
//         const response = await axios(getConfig("get", url, params, null, token));
//         return response;
//     } catch (error) {
//         console.error("API call error:", error);
//         throw error;
//     }
// };

// export default {
//     HttpCall,
//     HttpGet
// };

import axios from "axios";

const BaseUrl = "http://localhost:8000/";
// const BaseUrl = "https://www.mindwaves.live/";

const getConfig = (method, url, params, body, token) => ({
    method,
    url: BaseUrl + url,
    data: body,
    params,
    headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`,
    },
});

const HttpCall = async (url, method, params, body) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios(getConfig(method, url, params, body, token));
        return response;
    } catch (error) {
        console.error("API call error:", error);
        throw error;
    }
};

const HttpGet = async (url, params) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios(getConfig("get", url, params, null, token));
        return response;
    } catch (error) {
        console.error("API call error:", error);
        throw error;
    }
};

const Api = {
    HttpCall,
    HttpGet
};

export default Api;
