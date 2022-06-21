import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import aura from '../DesignSection/aura.jpg'
import Cards from '../Cards';
import designReflect from '../DesignSection/designReflect.jpg'
import technicalReflect from '../DesignSection/technicalReflect.jpg'

export default class designers extends Component{
  
    render(){
      return( <div><h1>Design Section</h1>
      <section className='Design-Text'style={{ backgroundImage: `url(${aura})`}}>
 <h2>Original Wireframes:</h2>         

<Cards/>
<h3>Homepage Wireframe:</h3>

<h3>Blogposts Wireframe2:</h3>

<h3>Design Section Wireframe3:</h3>

<h3>Internet Art Section Wireframe4:</h3>

<h3>Wireframe5:</h3>


<h2>New Wireframes:</h2>

<h3>Homepage Wireframe 1:</h3>

<h3>Blogposts Wireframe 2:</h3>

<h3>Design Section Wireframe 3:</h3>

<h3>Internet Art Section Wireframe 4:</h3>
</section>
<section>
<h3>Original Style Guide:</h3>

<h3>Final Style Guide:</h3>

<h3>Reference Material:</h3>


<p>
According to colour psychology, different colours have a different representation and effect in terms of branding.
The colour pink represents compassion, softness and creativity. I thought it would be fitting since the website focuses
on different aspects of internet art including internet art blog posts such as web net and the design section showing
the design process. It is used for the background colour to show a bit of softness and safety for the viewers and creativity.
The colour black is seen as professional, elegance and a symbol of power. It was chosen for the header to give off a sense of professionalism
and elegance as well as compliment the softness of the pink background. It is also seen as formal as it gives this view for the website.
The black font is commonly used for articles and paragraphs in websites.
The colour white represents calmness, neatiness and tidiness. This colour was selected for the header font links to show the tidiness of the website
and viewers are able to see the links clearly and the colour does not conflict with any colours in the website.
Lastly the colour purple which is seen when selecting different links in the header have a different colour psychological view 
on the website as the professionalism of this colour shows luxury, ambition and confidence.
</p>
<p>
  The homepage has been replaced with the internet artwork that I created because the internet artwork is a part of the creative component of the
  website and it compliments the website being an artwork piece itself. Unlike the first website for Assignment 1 the navbar and header has been changed to 
  different colour to compliment the shades and visual representation of the internet artwork which is a sea of colours.
  there is a techincal issue where there is a box showing that the internet artwork is on the Home Page but it is not visual reflecting and showing
  right now it is a bit difficult to make the artwork interactive. My wireframes are in the assets folder of the app and it has been imported but for some 
  reason it is not showing but it is available in the assets folder. This is also the same problem with final style guide.
  The style guide is the same because the some of the colours are still on the colour scheme and therefore can be still available.
  Also the colour theme of the artwork is based on auras and the final style guide can be seen as a part of the artwork throughout
  the website using the waves and circles of pink. I also like how the background image of the style guide also has circles just like aura patterns.
  This fills in nicely with the internet artwork aura theme being seen throughout the website.
  The reference material in the preparatory work were used for layouts and app designs but it's har implementing them right now so my app layout is simple for now 
  so the blogposts information is easily readable and the design section is also accesible as well as the homepage and internet artwork section.
  The reference material also inspired the header and semantic markups of all the pages as the titles are seen on the header and the page continues 
  from there and the space for the navbar looks like a corner navbar.
</p>
<h4>Reference Material Image:</h4>
          </section>
          <section className='Design-Text'style={{ backgroundImage: `url(${designReflect})`}}>
  <h2>New Design Reflection:</h2>
  <h3>Wireframes Process:</h3>
  <p>
    For my new design for my website I drew new wireframes while creating the website
    The original wireframes are included in the process of designing the website.
    There is a second set of wireframes that I created before going with a different
    approach for the final wireframes that have been drawn for the react website. There are offically
    three different sets of wireframes for the website.
  </p>
  <h3>Images and Creative Process:</h3>
  <p>
For my new design reflection I decided to look for internet artworks that match the style guide 
of my website and turn them into backgrounds to add a creative compontent for the website so
each website is not plain or boring. The font colour is black so the background images do not overpower
the text. The specific artworks I had chosen were Auras with the style guide because of my fascination with
spiritual energy I also wanted the viewers to feel the same when viewing this website through the visual images.
This idea came from one of the assigned readings from the semester. The reason I have used these aura images to enchance 
my website in terms of my internet art is because aura internet artwork is the original inspiration for my internet artwork
which is also in the internet artwork section of the website. The preparatory artwork is a background to avoid scrolling too
much and also to incorporate the my internet artwork being incorporated into the website aesthetics.

  </p>
  <p>
    According to Carrier, visual artworks on the internet do not have an aura but these images disproves that theory
    in my opinion because they were created and inspired by artists that believe in spiritual energies and that colours give 
    people different feelings about the web art. Carrier states this because of the mutliple copies found from in the internet.
    I used these aura images for the blog posts section and the design section. 
  </p>
  <h4>Other Creatives:</h4>
  <p>
    I added a footer because it was not added to website in previous assignments and left the website unfinished.
    I chose two different colours for the website, black and white so the website can be creative and not boring.
    Also I did not want to use any other colour besides these colours to avoid the font colours conflicting with the images 
    and colour scheme of the website.
  </p>
  </section>
  <section className='Design-Text'style={{ backgroundImage: `url(${technicalReflect})`}}>
  <h2>New Technical Reflection:</h2>
  <p>
    For my technical reflection since the first assignment up till now I have been 
    working and getting used to the techincal part of the React app. 
  </p>
  </section>
          </div>
          )
};
};
        