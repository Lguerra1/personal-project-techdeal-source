import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        axios.get('/api/get_all_products').then(res => {
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

                    <div className="module">{productsToDisplay[1]}</div>
                    <div className="module">{productsToDisplay[2]}</div>
                    <div className="module">{productsToDisplay[3]}</div>
                    <div className="module">{productsToDisplay[4]}</div>
                    <div className="module">{productsToDisplay[5]}</div>
                    <div className="module">{productsToDisplay[6]}</div>
                    <div className="module">{productsToDisplay[7]}</div>
                    <div className="module">{productsToDisplay[8]}</div>
                    <div className="module">{productsToDisplay[9]}</div>
                    <div className="module">{productsToDisplay[10]}</div>
                    <div className="module">{productsToDisplay[11]}</div>
                    <div className="module">{productsToDisplay[12]}</div>
                    <div className="module">{productsToDisplay[13]}</div>
                    <div className="module">{productsToDisplay[14]}</div>
                    <div className="module">{productsToDisplay[15]}</div>
                    <div className="module">{productsToDisplay[16]}</div>
                    <div className="module">{productsToDisplay[17]}</div>
                    <div className="module">{productsToDisplay[18]}</div>

                </div>

            </div>
        )
    }
}

