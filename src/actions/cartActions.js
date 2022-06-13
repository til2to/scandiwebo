import { ADD_TO_CART } from '../Types';


export const addToCart = (currentProduct) => ({
    type: ADD_TO_CART,
    payload: currentProduct
});
