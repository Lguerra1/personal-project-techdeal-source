import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {addToCart} from '../../ducks/reducer';

class Peripherals extends Component {
    constructor(props){
        super(props)
        this.state = {
            peripherals: []
        }
    }

    componentDidMount() {
        axios.get(`/api/get_all_peripherals`).then( res => {
            this.setState({
                peripherals: res.data
            })
        })
    }
    render(){

        let peripheralsToDisplay = this.state.peripherals.map((periph, i) => {
            return (
                <div key={i}>
                <h3>{periph.description}</h3>
                <h3>{periph.price}</h3>
                <img height="200" widht="200" src={periph.image_url}/>
                <button onClick={this.props.addToCart(periph)}>Add to cart</button>
                </div>
            )
        })
        return(
            <div>
              <h1>Peripherals</h1>
              {peripheralsToDisplay}
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

export default connect (mapStateToProps, {addToCart})(Peripherals)