import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import { Link } from 'react-router-dom';


class App extends Component {

  login() {
    let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;
    let url = `${encodeURIComponent(window.location.origin)}/auth/callback`
    window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`
}
  render() {
    return (
      <div className="App">
        <button className='loginbutton' onClick={this.login}>Login</button>
        <button className='loginbutton'>Logout</button>   

        <div><Link to='/cart'><img className='cart' height='50' src="https://blog.photoshelter.com/wp-content/uploads/2014/06/shopping-cart-1000pxV21-900x600.png" /></Link></div>

        <div><Link to='/'><img height="150" width="350" src="http://static1.squarespace.com/static/576bf6f9197aeaf55ed0447d/t/5772e573579fb3a687216f88/1535485333119/?format=1500w" /></Link></div>

        {routes}




      </div>
    );
  }
}

export default App;
