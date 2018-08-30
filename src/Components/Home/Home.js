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

                  

                <nav>
                    <ul>
                        <Link to='/audio'><button className="linkbutton">Audio</button></Link>
                        <Link to='/displays'><button className="linkbutton">Displays</button></Link>
                        <Link to='/parts'><button className="linkbutton">PC Parts</button></Link>
                        <Link to='/peripherals'><button className="linkbutton">Peripherals</button></Link>
                        <Link to='/cart'><button className="linkbutton">Cart</button></Link>
                    </ul>
                </nav>
                <section>
                    <div className='parts'>
                        {productsToDisplay}
                    </div>
                </section>
                 
            </div>
        )
    }
}

