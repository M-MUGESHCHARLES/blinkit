import axios from "axios";

export const LocationApi = (path) => {
    return axios.get(path);
};