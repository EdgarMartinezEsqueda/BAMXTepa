import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Carousel from "../components/carousel/Carousel";
import SocialImpact from "../components/section/SocialImpact";
import HowToHelp from "../components/section/HowToHelp";
import OurTeam from "../components/section/OurTeam";

// Componente para la sección de Historia
const Historia = () => (
    <section className="text-xl ">
      <h1 className="text-5xl text-grisLogo  text-center p-8">Nuestra Historia</h1>
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