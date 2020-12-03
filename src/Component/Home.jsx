import React from 'react';

import './style.css';
import './main';
import Image from './Assets/home.png';


const Home = () => {
    return (
      <main class="l-main">
         <section className="home" id="home">
           <div className="home_container bd-grid">
             <div className="home_data">
                <h1 className="home_title">NEW <br/> <span>ARRIVALS</span></h1>
                <a href="#featured" className="button">GO SHOPPING</a>
             </div>
               <img src={Image} alt="" className="home_img" />
           </div>
         </section>
      </main>
    );
 }

export default Home;