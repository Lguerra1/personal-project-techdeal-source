import React, { Component } from 'react';
import axios from 'axios';
import './Display.css';
import { connect } from 'react-redux';
import { updateCart } from '../../ducks/reducer';
import './Display.css';

class Display extends Component {
    constructor(props) {
        super(props)
        this.state = {
            monitors: []
        }
    }

    componentDidMount() {
        axios.get('/api/get_all_displays').then(res => {
            this.setState({
                monitors: res.data
            })
        })

    }

    addToCart(productId) {
        axios.post(`/api/add_to_cart/${productId}`).then(res => {
            this.props.updateCart(res.data)
        })
    }

    render() {

        let monitorsToDisplay = this.state.monitors.map((monitor, i) => {
            return (
                <div key={i}>
                    <h4>Description: {monitor.description}</h4>
                    <h4>Price:  {monitor.price}</h4>
                    <img width="150" height="150" src={monitor.image_url} alt="" />
                    <div></div>
                    <button className='addCart' onClick={() => this.addToCart(monitor.product_id)}>Add to cart</button>
                </div>
            )
        })

        return (
            <div>
                <h1>Displays</h1>

                <div className="grid">
                    <div className="module">{monitorsToDisplay[0]}</div>
                    <div className="module">{monitorsToDisplay[1]}</div>
                    <div className="module">{monitorsToDisplay[2]}</div>
                    <div className="module">{monitorsToDisplay[3]}</div>
                    <div className="module">{monitorsToDisplay[4]}</div>
                    <div className="module">{monitorsToDisplay[5]}</div>
                    <div className="module">{monitorsToDisplay[6]}</div>
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

export default connect(mapStateToProps, { updateCart })(Display)