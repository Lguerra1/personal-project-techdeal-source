import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addToCart } from '../../ducks/reducer';

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

    render() {
        console.log(this.state.audio)
        let audioToDisplay = this.state.audio.map((audioItem, i) => {
            console.log(audioItem)
            return (
                <div key={i}>
                    console.log(this.props.addToCart)
                    <h3>{audioItem.description}</h3>
                    <h3>{audioItem.price}</h3>
                    <img height="200" width="200" src={audioItem.image_url} alt="" />
                    <button onClick={() => this.props.addToCart(audioItem)} >Add to cart</button>
                </div>

            )
        })
        return (
            <div>
                <h1>Audio</h1>
                {audioToDisplay}

            </div>
        )
    }
}

export default connect(state => state, { addToCart })(Audio);