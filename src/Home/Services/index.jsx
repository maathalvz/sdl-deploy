import React from 'react';

import { Container } from './styles';
import Image from 'next/image'

const Services = () => {
  return (
    <Container>
       <ul className="content">
         <li>
        

           <Image
       src="/assets/gallery/26.jpg" alt="Eventos"
        width={500}
        height={500}
      />
            <div className="banner">
              <p className="banner-title">Eventos</p>
              <p>Leilões, palestras, shows, conferências, workshops.</p>
            </div>


          
         </li>


         <li>
       

           <Image
       src="/assets/gallery/26.jpg" alt="Eventos"
        width={500}
        height={500}
      />
         <div className="banner">

              <p className="banner-title">Festas</p>
              <p>Casamentos, 15 anos, formaturas, aniversarios, bodas.</p>
            </div>
         </li>
       </ul>
    </Container>
  );
};

export default Services;
