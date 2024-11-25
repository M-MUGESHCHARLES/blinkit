import { GETLocationApi, POSTUserLoginApi, POSTUserSignUpApi } from "./api-interface";

const NetworkLocationApiPath = `http://ip-api.com/json/`;

export const GetUserLocation = () => {
    return GETLocationApi(NetworkLocationApiPath);
};

export const UserSignUp = (data) => {
    return POSTUserSignUpApi(`/signup`, data);
};

export const UserLogin = (data) => {
    return POSTUserLoginApi(`/login`, data);
};

