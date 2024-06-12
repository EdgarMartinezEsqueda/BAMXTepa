import VoluntarioAlmacen from "../../assets/voluntariado/almacen.png";
import VoluntarioArmado from "../../assets/voluntariado/armado.png";
import VoluntarioCarga from "../../assets/voluntariado/carga.png";
import VoluntarioSeleccionar from "../../assets/voluntariado/seleccionar.png";
export default function Voluntariado() {
    return (
      <section className="w-full py-12">
        <div className="container px-4 md:px-6 m-auto">
          <div className="flex flex-col items-center justify-center space-y-12">
            <div className="space-y-4 text-center">
              <h1 className="text-3xl text-verdeLogo font-bold tracking-tighter sm:text-4xl md:text-5xl">¡Únete a Nuestro Equipo de Voluntarios y Haz la Diferencia!</h1>
              <p className="text-grisLogo text-xl md:text-xl/relaxed lg:text-base/relaxed text-center xl:text-xl/relaxed dark:text-gray-400">
              Unirse como voluntario a nuestro banco de alimentos es una oportunidad única para contribuir de manera significativa al bienestar de nuestra comunidad. Tu tiempo y esfuerzo pueden marcar una gran diferencia en la vida de muchas personas. Ofrecemos diversas formas de involucrarse, adaptándose a tus habilidades e intereses.</p>
            </div>
            <div className="grid w-full max-w-4xl gap-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-[1fr_400px] sm:gap-8 items-center">
                <div className="space-y-2 flex flex-col justify-center">
                  <h2 className="text-2xl text-amarilloLogo font-bold">Ayuda en Almacén con Inventario</h2>
                  <p className="text-grisLogo text-xl dark:text-gray-400">
                  Participa en la gestión y organización de nuestros recursos. Tu tarea principal será ayudar en el control preciso del inventario, asegurando que todos los productos estén disponibles y listos para su distribución. 
                  </p>
                </div>
                <img src={VoluntarioAlmacen} alt="Almacen" className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center w-96 h-72" />
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-[400px_1fr] sm:gap-8 items-center">
                <img src={VoluntarioSeleccionar} alt="Seleccionador" className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center w-96 h-72" />
                <div className="space-y-2 flex flex-col justify-center">
                  <h2 className="text-2xl text-amarilloLogo font-bold">Selección de Frutas y Verduras de Mejor Calidad</h2>
                  <p className="text-grisLogo text-xl dark:text-gray-400">
                  Ayuda a garantizar que las familias reciban productos frescos y de alta calidad. Trabajarás en la selección y clasificación de frutas y verduras, asegurando que solo los mejores productos lleguen a las despensas.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-[1fr_400px] sm:gap-8 items-center">
                <div className="space-y-2 flex flex-col justify-center">
                  <h2 className="text-2xl text-amarilloLogo font-bold">Armado de despensas</h2>
                  <p className="text-grisLogo text-xl dark:text-gray-400">
                  Colabora en el proceso de empaquetado de las despensas que se entregarán a las familias necesitadas. Este es un rol crucial, ya que garantiza que cada una de las despensas contengan una variedad equilibrada de alimentos esenciales.
                  </p>
                </div>
                <img src={VoluntarioArmado} alt="Cargar" className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center w-96 h-72" />
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-[400px_1fr] sm:gap-8 items-center">
                <img src={VoluntarioCarga} alt="Armado" className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center w-96 h-72" />
                <div className="space-y-2 flex flex-col justify-center">
                  <h2 className="text-2xl text-amarilloLogo font-bold">Ayuda a cargar rutas</h2>
                  <p className="text-grisLogo text-xl dark:text-gray-400">
                  Sé parte del equipo que se asegura de que las despensas lleguen a su destino. Ayudarás a cargar los vehículos con las despensas que serán distribuidas, facilitando el proceso de entrega.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }