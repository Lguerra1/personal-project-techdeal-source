import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Tile_builder from './Tile_builder';



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
            console.log(res.data)
        })
    }
    render() {

        let productsToDisplay = this.state.products.map((product, i) => {
            return (
                <Tile_builder
                product={product}               
                 />
            )
        })
        return (
            <div>
                <h1>Home</h1>
                {productsToDisplay}           
                <nav>
                    <ul>
                        <Link to='/audio'><button>Audio</button></Link>
                        <Link to='/displays'><button>Displays</button></Link>
                        <Link to='/games'><button>Games</button></Link>
                        <Link to='/misc'><button>Misc</button></Link>
                        <Link to='/parts'><button>PC Parts</button></Link>
                        <Link to='/peripherals'><button>Peripherals</button></Link>
                    </ul>
                </nav>
            </div>
        )
    }
}