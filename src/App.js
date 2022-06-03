import React from 'react';
import { Route, Switch, useState } from 'react-router-dom';
import './App.css';
import './metatags';

import {javascript} from './components';


import { Header } from './components';
import { Navbar } from './components';
import { Pagetitle } from './components';
import Blogposts from './components/Blogposts';
import Homepage from './components/homepage';
import Designsection from './components/DesignSection';
import Internetart from './components/InternetArt';
import MetaTags from './metatags';



function App () {
 
  return(
  
  <div className="navbar">
    
    
    <Navbar/>
    
    
      <Switch>
        <Route exact path="/homepage" component={Homepage} />
        <Route exact path="/blogposts" component={Blogposts} />
        <Route exact path="/designsection" component={Designsection} />
        <Route exact path="/internetart" component={Internetart} />



        {/* <Route path="/">
           <Pagetitle title= "homepage"/>
        <Route path="/blogposts">
        <Pagetitle title= "blogposts"/>
        </Route>
        <Route path="/designsection">
        <Pagetitle title= "designsection"/>
        </Route>
        <Route path="/internetart">
        <Pagetitle title= "internetart"/>
        </Route> */}
      </Switch>
   
    
  </div>
    
);
}

export default App;
