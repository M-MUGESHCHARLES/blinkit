import { GETLocationApi, GETUserDataApi, POSTUserLoginApi, POSTUserSignUpApi, ProductsDataApi, SearchedProductsApi, UpdateCartApi, UpdateWishListApi } from "./api-interface";

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

export const SearchedProducts = (query) => {
    return SearchedProductsApi(`/products?search=${encodeURIComponent(query)}`);
};

export const UserData = (UserID) => {
    return GETUserDataApi(`/api/user/${UserID}`);
};

export const UpdateWishList = (data) => {
    return UpdateWishListApi(`/api/wishlist`, data);
};