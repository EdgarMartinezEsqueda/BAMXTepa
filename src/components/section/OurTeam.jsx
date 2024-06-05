const OurTeam = () => {
    return (
      <section className="sm:grid sm:grid-cols-2 sm:items-center p-4" >
        <div className="bg-equipoBAMX w-3/4 h-3/4 bg-center bg-cover sm:rounded-r-[60px] mx-auto">  </div>
        <div className=" p-8 text-xl text-grisLogo">
          <div className="mx-auto max-w-2xl text-center sm:text-left">
            <h1 className="text-3xl font-bold text-verdeLogo md:text-5xl">
              Nuestro compromiso y esfuerzo
            </h1>
            <p>Nos enorgullece el arduo trabajo y la dedicación que ponemos en cada proceso, desde la producción de alimentos hasta su entrega a quienes más lo necesitan.</p>
            <span className="py-8">
              <h2 className="text-2xl font-bold text-black">Tortillería</h2>
              <p> Fabricamos tortillas, un producto indispensable que añade valor a nuestro paquete alimentario. </p>
            </span>
            <span className="py-8">
              <h2 className="text-2xl font-bold text-black">Panadería</h2>
              <p> Horneamos panes, aumentando el contenido de la canasta con bollos, y/o conchas. </p>
            </span>
            <span className="py-8">
              <h2 className="text-2xl font-bold text-black">Planta Procesadora de Alimentos</h2>
              <p> Nuestra planta procesadora nos permite ofrecer productos fuera de temporada y alimentos preparados como frijoles refritos y puré de tomate. </p>
            </span>
            <span className="py-8">
              <h2 className="text-2xl font-bold text-black">Nuestro Equipo</h2>
              <p> Un dedicado grupo de empleados y voluntarios trabaja juntos para recolectar, clasificar y entregar alimentos, asegurando el éxito de nuestra misión. </p>
            </span>
          </div>
        </div>
      </section>
    );
};

export default OurTeam;