import * as actionTypes from "../constants/actionTypes";
import * as api from "../api/index.js";

//ES6+ - Babel
export const signIn = (formData, router) => async (dispatch) => {
  const { data } = await api.signIn(formData);
  dispatch({ type: actionTypes.AUTH, data });
};

export const signUp = (formData, router) => async (dispatch) => {
  const { data } = await api.signUp(formData);
  dispatch({ type: actionTypes.AUTH, data });
};
