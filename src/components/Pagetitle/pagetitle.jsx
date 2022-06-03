import React from 'react'
import './pagetitle.css';

function Pagetitle(props){
    const{title} = props;

return(
<section className="title">
    {title}
</section>

)
}
export default Pagetitle;