import React, { Component } from 'react';
import axios from 'axios';
import './Parts.css';
import {connect} from 'react-redux';
import {addToCart} from '../../ducks/reducer';

class Parts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parts: []
        }
    }

    componentDidMount() {
        axios.get(`/api/get_all_parts`).then(res => {
            this.setState({
                parts: res.data
            })

        })
    }

    render() {

        let partsToDisplay = this.state.parts.map((part, i) => {
            return (
                <div key={i}>
                    <h3>{part.description}</h3>
                    <h3>{part.price}</h3>
                    <img height="200" width="200" src={part.image_url} alt="" />
                    <button onClick={() => this.props.addToCart(part.product_id)}>Add to cart</button>
                </div>
            )
        })
        return (
            <div>
                <h1>PC Parts</h1>
                {partsToDisplay}
            </div>
        )
    }
}

function mapStateToProps(state){
    const {product_id}=state
    return{
        product_id
    }
}

export default connect (mapStateToProps, {addToCart})(Parts)