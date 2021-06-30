import * as actionTypes from "../constants/actionTypes";

const cartReducer = (state = { items: [] }, action) => {
   switch (action.type) {
      case actionTypes.ADD_TO_CART:

         return { ...state, items: action.items };

      case actionTypes.GET_CART:
         return state.items;

      default:
         return state;
   }
}

export default cartReducer;
