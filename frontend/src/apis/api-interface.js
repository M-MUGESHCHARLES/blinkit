import axios from "axios";

export const GETLocationApi = (path) => {
    return axios.get(path);
};