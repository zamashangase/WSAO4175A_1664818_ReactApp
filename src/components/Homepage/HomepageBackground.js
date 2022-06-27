import React, { useState } from 'react'
import FinalInternetArtbyZama from '../InternetArt/FinalInternetArtbyZama.png'
import CloseIcon from '@mui/icons-material/Close';
import './homepage.css'

const HomepageArt =() => {
    let data = [
        {
            id: 1,
            imgSrc: FinalInternetArtbyZama,
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
            <img src={item.imgSrc}style={{width:'75%'}} >
    
            </img>
        </div>
    )
    })}
    </div>
    
        
      )
      </>
    }
    export default HomepageArt;