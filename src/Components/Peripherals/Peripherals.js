import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addToCart } from '../../ducks/reducer';
import './Peripherals';

class Peripherals extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peripherals: []
        }
    }

    componentDidMount() {
        axios.get(`/api/get_all_peripherals`).then(res => {
            this.setState({
                peripherals: res.data
            })
        })
    }
    render() {

        let peripheralsToDisplay = this.state.peripherals.map((periph, i) => {
            return (
                <div key={i}>
                    <h4>Description: {periph.description}</h4>
                    <h4>Price: {periph.price}</h4>
                    <img height="150" widht="150" src={periph.image_url} alt='' />
                    <div></div>
                    <button className='addCart' onClick={() => this.props.addToCart(periph)}>Add to cart</button>
                </div>
            )
        })
        return (
            <div>
                <h1>Peripherals</h1>
                <div className="container">
                    <div className="item">{peripheralsToDisplay}</div>                                                     
                    <div className="item">{peripheralsToDisplay}</div>
                    <div className="item">{peripheralsToDisplay}</div>
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

export default connect(mapStateToProps, { addToCart })(Peripherals)