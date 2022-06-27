import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import internetartbyZama from '../InternetArt/internetartbyZama.png'
import '../../App.css';
import Footer from '../Footer';
import HomepageBackground from './HomepageBackground';
import FinalInternetArtbyZama from '../InternetArt/FinalInternetArtbyZama.png'


export default class homepage extends Component{
  
    render(){
      
      return(<div className="Art" style={{ backgroundImage: `url(${FinalInternetArtbyZama})`}}>
          <h1>Welcome to my Internet Artwork Website</h1>
      <section className='Homepage-Text'>
 <h2>The Mystery of Auras in Internet Art</h2> 
 <p>This project is divided into four different sections and pages starting with
    the home page which you are currently on. The next section will be the  theoretical blog
    posts which contains insight on net art as well as research, reflections and reference lists. The Design
    Reflection and Technical Reflection is displayed on the blog section and the design section but the 
    Blog section is more informative.
    The next webpage focuses on the development and creative process of the website and app including 
    old wireframes, style guides and new wireframes. The final section is the internet artwork
    which is the star of the website. It also contains the prepartory work and images serving as evidence
    in my research for different aura internet artworks.
      </p>        
</section>

</div>

      )
    }
}