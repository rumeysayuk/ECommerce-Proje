import * as actionTypes from "../constants/actionTypes";

export default (products = [], action) => {
   switch (action.type) {
      case actionTypes.GET_ALL:
         return action.payload

      default:
         return products;
   }
}
