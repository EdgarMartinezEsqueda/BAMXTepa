import Imagen from "assets/image2.webp";
const SectionWithImage = () => {
    return (
      <section className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center lg:max-h-[400px]" >
        <div className="max-md:p-8 p-16">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold max-md:text-center text-verdeLogo">
              Misión
            </h2>
            <div className=" text-gray-500 md:text-xl lg:text-2xl">
              <p className="text-justify">
                Lograr liberar a las familias de la situación de pobreza alimentaria y fomentar el desarrollo de capacidades, evitando ser asistencialistas.
              </p>
              <p className="max-sm:hidden"> Promovemos la educación y motivamos a las personas para romper el círculo de la pobreza.</p>
            </div>
          </div>
        </div>

        <img alt="Banco de Alimentos" src={Imagen} className=" w-full object-cover object-top sm:self-end rounded-tl-[30px] h-96 md:rounded-tl-[60px]" />
      </section>
    );
};

export default SectionWithImage;