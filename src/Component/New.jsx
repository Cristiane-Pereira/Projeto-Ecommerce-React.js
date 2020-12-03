import React from 'react';

import './style.css';
import './main';

import New1 from './Assets/new1.png';
import New2 from './Assets/new2.png';
import New3 from './Assets/new3.png';
import New4 from './Assets/new4.png';
import New5 from './Assets/new5.png';
import New6 from './Assets/new6.png';

const New = () => {
    return (
        <section className="new section" id="new">
           <h2 className="section-title">NEW ARRIVALS</h2>
           <a href="#" className="section-all" id="view">View All</a>
        <div className="new_container bd-grid">
           <div className="new_box">
               <img src={New1} alt="" className="new_img" />
               <div class="new_link">
                   <a href="#" className="button">VIEW PRODUCT</a>
               </div>
           </div>


           <div className="new_box">
               <img src={New2} alt="" className="new_img" />
               <div className="new_link">
                   <a href="#" className="button">VIEW PRODUCT</a>
               </div>
           </div>


           <div className="new_box">
               <img src={New3} alt="" className="new_img" />
               <div className="new_link">
                   <a href="#" className="button">VIEW PRODUCT</a>
               </div>
           </div>


           <div className="new_box">
               <img src={New4}alt="" className="new_img" />
               <div className="new_link">
                   <a href="#" className="button">VIEW PRODUCT</a>
               </div>
           </div>


           <div className="new_box">
               <img src={New5} alt="" className="new_img" />
               <div className="new_link">
                   <a href="#" class="button">VIEW PRODUCT</a>
               </div>
           </div>


           <div className="new_box">
               <img src={New6} alt="" className="new_img" />
               <div className="new_link">
                   <a href="#" className="button">VIEW PRODUCT</a>
               </div>
           </div>
        </div>
    </section>
    );
}

export default New;