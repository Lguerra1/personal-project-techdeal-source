import React, { Component } from 'react';
import axios from 'axios';

export default class Audio extends Component {
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

        let audioToDisplay = this.state.audio.map((audioItem, i) => {
            return (
                <div key={i}>
                    <h3>{audioItem.description}</h3>
                    <h3>{audioItem.price}</h3>
                    <img height="200" width="200" src={audioItem.image_url} alt="" />
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