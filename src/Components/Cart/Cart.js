import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCart } from '../../ducks/reducer';
import axios from 'axios';
import './Cart.css';


// connect cart to redux
// bring in redux cart to cart component
// map over the redux cart and display


class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            total: 0
        }
    };

    componentDidMount() {
        this.getTotal()
        this.getCart()
    }

    getTotal() {
        axios.get(`/api/get_total`).then(res => {
            console.log(res)
            this.setState({
                total: res.data[0].sum
            })
        })

    }

    getCart() {
        axios.get(`/api/get_cart`).then(res => {
            this.props.updateCart(res.data)
        })
    }


    removeFromCart(cartId) {
        axios.delete(`/api/remove_from_cart/${cartId}`).then(res => {

            this.props.updateCart(res.data)
        }).then(this.getTotal())
    }

    increaseQuantity(cartId, quantity) {
        axios.put(`/api/increase_quantity/${cartId}/${quantity}`).then(res => {
            console.log(res)
            this.props.updateCart(res.data)
        }).then(this.getTotal())
    }

    decreaseQuantity(cartId, quantity) {
        axios.delete(`/api/decrease_quantity/${cartId}/${quantity}`).then(res => {
            console.log(res)
            this.props.updateCart(res.data)
        }).then(this.getTotal())
    };

    render() {


        let mappedCart = this.props.cart.map((cartItem, i) => {

            return (
                <div key={i}>
                    <h4>Description: {cartItem.description} </h4>
                    <h4> Price: {cartItem.price}</h4>
                    <img height='100px' width='100px' src={cartItem.image_url} alt='' />
                    <div></div>
                    <button className='removeButton' onClick={() => this.removeFromCart(cartItem.cart_id)}>Remove Item</button>
                    <div></div>
                    <button className='removeButton' onClick={() => this.decreaseQuantity(cartItem.cart_id, cartItem.quantity)}>-</button>
                    <button className='add' onClick={() => this.increaseQuantity(cartItem.cart_id, cartItem.quantity)} >+</button>
                    <h5>Quantity: {cartItem.quantity}</h5>

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

                <h3>Total: {this.state.total} </h3>

            </div>

        )
    }
}

function mapStateToProps(state) {
    const { cart } = state
    return {
        cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateCart: item => dispatch(updateCart(item)),


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);