import React from "react";

import { Container } from "./styles";

const HeroContact = () => {
  return (
    <Container>
      <div className="row">
        <div className="col-1">
          <span>Get in touch</span>

          <h2>Como nós podemos te ajudar ?</h2>
          <h3>Escolha sabiamente.</h3>
        </div>
        <div className="col-2">
          <h3>Contato</h3>
          <ul className="group">
            <li>
              <div className="location">
                <span>R. Montes Claros - Santos Dumont Pará de Minas - MG</span>
                <a href="/">VEJA NO GOOGLE MAPS</a>
              </div>
            </li>

            <li>
              <p>info@soundline.com</p>
              <p>+55 37 9 9134478</p>
            </li>
            
            <li>
              <ol>
                <li><a href="/"><img src="/assets/icons/facebook.png" alt="facebook soundline"/></a></li>
                <li><a href="/"><img src="/assets/icons/insta.png" alt="instagram soundline"/></a></li>
                <li><a href="/"><img src="/assets/icons/whats.svg" alt="instagram soundline"/></a></li>
                <li><a href="/"><img src="/assets/icons/pin.svg" alt="pinterest fique por dentro de todo nosso serviço"/></a></li>
              </ol>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default HeroContact;
