import * as api from "../api";
import * as actionTypes from "../constants/actionTypes";

export const getAllProducts = () => async (dispatch) => {
   const response = await api.getAllProducts();
   dispatch({type: actionTypes.GET_ALL, payload: response.data.products});
}
