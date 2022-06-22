import { ADD_TO_CART, ADD_COUNT, SUB_COUNT } from '../Types';


const initialState = {
    cart: [],
    quantity: 0,
    total: 0
};

export const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TO_CART:
            state.quantity += 1
            // state.cart.push(action.payload);

            state.total += (action.payload.prices[0].amount * state.cart.quantity);

            // let cart = state.cart.slice();
            // const currentProduct = action.payload
            // let alreadyInCart = false;
            // cart.forEach((item) => {
            //   if (item.id === currentProduct.id) {
            //     item.count+=1
            //     alreadyInCart = true;
            //   }
            // });
            // if (!alreadyInCart) {
            //   cart.push({ ...currentProduct, count: 1 });
            // }

            // }

            // let cart = Array.from(state.cart)
            // for (let i = 0; i < cart.length; i++) {
            //     if (cart[i] == action.payload) {
            //         cart[i].count += 1
            //     }
            //     else {
            //         cart.push({ ...action.payload, count: 1 })
            //     }
            // }

            return {
                ...state, 
                cart: [...state.cart, action.payload]
            };
        // case ADD_COUNT:
        //     let cart = Array.from(state.cart)
        //     for (let i = 0; i < cart.length; i++) {
        //         if (cart[i] == action.payload) {
        //             cart[i].count += 1
        //         }
        //         else {
        //             cart.push({ ...action.payload, count: 1 })
        //         }
        //         console.log('one')
        //     }

        // case SUB_COUNT:
        //     let cartI = Array.from(state.cart)
        //     for (let i = 0; i < cart.length; i++) {
        //         if (cartI[i] == action.payload) {
        //             cartI[i].count > 1 && cart[i].count --
        //         }
        //     }

        default:
            return state;
    }
    // localStorage.setItem("cart", JSON.stringify(cart));
}