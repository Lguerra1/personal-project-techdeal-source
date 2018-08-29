import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import { Link } from 'react-router-dom';


class App extends Component {
    render() {
      return (
        <div className="App">
          <Link to='/'><img height="150" width="350" src="http://static1.squarespace.com/static/576bf6f9197aeaf55ed0447d/t/5772e573579fb3a687216f88/1535485333119/?format=1500w" /></Link>
          {routes}


        </div>
      );
    }
  }

export default App;
