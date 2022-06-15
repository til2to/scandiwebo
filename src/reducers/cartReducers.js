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
            // console.log(action.payload)

            // let cart = Array.from(state.cart)
            // for(let i=0; i<cart.length; i++){
            //     if(cart[i] == action.payload){
            //         cart[i].count += 1
            //     }
            //     else{
            //         cart.push({...action.payload, count: 1})
            //     }
            //     }
            return { 
                ...state,
                cart: [...state.cart, action.payload]
                // cart: [...cart]  
            };
            
        default:
            return state;
    }
}