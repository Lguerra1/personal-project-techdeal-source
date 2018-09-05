import React, { Component } from 'react';
import axios from 'axios';
import './Parts.css';
import { connect } from 'react-redux';
import { addToCart } from '../../ducks/reducer';
import './Parts.css';

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
                    <h4>Description: {part.description}</h4>
                    <h4>Price: {part.price}</h4>
                    <img height="150" width="150" src={part.image_url} alt="" />
                    <div></div>
                    <button className='addCart' onClick={() => this.props.addToCart(part)}>Add to cart</button>
                </div>
            )
        })
        return (
            <div>
                <h1>PC Parts</h1>
                <div class="container">
                    <div class="item">{partsToDisplay}</div>                                                     
                    <div class="item">{partsToDisplay}</div>
                    <div class="item">{partsToDisplay}</div>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    const { product_id } = state
    return {
        product_id
    }
}

export default connect(mapStateToProps, { addToCart })(Parts)