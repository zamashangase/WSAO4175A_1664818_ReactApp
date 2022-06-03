import React, { Component } from 'react'
import './internetart.css';
import './assets/internetartbyZama.png';
import './responsive.css';

export default function Internetart
() {
  return (
    <div className="Internetart">
        <h1>Internet Art</h1>
        <img src={require('./assets/internetartbyZama.png').default} height= {100} width={200}/>
    </div>
  )
}