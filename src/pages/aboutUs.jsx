import Navbar from "components/navbar/Navbar";
import Footer from "components/footer/Footer";
import Carousel from "components/carousel/Carousel";
import SocialImpact from "components/section/SocialImpact";
import HowToHelp from "components/section/HowToHelp";
import OurTeam from "components/section/OurTeam";

// Componente para la sección de Historia
const Historia = () => (
    <section className="text-xl ">
      <h1 className="text-5xl text-verdeLogo text-center pt-8">Nuestra Historia</h1>
      <p className="text-center md:text-xl lg:text-2xl">
        Desde 2007, hemos trabajado incansablemente para combatir el hambre en nuestra región.
      </p>
      <p className="text-center md:text-xl lg:text-2xl pb-4 max-sm:hidden">
        Descubre cómo hemos crecido y evolucionado a través de los años.
      </p>
      <Carousel />
    </section>
  );
  
const AboutUsPage = () =>{
    return (
      <>
        <Navbar/>
        <Historia />
        <OurTeam />
        <SocialImpact />
        <HowToHelp />
        <Footer/>
      </>
    );
};

export default AboutUsPage;