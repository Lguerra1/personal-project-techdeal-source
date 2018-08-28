import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Audio from './Components/Audio/Audio';
import Displays from './Components/Displays/Displays';
import Games from './Components/Games/Games';
import Misc from './Components/Misc/Misc';
import Parts from './Components/Parts/Parts';
import Peripherals from './Components/Peripherals/Peripherals';
import Home from './Components/Home/Home';

export default (
    <Switch>
        <Route  exact path='/' component = {Home}/>
        <Route path='/audio' component = {Audio}/>
        <Route path='/displays/:id' component = {Displays}/>
        <Route path='/games' component = {Games}/>
        <Route path='/misc' component = {Misc}/>
        <Route path='/parts' component = {Parts}/>
        <Route path='/peripherals' component = {Peripherals}/>
    </Switch>
);



