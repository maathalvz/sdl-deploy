import React from 'react';

import { Container } from './styles';
import Link from 'next/link'
const Nav = () => {
  return (
    <Container>
     <div className="content">
       <div className="portfolio"><Link href="/portfolio"><a>Portifolio</a></Link></div>
       <div className="logo"><Link href="/"><a>Sound Line</a></Link></div>
       <div className="contact"><Link href="/contact"><a >Contato</a></Link></div>
     </div>
    </Container>
  );
};

export default Nav;
