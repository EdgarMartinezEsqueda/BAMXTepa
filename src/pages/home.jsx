import Navbar from "../components/navbar/Navbar";
import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";
import SectionWithLinks from "../components/section/SectionWithLinks";
import Gallery from "../components/section/Gallery";
import SectionWithImageRight from "../components/section/SectionWithImageRight";
import SectionWithImageLeft from "../components/section/SectionWithImageLeft";
import Blog from "../components/blog/Blog";
import AboutUs from "../components/section/AboutUs";

function LandingPage() {
  return (
      <>
        <Navbar />
        <main>
        <div>
          <h2>A Donde Llegamos</h2>
          <p>Nuestros beneficiarios alcanzan a las siguientes comunidades:</p>
          <ul>
            <li>Tepatitlan de Morelos</li>
            <li>Jalostotitlan</li>
            <li>Valle de Guadalupe</li>
            <li>Arandas</li>
            <li>Cañadas de Obregon</li>
            <li>San Julian</li>
            <li>Encarnacion de Diaz</li>
            <li>San Juan de los Lagos</li>
            <li>Yahualica</li>
            <li>San Ignacio Cerro Gordo</li>
            <li>Nochistlan (Zacatecas)</li>
          </ul>
        </div>
        <div>
          <h2>Visión</h2>
          <p>
            Lograr un nuevo modelo de familia con cero hambre y una
            vision clara del desarrollo y auto sustentabilidad.
          </p>
        </div>
        <div>
          <h2>Valores</h2>
          <ul>
            <li>Apoyo al projimo</li>
            <li>Gratitud</li>
            <li>Honestidad</li>
            <li>Solidaridad</li>
            <li>Voluntad</li>
            <li>Compromiso</li>
          </ul>
        </div>
      </main>
      <Banner />
      <AboutUs />
        <SectionWithImageRight />
        <SectionWithImageLeft />
        <SectionWithLinks />
        <Gallery />
        <Blog /> 
        <Footer />
      </>
  );
};

export default LandingPage;
