import Footer from '../components/Footer'
import Main from '../components/Main'
import About from './About'
import Hero from './Hero'
import Produtos from './Produtos'
import Services from './Services'


const Tags = () => {
  return (
    <>
   <Hero/>

   <Main>
     <Services/>
     <About/>
     <Produtos/>
   </Main>

   <Footer/>
    </>
  );
};

export default Tags;
