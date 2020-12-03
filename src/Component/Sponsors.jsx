import React from 'react';

import './style.css';
import './main';

import Logo1 from './Assets/logo1.png';
import Logo2 from './Assets/logo2.png';
import Logo3 from './Assets/logo3.png';
import Logo4 from './Assets/logo4.png';


const Sponsors = () => {
    return (
      
        <section className="sponsors section">
          <div className="sponsors_container bd-grid">
             <div className="sponsors_logo">
                 <img src={Logo1} alt="" />
             </div>

             <div className="sponsors_logo">
                 <img src={Logo2} alt="" />
             </div>

             <div className="sponsors_logo">
                 <img src={Logo3} alt="" />
             </div>

             <div className="sponsors_logo">
                 <img src={Logo4} alt="" />
             </div>
          </div>
        </section>
    
    );
}

export default Sponsors;