import { GETLocationApi, POSTUserLoginApi, POSTUserSignUpApi, ProductsDataApi, SearchedProductsApi, UpdateCartApi } from "./api-interface";

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

export const UpdateCart = (data) => {
    return UpdateCartApi(`/update-cart`, data);
};

export const ProductsData = () => {
    return ProductsDataApi(`/allproducts`);
};

export const SearchedProducts = (querry) => {
    return SearchedProductsApi(`/products?search=${encodeURIComponent(querry)}`);
};