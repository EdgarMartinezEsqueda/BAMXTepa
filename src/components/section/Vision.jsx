import Imagen from "assets/home/image_3.webp";
const SectionWithImage = () => {
    return (
      <section className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center md:max-h-[400px] bg-white" >
        <img alt="Banco de Alimentos" src={Imagen} className="max-md:hidden w-full object-cover object-bottom sm:self-end sm:rounded-tr-[30px] h-96 md:rounded-tr-[60px]" />
        <div className=" p-4">
          <div className="mx-auto max-w-2xl text-center sm:text-left">
            <h2 className="text-4xl font-bold text-verdeLogo">
              Visión
            </h2>
            <div className=" text-gray-500 md:text-xl lg:text-2xl">
              <p className="sm:py-4">Un nuevo modelo de familia con cero hambre, autosuficiente y con una visión clara de desarrollo sostenible.</p>
            </div>
          </div>
        </div>
        <img alt="Banco de Alimentos" src={Imagen} className="md:hidden w-full object-cover object-bottom self-end h-96 rounded-tr-[60px]" />
      </section>
    );
};

export default SectionWithImage;