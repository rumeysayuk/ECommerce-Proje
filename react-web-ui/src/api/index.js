import apiAxios from "../axios/apiAxios";

export const getAllProducts = () => apiAxios.get("products")

export const signIn = (formData) => apiAxios.post("users/signin", formData);
export const signUp = (formData) => apiAxios.post("users/signup", formData);
export const addToCart = (cartItem) => apiAxios.post("users/addtocart", cartItem);
