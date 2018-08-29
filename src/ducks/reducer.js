import axios from 'axios';

const initialState = {
    cart: [],
    totalCost: 0,
    products: [],

}

const ADD_TO_CART = "ADD_TO_CART"

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return Object.assign({}, state, { cart: action.payload })
        default: return state;
    }
}

export function addToCart(product_id) {
    return {
       
        type: ADD_TO_CART,
        payload: { product_id }

    }
}