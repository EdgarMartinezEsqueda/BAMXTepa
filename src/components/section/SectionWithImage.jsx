import Imagen from "assets/image2.jpg";
const SectionWithImage = () => {
    return (
      <section className="overflow-hidden  sm:grid sm:grid-cols-2 sm:items-center" >
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Misión
            </h2>

            <div className="hidden text-gray-500 md:mt-4 md:block md:text-xl">
              <ul className="list-disc list-inside">
                <li>Lograr liberar a familias de la situacion de pobreza alimentaria y de oportunidades, por medio del desarrollo de capacidades.</li>
                <li>Promover la participacion activa de las personas, evitando a toda costa ser paternalistas o asistencialistas.</li>
                <li>Concientizar a las familias que los adultos pero principalmente los niños, necesitan estudios, ademas de comida.</li>
                <li>Motivar a las personas para que desarrollen sus capacidades y potencialidades, logrando asi, salir del circulo de la pobreza.</li>
              </ul>
            </div>
          </div>
        </div>

        <img alt="Banco de Alimentos" src={Imagen} className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]" />
      </section>
    );
};

export default SectionWithImage;