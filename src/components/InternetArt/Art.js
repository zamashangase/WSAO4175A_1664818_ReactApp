import React, { useState } from 'react'
import internetartbyZama from '../InternetArt/internetartbyZama.png'
import CloseIcon from '@mui/icons-material/Close';
import './Art.css'

const Art =() => {
    let data = [
        {
            id: 1,
            imgSrc: internetartbyZama,
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
            <img src={item.imgSrc}style={{width:'55%'}} >
    
            </img>
        </div>
    )
    })}
    </div>
    
        
      )
      </>
    }
    export default Art;
    