import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Carousel from "../components/carousel/Carousel";
import SocialImpact from "../components/section/SocialImpact";

// Componente para la sección de Historia
const Historia = () => (
    <section className="text-xl ">
      <h1 className="text-5xl text-grisLogo  text-center p-8">Nuestra Historia</h1>
      <div className="flex justify-center h-[600px]">
        <Carousel />
      </div>
        <div>
            <h2 className="text-2xl text-verdeLogo">Tortillería</h2>
            <p> Con la fabricación de tortillas, generamos un producto indispensable en la mesa de nuestros beneficiarios, añadiendo un valor extra a nuestro paquete alimentario. </p>
        </div>
        <div>
          <h2 className="text-2xl text-verdeLogo">Panadería</h2>
          <p> Hornear panes nos permite aumentar el contenido de la canasta entregada, ofreciendo una variedad de bollos para productos dulces y salados, y conchas para disfrutar después de una buena comida. </p>
        </div>
        <div>
          <h2 className="text-2xl text-verdeLogo">Planta Procesadora de Alimentos</h2>
          <p> Gracias a la planta procesadora, podemos beneficiar a las personas con productos fuera de temporada y proporcionarles acceso rápido a alimentos preparados como frijoles refritos o puré de tomate. </p>
        </div>
    </section>
  );
  
  // Componente para la sección de Equipo
  const Equipo = () => (
    <section className="text-xl">
      <h2 className="text-2xl text-verdeLogo">Nuestro Equipo</h2>
      <p>
        Nuestro equipo está compuesto por un dedicado grupo de empleados y voluntarios que trabajan juntos 
        para llevar adelante nuestra misión. Desde la recolección y clasificación de alimentos hasta la 
        entrega directa a quienes lo necesitan, cada miembro de nuestro equipo es crucial para nuestro éxito.
      </p>
    </section>
  );

  
  // Componente para la sección de Cómo Ayudar
  const ComoAyudar = () => (
    <section className="text-xl">
      <h2 className="text-2xl text-verdeLogo">Cómo Puedes Ayudar</h2>
      <p>
        Hay muchas maneras en las que puedes contribuir a nuestra causa. Ya sea a través de donaciones de 
        alimentos o dinero, o ofreciendo tu tiempo como voluntario, cada pequeña acción cuenta. Te invitamos 
        a unirte a nosotros en nuestra misión de crear una comunidad sin hambre.
      </p>
    </section>
  );
  
const AboutUsPage = () =>{
    return (
      <>
        <Navbar/>
        <Historia />
        <Equipo />
        <SocialImpact />
        <ComoAyudar />
        <Footer/>
      </>
    );
};

export default AboutUsPage;