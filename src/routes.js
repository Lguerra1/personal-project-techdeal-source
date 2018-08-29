import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Audio from './Components/Audio/Audio';
import Displays from './Components/Displays/Displays';
import Parts from './Components/Parts/Parts';
import Peripherals from './Components/Peripherals/Peripherals';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';

export default (
    <Switch>
        <Route  exact path='/' component = {Home}/>
        <Route path='/audio' component = {Audio}/>
        <Route path='/displays' component = {Displays}/>        
        <Route path='/parts' component = {Parts}/>
        <Route path='/peripherals' component = {Peripherals}/>
        <Route path='/cart' component = {Cart}/>
    </Switch>
);



