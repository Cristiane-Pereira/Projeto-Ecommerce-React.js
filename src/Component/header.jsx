import React from 'react';

import './style.css';
import './main';


const Header = () => {
  return (
    <header className="l-header">
    <React.Fragment className="container-fluid">
        <nav className="nav bd-grid">
            <div>
                <a href="#" className="nav_logo"><strong>MOB MODAS</strong></a>
            </div>

            <div class="nav_menu" id="nav-menu">
                <ul className="nav_list">
                    <li className="nav_item"><a href="#home" className="nav_link active">Home</a></li>
                    <li className="nav_item"><a href="#featured" className="nav_link">Featured</a></li>
                    <li className="nav_item"><a href="#new" className="nav_link">New</a></li>
                    <li className="nav_item"><a href="#suscribed" className="nav_link">Subscribed</a></li>
                </ul>

            </div>

             <div>
                <i class='bx bx-cart nav_cart'></i>
                <i class='bx bx-menu nav_toggle' id="nav_toggle"></i>
             </div>

        </nav>
    </React.Fragment>
  </header>


  );
      
}


export default Header;