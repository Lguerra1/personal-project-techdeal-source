import React, { Component } from 'react';
import axios from 'axios'


export default class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cart: []
        }
    }
    componentDidMount() {
        axios.get(`/api/get_cart`).then(res => {

            this.setState({
                cart: res.data
            })
        })
    }

    render() {

        let mappedCart = this.state.cart.map((cart, i) => {
            return (
                <div key={i}>
                    <h3> {cart.username}</h3>
                    <h3>{cart.product}</h3>
                    <h3> {cart.price}</h3>
                    <button>Checkout</button>
                </div>
            )
        })
        return (
            <div>
                <h1>Cart</h1>
                {mappedCart}
                
            </div>
        )
    }
}