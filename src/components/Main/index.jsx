import React from 'react';

import { Container } from './styles';

const Main = ({children}) => {
  return (
    <Container>
     <div className="content">
       {children}
     </div>
    </Container>
  );
};

export default Main;
