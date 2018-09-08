import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart, increaseQuantity } from '../../ducks/reducer';
import './Cart.css';


// connect cart to redux
// bring in redux cart to cart component
// map over the redux cart and display


class Cart extends Component {


    render() {


        let mappedCart = this.props.cart.map((cartItem, i) => {
            return (
                <div key={i}>
                    <h4>Description: {cartItem.description} </h4>
                    <h4> Price: {cartItem.price}</h4>
                    <img height='100px' width='100px' src={cartItem.image_url} alt='' />
                    <div></div>
                    <button className='removeButton' onClick={() => this.props.removeFromCart(cartItem)}>-</button>
                    <button className='add' onClick={() => this.props.increaseQuantity(cartItem) } >+</button>
                                      
                </div>
            )
        })
        return (
            <div>
                <h1>Cart</h1>
                

                    <section>
                        <div className='flexMonitors'>
                            <div className='cartContainer'>
                                {mappedCart}
                            </div>
                        </div>
                    </section>
                
            </div>

        )
    }
}

function mapStateToProps(state) {
    const {cart} = state
    return {
        cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: item => dispatch(removeFromCart(item)),
        increaseQuantity: item => dispatch(increaseQuantity(item))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);