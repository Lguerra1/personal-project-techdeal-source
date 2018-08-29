import React, { Component } from 'react';
import axios from 'axios';
import './Parts.css';

export default class Parts extends Component {
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
                    <h3>{part.description}</h3>
                    <h3>{part.price}</h3>
                    <img height="200" width="200" src={part.image_url} alt="" />
                    <button>Add to cart</button>
                </div>
            )
        })
        return (
            <div>
                <h1>PC Parts</h1>
                {partsToDisplay}
            </div>
        )
    }
}