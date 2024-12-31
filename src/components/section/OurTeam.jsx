const OurTeam = () => {
    return (
      <section className="sm:grid sm:grid-cols-2 sm:items-center p-4" >
        <div className="bg-equipoBAMX w-3/4 h-3/4 bg-center bg-cover sm:rounded-r-[60px] mx-auto">  </div>
        <div className=" p-8 text-xl text-grisLogo">
          <div className="mx-auto max-w-2xl text-center sm:text-left ">
            <h1 className="font-omnes max-sm:text-2xl text-3xl font-bold text-verdeLogo ">
              Nuestro compromiso y esfuerzo
            </h1>
            <p>Nos enorgullece el arduo trabajo y la dedicación que ponemos en cada proceso, desde la producción de alimentos hasta su entrega a quienes más lo necesitan.</p>
            <span className="py-8 max-lg:hidden">
              <h2 className="text-xl font-bold text-amarilloLogo">Tortillería</h2>
              <p> Fabricamos tortillas para enriquecer los paquetes alimentarios.</p>
            </span>
            <span className="py-8 max-lg:hidden">
              <h2 className="text-xl font-bold text-amarilloLogo">Panadería</h2>
              <p> Horneamos panes como bollos y conchas, ofreciendo variedad y nutrición. </p>
            </span>
            <span className="py-8 max-lg:hidden">
              <h2 className="text-xl font-bold text-amarilloLogo">Planta Procesadora de Alimentos</h2>
              <p> Producimos alimentos fuera de temporada, como frijoles refritos y puré de tomate. </p>
            </span>
            <span className="py-8 max-lg:hidden">
              <h2 className="text-xl font-bold text-amarilloLogo">Nuestro Equipo</h2>
              <p> Un dedicado grupo de empleados y voluntarios trabaja juntos para recolectar, clasificar y entregar alimentos, asegurando el éxito de nuestra misión. </p>
            </span>
          </div>
        </div>
      </section>
    );
};

export default OurTeam;