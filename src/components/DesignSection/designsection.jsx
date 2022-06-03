import React from 'react';
import './designsection.css';
import { Link } from 'react-router-dom';
import './Styles/designsection.css'
import './assets/Wireframe1.png';
import './assets/Wireframe2.png';
import './assets/Wireframe3.png';
import './assets/Wireframe4.png';
import './assets/Wireframe5.png';
import './assets/FinalStyleGuide.png';
import './assets/ReferenceMaterial.png';
import './responsive.css';

export default function Designsection
() {
  return (
    <div className="Designsection">
        <h1>Design Section</h1>
        <img src={require('./assets/Wireframe1.png').default} height= {100} width={200}/>
        <img src={require('./assets/Wireframe2.png').default} height= {100} width={200}/> 
        <img src={require('./assets/Wireframe3.png').default} height= {100} width={200}/>
        <img src={require('./assets/Wireframe4.png').default} height= {100} width={200}/>
        <img src={require('./assets/Wireframe5.png').default} height= {100} width={200}/>
        <img src={require('./assets/FinalStyleGuide.png').default} height= {100} width={200}/>
        <img src={require('./assets/ReferenceMaterial.png').default} height= {100} width={200}/>
    </div>
  )
};
