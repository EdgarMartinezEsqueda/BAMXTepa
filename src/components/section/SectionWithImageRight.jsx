import Imagen from "assets/image2.webp";
const SectionWithImage = () => {
    return (
      <section className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center lg:max-h-[400px]" >
        <div className="max-md:p-8 p-16">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold max-md:text-center">
              Misión
            </h2>
            <div className=" text-gray-500 md:text-xl">
              <ul className="list-disc list-inside text-justify">
                <li>Lograr liberar a familias de la situacion de pobreza alimentaria y de oportunidades, por medio del desarrollo de capacidades.</li>
                <li>Promover la participacion activa de las personas, evitando a toda costa ser paternalistas o asistencialistas.</li>
                <li className="max-lg:hidden">Concientizar a las familias que los adultos pero principalmente los niños, necesitan estudios, ademas de comida.</li>
                <li className="max-lg:hidden">Motivar a las personas para que desarrollen sus capacidades y potencialidades, logrando asi, salir del circulo de la pobreza.</li>
              </ul>
            </div>
          </div>
        </div>

        <img alt="Banco de Alimentos" src={Imagen} className=" w-full object-cover object-top sm:self-end rounded-tl-[30px] h-96 md:rounded-tl-[60px]" />
      </section>
    );
};

export default SectionWithImage;