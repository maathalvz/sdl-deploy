import React from 'react';
import Image from 'next/image'
import { Container } from './styles';

const Produtos = () => {
  return (
    <Container>
      <h2>Nossos Produtos</h2>
    <ul className="content">
      <li>
      <Image
        src="/assets/gallery/28.jpg"
        alt="Sistema completo de som, iluminações, pista de led"
        width={500}
        height={500}
      />

     
         <div className="banner">
           <p className="banner-title">Boates</p>
           <p>Sistema complete, com iluminações, som, projetores, pista de led, fumaça, painel de led.</p>
         </div>


       
      </li>


      <li>
 
      <Image
        src="/assets/gallery/10.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <div className="banner">

           <p className="banner-title">Sistemas para shows</p>
           <p>Além dos amplificadores e dos microfones, o equipamento inclui ainda mesas de mixagem e uma infinidade de periféricos para tratar o som e a luz: compressores, refletores, efeitos como eco e reverberação, equalizadores.</p>
         </div>
      </li>
    </ul>
 </Container>
  );
};

export default Produtos;
