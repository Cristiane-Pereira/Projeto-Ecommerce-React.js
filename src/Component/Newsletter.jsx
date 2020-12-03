import React from 'react';

import './style.css';
import './main';

const Newsletter = () => {
    return (
        <section className="newsletter section" id="suscribed">
        <div className="newsletter_container bd-grid">
            <div className="newsletter_suscribe">
                <h2 className="section-title">NOSSA NEWSLETTER</h2>
                  <p className="newsletter_description">Promoção de novos produtos e vendas.Diretamente para seu email.</p>
                  <form method ="Post" action="" class="newsletter_form">
                     <input type="email" name="email" class="newsletter_input" placeholder="Enter your email" />
                     <button type="Submit" class="button">SUSCRIBE</button>
                </form>
         </div>
     </div>
</section>

    );
}

export default Newsletter;