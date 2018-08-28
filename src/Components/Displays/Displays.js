import React, {Component} from 'react';
import Axios from 'axios';

export default class Display extends Component {

        // componentDidMount(){
        //     axios.get('/api/showitem')
        // }
    
    render(){

console.log(this.props);
        return(
            <div>
              <h1>Displays</h1>
              <h3>{this.props.match.params.id}</h3>
            </div>
        )
    }
}