const AboutUs = () => {
    return (
      <section className="overflow-hidden bg-aboutUs bg-cover bg-center bg-no-repeat" >
        <div className="bg-black/50 p-6 lg:p-12">
          <div className="text-center sm:text-left flex flex-col items-center justify-center ">
            <h2 className="text-2xl font-black text-white sm:text-3xl md:text-5xl text-center">
              Acerca de nosotros
            </h2>
            <p className="text-white md:block md:text-xl md:leading-relaxed text-center w-3/4" >
              Somos una asociación civil dedicada a rescatar alimentos para fortalecer la alimentación de comunidades en la región de los Altos de Jalisco.
            </p>
            <p className="text-white md:block md:text-xl md:leading-relaxed text-center w-3/4 max-sm:hidden" >
              Nuestro compromiso es reducir el desperdicio de alimentos y combatir el hambre, trabajando en conjunto con empresas, instituciones y la comunidad para crear un impacto positivo y sostenible.
            </p>
          </div>
        </div>
      </section>
    );
}

export default AboutUs;