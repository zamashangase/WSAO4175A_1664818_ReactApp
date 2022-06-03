import React from 'react';
import {Navbar} from '../../components';

import './header.css'
function Header(){
    return(
      <section className="header">
<section className="header-top">
    <section className="header-top__logo">

    </section>
    <section className="header-top__navbar" >
    <Navbar/>
    </section>
</section>
<section className="header-bottom" >


<section className="header-bottom__email" >
kzninternetartgallery@gmail.com
</section>
</section>
 </section>
      


    
    )
}
export default Header;

