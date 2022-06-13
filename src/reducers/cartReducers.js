import { ADD_TO_CART } from '../Types';
// import { initialState } from '../store';


const initialState = {cart: []};
export const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TO_CART:
            // let cartItems = state.cart.slice();
            // const currentProduct = action.payload.product
            // let alreadyInCart = false;
            // cartItems.forEach((item) => {
            //   if (item.id === currentProduct.id) {
            //     item.count+=1
            //     alreadyInCart = true;
            //   }
            // });
            // if (!alreadyInCart) {
            //   cartItems.push({ ...currentProduct, count: 1 });
            // }
            
            // }
            console.log(action.payload)
            return { 
                ...state,
                cart: [...state.cart, action.payload]  

            };
            
        default:
            return state;
    }
}