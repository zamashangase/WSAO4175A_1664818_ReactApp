import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import './metatags';

import {javascript} from './components';


import { Header } from './components';
import { Navbar } from './components';
import { Pagetitle } from './components';
import  Blogposts  from './components/Blogposts';
import Homepage from './components/Homepage';
import Designsection from './components/DesignSection';
import InternetArt from './components/InternetArt';
import MetaTags from './metatags';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';


function App () {
 
  return(
  
  
    

    
    
    <>
    <Router>
    <Navbar/>
        <Switch>
          
          <Route path='/' exact component={Homepage} />
          <Route path= '/blogposts'  component={Blogposts} />
          <Route path= '/designsection' component={Designsection} />
          <Route path= '/internetart' component={InternetArt} />
          
        </Switch>
      </Router>



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
      <Footer/>
   
   
      </>
  
);
}

export default App;
