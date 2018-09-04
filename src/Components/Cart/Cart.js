import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart} from '../../ducks/reducer';
import './Cart.css';

// connect cart to redux
// bring in redux cart to cart component
// map over the redux cart and display


class Cart extends Component {



    render() {
        let mappedCart = this.props.cart.map((cartItem, i) => {
            return (
                <div key={i}>
                    <h5>Descritpion: {cartItem.description} </h5>                    
                    <h5> Price: {cartItem.price}</h5>
                    <img height='50px' width='50px' src={cartItem.image_url} />
                    <div><button onClick={() => this.props.removeFromCart(cartItem)}>Remove Item</button></div>
                </div>
            )
        })
        return (
            <div>
                <h1>Shopping Cart</h1>
                <div className='flexCart'>
                    <div>{mappedCart}</div>            
                </div>

                <button>Checkout</button>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: item => dispatch(removeFromCart(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);