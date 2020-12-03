import React from 'react';

import './style.css';
import './main';

import Headphone from './Assets/feature1.png';
import Speaker from './Assets/feature2.png';
import Aple from './Assets/feature3.png';
import Smartwatch from './Assets/feature4.png';
import Vestido1 from './Assets/produto-2b-570x708.jpg';
import Vestido2 from './Assets/produto-1a-570x708.jpg';
import Vestido3 from './Assets/shutterstock_116081557_2-570x708.jpg';
import Vestido4 from './Assets/shutterstock_94577944_2-570x708.jpg';
import Vestido5 from './Assets/shutterstock_342042911_2-570x708.jpg';
import Bolsa1 from './Assets/produto-4a-570x708.jpg';
import Vestido6 from './Assets/vestido-cor-de-rosa-com-corações.jpg';
import Vestido7 from './Assets/shutterstock_327014729_2-570x708.jpg';
import Saia from './Assets/20.png';
import Vestido8 from './Assets/girls_PNG6477.png';
import Vestido9 from './Assets/girls_PNG6476.png';
import Saia2 from './Assets/girls_PNG6485.png';

const Featuread = () => {
    return (
        <section className="featured section" id="featured">
           <h2 className="section-title">FEATURED PRODUCTS</h2>
             <a href="#" className="section-all">View All</a>

        <div className="featured_container bd-grid">
            <div className="featured_product">
                <div className="featured_box">
                    <div className="featured_new">NEW</div>
                    <img src={Headphone} alt="" className="featured_img" />
                </div>
                <div className="featured_data">
                    <h3 className="featured_name">Headphone One Black</h3>
                    <span className="featured_preci">R$29,00</span>
                </div>
            </div>


            <div className="featured_product">
                <div className="featured_box">
                    <div className="featured_new">NEW</div>
                    <img src={Speaker} alt="" className="featured_img" />
                </div>
                <div className="featured_data">
                     <h3 className="featured_name">Speaker Beats Pill</h3>
                      <span className="featured_preci">R$199,00</span>
                </div>
            </div>


            <div className="featured_product">
                <div className="featured_box">
                    <div className="featured_new">NEW</div>
                    <img src={Aple} alt="" className="featured_img" />
                </div>
                  <div className="featured_data">
                      <h3 className="featured_name">Aple air Pods</h3>
                      <span className="featured_preci">R$112,00</span>
                  </div>
            </div>


            <div className="featured_product">
                <div className="featured_box">
                    <div className="featured_new">NEW</div>
                    <img src={Smartwatch} alt="" className="featured_img" />
                </div>
                  <div className="featured_data">
                      <h3 className="featured_name">Smartwatch F9 Negro</h3>
                      <span className="featured_preci">R$756,00</span>
                  </div>
            </div>


            <div className="featured_product">
                <div className="featured_box">
                    <div className="featured_new">NEW</div>
                    <img src={Vestido1} alt="" className="featured_img" />
                </div>
                  <div className="featured_data">
                      <h3 className="featured_name">Vestido Crepp</h3>
                      <span className="featured_preci">R$86,90</span>
                  </div>
            </div>


            <div className="featured_product">
                <div className="featured_box">
                    <div className="featured_new">NEW</div>
                    <img src={Vestido2} alt="" className="featured_img" />
                </div>
                  <div className="featured_data">
                      <h3 className="featured_name">Vestido Manga Longa Floral</h3>
                      <span className="featured_preci">R$75,00</span>
                  </div>
            </div>


            <div className="featured_product">
                <div className="featured_box">
                    <div className="featured_new">NEW</div>
                    <img src={Vestido3} alt="" className="featured_img" />
                </div>
                  <div className="featured_data">
                      <h3 className="featured_name">Vestido social c/cinto</h3>
                      <span className="featured_preci">R$99,00</span>
                  </div>
            </div>


            <div className="featured_product">
                <div className="featured_box">
                    <div className="featured_new">NEW</div>
                    <img src={Vestido4} alt="" className="featured_img" />
                </div>
                  <div className="featured_data">
                      <h3 className="featured_name">Vestido Básico</h3>
                      <span className="featured_preci">R$56,00</span>
                  </div>
            </div>


            <div className="featured_product">
                <div className="featured_box">
                    <div className="featured_new">NEW</div>
                    <img src={Vestido5} alt="" className="featured_img" />
                </div>
                  <div className="featured_data">
                      <h3 className="featured_name">Vestido Rap</h3>
                      <span className="featured_preci">R$64,00</span>
                  </div>
            </div>


            <div className="featured_product">
                <div className="featured_box">
                    <div className="featured_new">NEW</div>
                    <img src={Bolsa1} alt="" className="featured_img" />
                </div>
                  <div className="featured_data">
                      <h3 className="featured_name">Bolsa de Couro Original</h3>
                      <span className="featured_preci">R$156,00</span>
                  </div>
            </div>


            <div className="featured_product">
                <div className="featured_box">
                    <div className="featured_new">NEW</div>
                    <img src={Vestido6} alt="" className="featured_img" />
                </div>
                  <div className="featured_data">
                      <h3 className="featured_name">Vestido rosa com Coração</h3>
                      <span className="featured_preci">R$120,00</span>
                  </div>
            </div>


            <div className="featured_product">
                <div className="featured_box">
                    <div className="featured_new">NEW</div>
                    <img src={Vestido7} alt="" className="featured_img" />
                </div>
                  <div className="featured_data">
                      <h3 className="featured_name">Vestido Moda Inverno</h3>
                      <span className="featured_preci">R$112,00</span>
                  </div>
            </div>


            <div className="featured_product">
                <div className="featured_box">
                    <div className="featured_new">NEW</div>
                    <img src={Saia} alt="" class="featured_img" />
                </div>
                  <div className="featured_data">
                      <h3 className="featured_name">Saia Blogueirinha</h3>
                      <span className="featured_preci">R$86,00</span>
                  </div>
            </div>


            <div className="featured_product">
                <div className="featured_box">
                    <div className="featured_new">NEW</div>
                    <img src={Vestido8} alt="" className="featured_img" />
                </div>
                  <div className="featured_data">
                      <h3 className="featured_name">Vestido Fashion</h3>
                      <span className="featured_preci">R$88,00</span>
                  </div>
            </div>


            <div className="featured_product">
                <div className="featured_box">
                    <div className="featured_new">NEW</div>
                    <img src={Vestido9} alt="" className="featured_img" />
                </div>
                  <div className="featured_data">
                      <h3 className="featured_name">Vestido Curto Azul</h3>
                      <span className="featured_preci">R$56,00</span>
                  </div>
            </div>


            <div className="featured_product">
                <div className="featured_box">
                    <div className="featured_new">NEW</div>
                    <img src={Saia2} alt="" className="featured_img" />
                </div>
                  <div className="featured_data">
                      <h3 className="featured_name">Saia Curta Preta</h3>
                      <span className="featured_preci">R$46,00</span>
                  </div>
            </div>
        </div>
    </section>
    );
}


export default Featuread;