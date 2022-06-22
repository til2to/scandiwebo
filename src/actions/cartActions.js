import { ADD_TO_CART, ADD_COUNT, SUB_COUNT } from '../Types';


export const addToCart = (currentProduct) => ({
    type: ADD_TO_CART,
    payload: currentProduct
});

export const addCount = (currentProduct) => ({
    type: ADD_COUNT,
    payload: currentProduct
});

export const subCount = (currentProduct) => ({
    type: SUB_COUNT,
    payload: currentProduct
});
