import apiAxios from "../axios/apiAxios";

export const getAllProducts = () => apiAxios.get("products")

export const signIn = (formData) => apiAxios.post("users/signIn",formData);
export const signUp = (formData) => apiAxios.post("users/signUp",formData);
