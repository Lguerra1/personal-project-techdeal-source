import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCart } from '../../ducks/reducer';
import axios from 'axios';
import './Cart.css';
import StripeCheckout from 'react-stripe-checkout';


// connect cart to redux
// bring in redux cart to cart component
// map over the redux cart and display


class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            total: 0,
            user_id: localStorage.getItem('user_id')
        }
    };


    //---------------------Stripe-----------------//

    onToken = (token) => {
        token.card = void 0
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/payment`, { token, amount: Math.floor(this.state.total * 100) }).then(res => {
            console.log(res)
            axios.delete(`${process.env.REACT_APP_BASE_URL}/api/empty_cart/${this.state.user_id}`).then(() => {
                this.getCart();
                this.getTotal();
            })
        })
    }


    //---------------------Stripe----------------------//

    componentDidMount() {
        this.getTotal();
        this.getCart();
    }

    getTotal() {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/get_total/${this.state.user_id}`).then(res => {
            this.setState({
                total: res.data[0].sum
            })
        })

    }

    getCart() {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/get_cart/${this.state.user_id}`).then(res => {
            this.props.updateCart(res.data);
        })
    }


    removeFromCart(cartId) {
        axios.delete(`${process.env.REACT_APP_BASE_URL}/api/remove_from_cart/${cartId}/${this.state.user_id}`).then(res => {
            this.props.updateCart(res.data)
        }).then(this.getTotal()).then(this.getTotal());
    }


    increaseQuantity(cartId, quantity) {
        axios.put(`${process.env.REACT_APP_BASE_URL}/api/increase_quantity/${cartId}/${quantity}/${this.state.user_id}`).then(res => {
            this.props.updateCart(res.data)
        }).then(this.getTotal())
            .then(this.getTotal())
    }

    decreaseQuantity(cartId, quantity) {
        axios.delete(`${process.env.REACT_APP_BASE_URL}/api/decrease_quantity/${cartId}/${quantity}/${this.state.user_id}`).then(res => {
            this.props.updateCart(res.data)
        }).then(this.getTotal())
            .then(this.getTotal())
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




                <StripeCheckout
                    name="TechSource"
                    description="Get that money!"
                    image="https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-1/p56x56/21430278_10155658990182974_7612374069765381031_n.jpg?_nc_cat=0&oh=998e5e05bd4a820d83f2a4fac88a006d&oe=5C2BAA89"
                    token={this.onToken}
                    stripeKey="pk_test_tVrkPvtOulqx5FOXnM7QEN4O"
                    amount={this.state.total * 100}
                />



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