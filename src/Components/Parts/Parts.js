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
            parts: [],
            user_id: localStorage.getItem('user_id')
        }
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/get_all_parts`).then(res => {
            this.setState({
                parts: res.data
            })

        })
    }

    addToCart(productId){
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/add_to_cart/${productId}/${this.state.user_id}`).then(res => {
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


                {/* <div className="grid"> */}
                    <div >{partsToDisplay}</div>           
                {/* </div> */}
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