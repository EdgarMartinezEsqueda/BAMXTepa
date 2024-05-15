import Navbar from "../components/navbar/Navbar";
import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";
import SectionWithLinks from "../components/section/SectionWithLinks";
import Gallery from "../components/section/Gallery";
import SectionWithImageRight from "../components/section/SectionWithImageRight";
import SectionWithImageLeft from "../components/section/SectionWithImageLeft";
import Blog from "../components/blog/Blog";
import AboutUs from "../components/section/AboutUs";
import MapJalisco from "../components/map/map";

function LandingPage() {
  return (
      <>
        <Navbar />
        <Banner />
        <AboutUs />
        <MapJalisco/>
        <SectionWithLinks />
        <SectionWithImageRight />
        <SectionWithImageLeft />
        <Gallery />
        <Blog /> 
        <Footer />
      </>
  );
};

export default LandingPage;
