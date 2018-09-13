

const initialState = {
    cart: [],
    totalCost: 0,
    products: [],
    quantity: []
}

const UPDATE_CART = "UPDATE_CART"
const REMOVE_FROM_CART = "REMOVE_FROM_CART"
// const CHECKOUT = "CHECKOUT"


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_CART:
            return { ...state, cart: action.payload }
        //need to do a spread operator
        case REMOVE_FROM_CART:
            let index = state.cart.indexOf(action.payload);
            state.cart.splice(index, 1);
            return { ...state, cart: [...state.cart] };
        // case CHECKOUT:
        //     return {}

        default: return state;
    }
}

export function updateCart(cart) {
    return {
        type: UPDATE_CART,
        payload: cart

    }
}

export function removeFromCart(product_id) {
    // console.log(product_id)
    return {
        type: REMOVE_FROM_CART,
        payload: product_id
    }
}


