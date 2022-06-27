import React, { useState } from 'react'
import internetArtinspo from '../InternetArt/internetArtinspo.jpg'
import internetArtinspo2 from '../InternetArt/internetArtinspo2.jpg'
import sourceInspo from '../InternetArt/sourceInspo.jpg'
import websiteInspo2 from '../InternetArt/websiteInspo2.jpg'
import websiteInspo from '../InternetArt/websiteInspo.jpg'
import websiteInspo3 from '../InternetArt/websiteInspo3.jpg'

import CloseIcon from '@mui/icons-material/Close';
import './InternetArtInspo.css'

const InternetArtInspo =() => {
    let data = [
        {
            id: 1,
            imgSrc: internetArtinspo,
        },
        {
            id: 2,
            imgSrc: internetArtinspo2,
        },
        {
            id: 3,
            imgSrc: sourceInspo,
        },
        {
            id: 4,
            imgSrc: websiteInspo2,
        },
        {
            id: 5,
            imgSrc: websiteInspo,
        },
        {
            id: 6,
            imgSrc: websiteInspo3,
        },
    ]
const [model, setModel] = useState(false);
const [tempimgSrc, setTempImgSrc] = useState('');
const getImg = (imgSrc) =>{
setTempImgSrc(imgSrc);
setModel(true);
}

return <>( <div className={model? "model opens" : "model"}>
    <img src={tempimgSrc}/>
<CloseIcon onClick={()=> setModel(false)}/>
</div>
    <div className="internetartgallery">
    {data.map((item,index)=>{
    return(
        <div className='images' key={index} onClick={()=> getImg(item.imgSrc)}>
            <img src={item.imgSrc}style={{width:'35%'}} >
    
            </img>
        </div>
    )
    })}
    </div>
    
        
      )
      </>
    }
    export default InternetArtInspo;