import React from 'react';

import './style.css';
import './main';

//Componentes do projeto React
import Header from './header';
import Home from './Home';
import Coleçao from './colecao';
import Featuread from './Featuread';
import Oferta from './Oferta';
import New from './New';
import Newsletter from './Newsletter';
import Sponsors from './Sponsors';
import Footer from './Footer';
import Consutoria from './Consutoria';
   


const App = () => {
  return (
     <>
        <Header />
        <Home />
        <Coleçao />
        <Featuread />
        <Oferta />
        <New />
        <Newsletter />
        <Consutoria />
        <Sponsors />
        <Footer />
     </>


  );
      
}


export default App;