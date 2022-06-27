import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import aura from '../DesignSection/aura.jpg'
import Cards from '../Cards';
import designReflect from '../DesignSection/designReflect.jpg'
import technicalReflect from '../DesignSection/technicalReflect.jpg'
import Gallery from '../DesignSection/Gallery';


export default class designers extends Component{
  
    render(){
      return( <div><h1>Design Section</h1>
      <section className='Design-Text'style={{ backgroundImage: `url(${aura})`}}>
 <h2>Original Wireframes:</h2>         

<Cards/>
</section>


<section>
  <Gallery/>



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
<h3>Final Reference Material:</h3>
<p>
  My final reference material is on the internet art section of my website and it is apart of the source inspiration.
  I feel like since it is a part of the internet art colour inspo and I didnt want the section to be really long 
  because of the images. These colours were chosen because they stem from inspiration for different internet art.
  The use of gradient inspired aura colours is to show that aura internet artwork and also spiritually people have different
  auras steming from them or a person because it is the same energy they give. I could not find the original line net art From
  my preparatory work but I found source inspo similar to it. I incorporated gradient aura images for different blog posts so the blog
  posts do not clash together and look squashed and it is more easier for readers to know they are reading a different blog post
  with also incorporating the theme of aura internet art.
</p>

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
  <h4>Reflection:</h4>
  <p>
    According to Danae, an article by Marie Chatel. Rhizome had launched an exhibition called
    "The Art Happens Here". This exhibition has showcased sixteen different artists and contains
    over 100 pieces that was organized and restored over the years.  (Danae & Chatel, 2019)Rhizome made this website so 
    it can be a network media that is present. In my opinion, Rhizome's exhibition is like an
    internet gallery that provides the selected artists a given platform to display their artworks. (Danae & Chatel, 2019)
     Olia Lialina who is a 1990s artist was concerned about artistic languages and incporating it 
     into the internet. She curated content into the internet that was available online. (Danae & Chatel, 2019). The word 
     content is the information that contains media. This includes the internet, television,visual art and other technology.

  </p>
  <p>
    The content in the website is the images of different aura internet artworks that is found on the internet and placed 
    in a website that can also be a platform or exhibition for internet artworks to be displayed.
    This is like an art gallery on the internet with information and a form of communication.
  </p>
  <p>
    This research and reading inspired the incorporation of adding the aura internet arts I have hand picked
    from different artists and incorported in different parts of the website so the viewers can see different 
    net art. The footer was added because the website looked unfinished but while incorporating this. The website
    and the foter contains business related purposes to be seem professional and have information. This is incorporated
    through the design.
  </p>
  <p>
    While researching for design and aesthetics for this project I came across a website on ux design.
    According to the website, there is this effect called the Halo Effect that also applies to products and 
    websites. The Halo Effect is when people tend to assume that attractive looking people have other qualities
    besides their looks. This applies to aesthetic designs and websites. This researched was applied to my websites
    by displaying different internet artworks as the "product" and it is a part of the design aesthetics as it is 
    used as background images when discussing different topics.

  </p>
  </section>
  <section className='Design-Text'style={{ backgroundImage: `url(${technicalReflect})`}}>
  <h2>New Technical Reflection:</h2>
  <p>
    For my technical reflection since the first assignment up till now I have been 
    working and getting used to the technical part of the React app. 
  </p>
  <h3>Reflection and Research:</h3>
  <p>
    The theory of two works of art being visual representation in net art can be seen
    in different formats. The technical component for the website allows the viewer
    to have access to read and view the website in different screens. For example, the
    technical component of responsive design on html and CSS. I am saying this because with 
    this technical compontent can be viewed on computers and mobile phone screens. This technical
    component can also be used in React.
  </p>
  <p>
    According to Daniolou, the internet has an important role towards business that's why when developing
    a website it is best to add a footer with contact and content information. Using the technical components
    of javascript and JSX index I managed to create a footer with information and email subscription on the website
    to keep viewers updated. It helps advertise businesses on the internet and promote internet artwork in my website.
  </p>
  <p>
    Danilou's article on The Need for Global Internet Connectivity mainly focuses on the internet access in rural areas.
    With React if there is no internet on unpublished React website then the viewer can not view the website until the internet
    connection is available again. From my experience, bad wifi has caused the access to the React App to be limited or unreachable.
    Once the website is deployed and published then the viewers with internet access can see the developed website.
    From my experience, I had to use command prompt to have access to my React website when my laptop lost internet connection.
    Although the difference between my experience and reading is the area codes and locations.
  </p>
  </section>
          </div>
          )
};
};
        