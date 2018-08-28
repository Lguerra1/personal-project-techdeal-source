import React, { Component } from 'react';
import axios from 'axios';
import './Display.css';

export default class Display extends Component {
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
                    <img width="200" height="200" src={monitor.image_url} alt="" />
                    <button>Add to cart</button>
                </div>
            )
        })

        return (
            <div>
                <h1>Displays</h1>
                <body>
                    <div>
                        {monitorsToDisplay}
                        {monitorsToDisplay}
                        {monitorsToDisplay}
                        {monitorsToDisplay}
                        {monitorsToDisplay}
                    </div>
                </body>






            </div>
        )
    }
}