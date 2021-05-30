import {GET_ALL} from "../constants/actionTypes";


export default (products = [], action) => {
    switch (action.type) {
        case GET_ALL :
            return action.payload
        default:
            return products
    }

}
