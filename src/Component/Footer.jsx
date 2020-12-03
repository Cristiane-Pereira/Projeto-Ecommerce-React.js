import React from 'react';

import './style.css';
import './main';


import Store from './Assets/footerstore1.png';
import Store1 from './Assets/footerstore2.png';

const Footer = () => {
    return (
        <footer className="footer section">
        <div className="footer_container bd-grid">
            <div className="footer_box">
                <h3 className="footer_title">MOB MODAS</h3>
                <p className="footer_deal">Products store</p>
                <a href="#"><img src={Store} alt="" className="footer-store" /></a>
                <a href="https://play.google.com/store/apps?hl=pt_BR&gl=US"><img src={Store1} alt="" className="footer-store" /></a>
           </div>
           <div className="footer_box">
               <h3 className="footer_title">EXPLORE</h3>
               <ul>
                   <li><a href="#" className="footer_link">Home</a></li>
                   <li><a href="#" className="footer_link">Featured</a></li>
                   <li><a href="#" className="footer_link">New</a></li>
                   <li><a href="#" className="footer_link">suscribed</a></li>
               </ul>
           </div>
           <div className="footer_box">
               <h3 className="footer_title">OUR SERVICES</h3>
               <ul>
                   <li><a href="#" className="footer_link">Pricing</a></li>
                   <li><a href="#" className="footer_link">Free Shipping</a></li>
                   <li><a href="#" className="footer_link">Git Cards</a></li>
               </ul>
           </div>
           <div class="footer_box">
               <h3 class="footer_title">FOLLOW</h3>
              <a href="#" className="footer-social"><i class='bx bxl-facebook-square'></i></a>
              <a href="#" className="footer-social"><i class='bx bxl-instagram-alt'></i></a>
              <a href="#" className="footer-social"><i class='bx bxl-twitter'></i></a>
           </div>
        </div>
        <p className="footer_copy">&#169; 2020 copyright Cristiane Pereira da Silva</p>
      </footer>

    );
 }

 export default Footer;