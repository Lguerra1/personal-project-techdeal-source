import React, { Component } from 'react';
import axios from 'axios';
import './Display.css';
import {connect} from 'react-redux';
import {addToCart} from '../../ducks/reducer';

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
                    <h3>{monitor.description}</h3>
                    <h3> {monitor.price}</h3>
                    <img width="300" height="300" src={monitor.image_url} alt="" />
                    <button onClick={() => this.props.addToCart(monitor)}>Add to cart</button>
                </div>
            )
        })

        return (
            <div>
                <h1>Displays</h1>
                <body>
                    <div className='flexMonitors'>
                        <div>{monitorsToDisplay}</div>
                        <div>{monitorsToDisplay}</div>
                        <div>{monitorsToDisplay}</div>
                        <div>{monitorsToDisplay}</div>
                        <div>{monitorsToDisplay}</div>
                        
                    </div>
                </body>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {product_id} = state
    
    return {
        product_id
    }
         

}

export default connect(mapStateToProps, {addToCart})(Display)