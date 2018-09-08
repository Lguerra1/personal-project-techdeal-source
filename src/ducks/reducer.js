// import axios from 'axios';


const initialState = {
    cart: [],
    totalCost: 0,
    products: [],
    quantity: []
}

const ADD_TO_CART = "ADD_TO_CART"
const REMOVE_FROM_CART = "REMOVE_FROM_CART"
// const CHECKOUT = "CHECKOUT"
const INCREASE_QUANTITY = "INCREASE_QUANTITY"

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, cart: [...state.cart,  action.payload] }
        //need to do a spread operator
        case REMOVE_FROM_CART:
            let index = state.cart.indexOf(action.payload);
            state.cart.splice(index, 1);
            return { ...state, cart: [...state.cart] };
        case INCREASE_QUANTITY:
            return { ...state, cart: [...state.cart, action.payload] };
        // case CHECKOUT:
        //     return {}

        default: return state;
    }
}

export function addToCart(product_id) {
    return {
        type: ADD_TO_CART,
        // payload: axios.post(`/api/add_to_cart`).then(res => {
        //     res.data}),
        payload: product_id

    }
}

export function removeFromCart(product_id) {
    // console.log(product_id)
    return {
        type: REMOVE_FROM_CART,
        // payload: axios.delete(`/api/delete_item`).then(res => {
        //     res.data
        // }),
        payload: product_id
    }
}

export function increaseQuantity(product_id) {
    return {
        type: INCREASE_QUANTITY,
        payload: product_id
    }
}

// export function checkout(totalCost) {
//     return {
//         type: CHECKOUT,
//         payload: totalCost
//     }
// }






