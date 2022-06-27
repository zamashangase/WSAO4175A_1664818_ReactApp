import React from 'react'
import homepagewireframe from '../assets/homepagewireframe.jpeg'
import blogwireframe1 from '../assets/blogwireframe1.jpeg'
import internetSection2 from '../assets/internetSection2.jpeg'
import originalDesignSection from '../assets/originalDesignSection.png'
import originalInternetSection from '../assets/originalInternetSection.png'
import designWireframe from '../assets/designWireframe.jpeg'
import designWireframe2 from '../assets/designWireframe2.jpeg'
import originalHomepage from '../assets/originalHomepage.png'
import WSOA4175A_StyleGuide from '../assets/WSOA4175A_StyleGuide.png'
import ReferenceMaterial from '../assets/ReferenceMaterial.png'
import SecondStyleGuide from '../assets/SecondStyleGuide.png'
import finalHomepagewireframe from '../assets/finalHomepagewireframe.jpeg'
import finalBlogSection from '../assets/finalBlogSection.jpeg'
import finalDesignSection from '../assets/finalDesignSection.jpeg'
import finalInternetArtSection from '../assets/finalInternetArtSection.jpeg'
import './Gallery.css'

const Gallery =() => {
    let data = [
        {
            id: 1,
            imgSrc: homepagewireframe,
        },
        {
            id: 2,
            imgSrc: blogwireframe1,
        },
        {
            id: 3,
            imgSrc: internetSection2,
        },
        {
            id: 4,
            imgSrc: originalDesignSection,
        },
        {
            id: 5,
            imgSrc: originalInternetSection,
        },
        {
            id: 6,
            imgSrc: WSOA4175A_StyleGuide,
        },
        {
            id: 7,
            imgSrc: designWireframe,
        },
        {
            id: 8,
            imgSrc: designWireframe2,
        },
        {
            id: 9,
            imgSrc: originalHomepage,
        },
        {
            id: 10,
            imgSrc: ReferenceMaterial,
        },
        {
            id: 11,
            imgSrc: SecondStyleGuide,
        },
        {
            id: 11,
            imgSrc: finalHomepagewireframe,
        },
        {
            id: 12,
            imgSrc: finalBlogSection,
        },
        {
            id: 13,
            imgSrc: finalDesignSection,
        },
        {
            id: 14,
            imgSrc: finalInternetArtSection,
        },
        
    ]
  return <>(
<div className="wireframegallery">
{data.map((item,index)=>{
return(
    <div className='images' key={index}>
        <img src={item.imgSrc}style={{width:'25%'}} >

        </img>
    </div>
)
})}
</div>

    
  )
  </>
}
export default Gallery;

