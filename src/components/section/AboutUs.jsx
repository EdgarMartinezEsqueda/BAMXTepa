import Imagen from "assets/image2.jpg";
const AboutUs = () => {
    return (
      <section className="overflow-hidden bg-aboutUs bg-cover bg-center bg-no-repeat" >
        <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
              Acerca de nosotros
            </h2>
      
            <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed" >
            Somos una asociación civil dedicada a rescatar alimentos que de otra manera se desperdiciarían, para fortalecer la alimentación de comunidades en la región de los Altos de Jalisco. Nuestro compromiso es reducir el desperdicio de alimentos y combatir el hambre, trabajando en conjunto con empresas, instituciones y la comunidad para crear un impacto positivo y sostenible en nuestra sociedad
            </p>
          </div>
        </div>
      </section>
    );
}

export default AboutUs;