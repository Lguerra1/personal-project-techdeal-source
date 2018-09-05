import React, { Component } from 'react';
import axios from 'axios';
import './Display.css';
import { connect } from 'react-redux';
import { addToCart } from '../../ducks/reducer';
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
            console.log(res.data)
        })

    }

    render() {

        let monitorsToDisplay = this.state.monitors.map((monitor, i) => {
            return (
                <div key={i}>
                    <h4>{monitor.description}</h4>
                    <h4> {monitor.price}</h4>
                    <img width="150" height="150" src={monitor.image_url} alt="" />
                    <div></div>
                    <button onClick={() => this.props.addToCart(monitor)}>Add to cart</button>
                </div>
            )
        })

        return (
            <div>
                <h1>Displays</h1>
                <div class="container">
                    <div class="item">{monitorsToDisplay}</div>                                                     
                    <div class="item">{monitorsToDisplay}</div>
                    <div class="item">{monitorsToDisplay}</div>
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

export default connect(mapStateToProps, { addToCart })(Display)