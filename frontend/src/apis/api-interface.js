import axios from "axios";

const API_Base_Url = `http://localhost:4200`;


export const GETLocationApi = (path) => {
    return axios.get(path);
};

export const POSTUserSignUpApi = (path, data) => {
    return axios.post(API_Base_Url + path, data);
};

export const POSTUserLoginApi = (path, data) => {
    return axios.post(API_Base_Url + path, data);
}