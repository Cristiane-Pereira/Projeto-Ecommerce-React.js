import React from 'react';

import './style.css';
import './main';
import Men from './Assets/backpackMan.png';
import Women from './Assets/backpackWoman.png';

const Coleçao = () => {
    return (
        <section className="collection section">
            <div className="collection_container bd-grid">
                <div className="collection_box">
                    <img src={Men} alt="" className="collection_img" />
                        <div className="collection_data">
                            <h2 class="collection_title"><span className="collection_subtitle">Men</span><br />backpackMan</h2>
                            <a href="#" class="collection_view">View collection</a>
                        </div>
                </div>
                <div class="collection_box">
                    <div class="collection_data">
                        <h2 class="collection_title"><span class="collection_subtitle">Women</span><br />backpackMan</h2>
                        <a href="#" class="collection_view">View collection</a>
                    </div>
                        <img src={Women} alt="" class="collection_img" />
                </div>
            </div>
        </section>
    );
}  


export default Coleçao;