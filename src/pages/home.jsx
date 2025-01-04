import Navbar from "components/navbar/Navbar";
import Banner from "components/banner/Banner";
import Footer from "components/footer/Footer";
import Valores from "components/section/Valores";
import Gallery from "components/section/Gallery";
import Mision from "components/section/Mision";
import Vision from "components/section/Vision";
import Montly from "components/section/Montly";
import AboutUs from "components/section/AboutUs";
import MapJalisco from "components/map/Map";

function LandingPage() {
  return (
      <>
        <Navbar />
        <Banner />
        <AboutUs />
        <MapJalisco/>
        <Montly />
        <Valores />
        <Mision />
        <Vision />
        <Gallery />
        <Footer />
      </>
  );
};

export default LandingPage;
