import React, { Component } from 'react';
import axios from 'axios';
import TileBuilder from './TileBuilder';
import '../../index.css';



export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            products: []
        }
    }


    componentDidMount() {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/get_all_products`).then(res => {
            this.setState({
                products: res.data
            })

        })
    }
    render() {

        let productsToDisplay = this.state.products.map((product, i) => {
            return (
                <TileBuilder key={i}
                    product={product}
                />
            )
        })
        return (
            <div>
                <div className="container">
                    {productsToDisplay}
                </div>
            </div>
        )
    }
}

