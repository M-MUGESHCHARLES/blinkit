import { GETLocationApi } from "./api-interface";

const NetworkLocationApiPath = `http://ip-api.com/json/`;

export const GetUserLocation = () => {
    return GETLocationApi(NetworkLocationApiPath);
};