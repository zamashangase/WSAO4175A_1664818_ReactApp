import React from "react";
import { Link } from "react-router-dom";

import './navbar.css';

function Navbar (){
    return (
        <section className="navbar">
            <div className="leftSide">
          <ul>
          <li><Link to="/homepage" className="navbar-item">Homepage</Link></li>
          <li><Link to="/blogposts" className="navbar-item">Blogposts</Link></li>
          <li><Link to="/designsection" className="navbar-item">DesignSection</Link></li>
          <li><Link to="/internetart" className="navbar-item">Internetart</Link></li>
          </ul>
          </div>
      </section>
      )
}
export default Navbar;