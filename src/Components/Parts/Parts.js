import React, { Component } from 'react';
import axios from 'axios';
import './Parts.css';
import { connect } from 'react-redux';
import { updateCart } from '../../ducks/reducer';
import './Parts.css';

class Parts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parts: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:3010/api/get_all_parts`).then(res => {
            this.setState({
                parts: res.data
            })

        })
    }

    addToCart(productId){
        axios.post(`http://localhost:3010/api/add_to_cart/${productId}`).then(res => {
            this.props.updateCart(res.data)
        })
    }

    render() {

        let partsToDisplay = this.state.parts.map((part, i) => {
            return (
                <div key={i}>
                    <h4>Description: {part.description}</h4>
                    <img height="250px" width="250px" src={part.image_url} alt="" />
                    <h4>Price: {part.price}</h4>
                    <div></div>
                    <button className='addCart' onClick={() => this.addToCart(part.product_id)}>Add to cart</button>
                </div>
            )
        })
        return (
            <div>
                <h1>PC Parts</h1>


                <div className="grid">
                    <div className="module">{partsToDisplay[0]}</div>
                    <div className="module">{partsToDisplay[1]}</div>
                    <div className="module">{partsToDisplay[2]}</div>
                    <div className="module">{partsToDisplay[3]}</div>
                    <div className="module">{partsToDisplay[4]}</div>
                    <div className="module">{partsToDisplay[5]}</div>
                    <div className="module">{partsToDisplay[6]}</div>                              
                    <div className="module">{partsToDisplay[7]}</div>                              
                    <div className="module">{partsToDisplay[8]}</div>                              
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

export default connect(mapStateToProps, { updateCart })(Parts)