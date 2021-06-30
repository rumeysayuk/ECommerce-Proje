import * as api from '../api/index';
import * as actionTypes from '../constants/actionTypes';


export const addToCart = (cartItem) => async (dispatch) => {

   const { data: { message, cart: { items } } } = await api.addToCart(cartItem);

   dispatch({type: actionTypes.ADD_TO_CART, items })
}
