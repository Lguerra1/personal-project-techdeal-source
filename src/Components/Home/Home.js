import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TileBuilder from './TileBuilder';



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
                <TileBuilder
                product={product}               
                 />
            )
        })
        return (
            <div>
                <h1>DealSource.Tech</h1>
                <nav>
                    <ul>
                        <Link to='/audio'><button>Audio</button></Link>
                        <Link to='/displays'><button>Displays</button></Link>
                        <Link to='/parts'><button>PC Parts</button></Link>
                        <Link to='/peripherals'><button>Peripherals</button></Link>
                    </ul>
                </nav>
                {productsToDisplay}           
            </div>
        )
    }
}