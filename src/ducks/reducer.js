// import axios from 'axios';

const initialState = {
    cart: [],
    totalCost: 0,
    products: [],


}

const ADD_TO_CART = "ADD_TO_CART"

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
        let {product, price } = action.payload
            return Object.assign({}, state, { 
                cart: [...state.cart, product ], 
                totalCost: state.totalCost += price 
            });
        default: return state;
    }
}

export function addToCart(product, price) {
    return {
        type: ADD_TO_CART,
        payload: { product, price }
        // payload: axios.delete(`${URL.cart}?id=${id}`).then(response => response.data)
    }
}