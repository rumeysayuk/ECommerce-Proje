import * as actionTypes from "../constants/actionTypes"
import * as api from "../api/index"

export const signIn = (formData,router)=> async(dispatch)=> {
const response=await api.signIn(formData);
}
export const signUp = (formData,router) =>  async(dispatch)=>{
    const response=await api.signUp(formData);
}
