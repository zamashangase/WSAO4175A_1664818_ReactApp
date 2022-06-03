import React, { Component } from 'react'
import "./Styles/homepage.css";
import './assets/homepageImage.png';
import './responsive.css';


export default function Homepage
() {
  return (
    <div className="Homepage">
      
        <h1>Homepage</h1>
        
        <p>Welcome to my React App</p>
        
        
       
        <img src={require('./assets/homepageImage.png').default} height= {500} width={500}/>
        
    </div>
  )
}


