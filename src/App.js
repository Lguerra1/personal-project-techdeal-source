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

        <nav>
          <ul>
            <div><Link to='/cart'><img className='cart' height='40' src="https://blog.photoshelter.com/wp-content/uploads/2014/06/shopping-cart-1000pxV21-900x600.png" alt='cart' /></Link></div>
            <button className='loginbutton' onClick={this.login}>Login</button>
            <div className='imageLink'><Link to='/'><img height="150" width="350" src="http://static1.squarespace.com/static/576bf6f9197aeaf55ed0447d/t/5772e573579fb3a687216f88/1535485333119/?format=1500w" alt='logo' /></Link></div>
            <Link to='/audio'><button className="linkbutton">Audio</button></Link>
            <Link to='/displays'><button className="linkbutton">Displays</button></Link>
            <Link to='/parts'><button className="linkbutton">PC Parts</button></Link>
            <Link to='/peripherals'><button className="linkbutton">Peripherals</button></Link>
            {/* <Link to='/cart'><button className="linkbutton">Cart</button></Link> */}
          </ul>
        </nav>



        {/* <button className='loginbutton'>Logout</button> */}
        {routes}




      </div>
    );
  }
}

export default App;
