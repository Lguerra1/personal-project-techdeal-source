import React from 'react';
import './App.css';
import routes from './routes';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { GoogleLogin } from 'react-google-login';


const App = () => {



  const responseGoogle = (response) => {
     Axios.post(`${process.env.REACT_APP_BASE_URL}/login`,{userObj: response.profileObj}).then(data => {
      localStorage.setItem("user_id", data.data.user.user_id);
    })
}
return (
  <div className="App">

    <nav>
      <ul>
        <div>
          <Link to='/cart'><img className='cart' height='40' src="https://blog.photoshelter.com/wp-content/uploads/2014/06/shopping-cart-1000pxV21-900x600.png" alt='cart' /></Link>
        </div>
        <GoogleLogin
          className="loginbutton"
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        <div className='imageLink'>
          <Link to='/'><img height="150" width="350" src="http://static1.squarespace.com/static/576bf6f9197aeaf55ed0447d/t/5772e573579fb3a687216f88/1535485333119/?format=1500w" alt='logo' /></Link>
        </div>
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

export default App;
