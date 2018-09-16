import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateCart } from '../../ducks/reducer';
import './Audio.css';


class Audio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            audio: []
        }
    }

    componentDidMount() {
        axios.get(`/api/get_all_audio`).then(res => {
            this.setState({
                audio: res.data
            })
        })
    }

    addToCart(productId) {
        axios.post(`/api/add_to_cart/${productId}`).then(res => {
            this.props.updateCart(res.data)
        })
    }

    render() {
        let audioToDisplay = this.state.audio.map((audioItem, i) => {

            return (
                <div key={i}>

                    <div ><h4>Description: {audioItem.description}</h4></div>
                    <div><img height="250px" width="250px" src={audioItem.image_url} alt="" /></div>
                    <div ><h4>Price: {audioItem.price}</h4></div>
                    <div><button className='addCart' onClick={() => this.addToCart(audioItem.product_id)} >Add to cart</button></div>
                </div>

            )
        })

        // for (i = 0; i < audioToDisplay.length; i++){

        // }

        return (
            <div>
                <h1>Audio</h1>

                <div className="grid">
                    <div className="module">{audioToDisplay[0]}</div>
                    <div className="module">{audioToDisplay[1]}</div>
                    <div className="module">{audioToDisplay[2]}</div>
                    <div className="module">{audioToDisplay[3]}</div>
                    <div className="module">{audioToDisplay[4]}</div>
                    <div className="module">{audioToDisplay[5]}</div>
                    <div className="module">{audioToDisplay[6]}</div>
                    <div className="module">{audioToDisplay[7]}</div>
                    <div className="module">{audioToDisplay[8]}</div>                                                 
                </div>

            </div>
        )
    }
}
function mapStateToProps(state) {
    const { product_id } = state;
    return {
        product_id
    }
}

export default connect(mapStateToProps, { updateCart })(Audio);