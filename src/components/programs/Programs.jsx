import ApadrinaUnaFamilia from "../../assets/programas/apadrinaUnaFamilia.webp"
import ComerEnFamilia from "../../assets/programas/comerEnFamilia.webp"
import VoluntarioAlVolante from "../../assets/programas/volante.webp"

export default function Programs() {
    return (
      <section className="w-full py-12">
        <div className="container px-4 md:px-6 m-auto">
          <div className="flex flex-col items-center justify-center space-y-12">
            <div className="space-y-4 text-center">
              <h1 className="text-3xl text-verdeLogo font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestros Programas de Impacto Social</h1>
              <p className="text-grisLogo text-xl md:text-xl/relaxed lg:text-base/relaxed text-center xl:text-xl/relaxed dark:text-gray-400">
              Descubre cómo cada programa transforma vidas y fortalece nuestra comunidad.</p>
            </div>
            <div className="grid w-full max-w-4xl gap-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-[1fr_400px] sm:gap-8 items-center">
                <div className="space-y-2 flex flex-col justify-center">
                  <h2 className="text-2xl text-amarilloLogo font-bold">Comer en Familia</h2>
                  <p className="text-grisLogo text-xl dark:text-gray-400">
                  "Comer en Familia" es un programa que ofrece clases de cocina diseñadas para promover una alimentación saludable y equilibrada. 
                  </p>
                </div>
                <img src={ComerEnFamilia} alt="Comer en Familia" className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center w-96 h-72" />
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-[400px_1fr] sm:gap-8 items-center">
                <img src={ApadrinaUnaFamilia} alt="Apadrina Una Familia" className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center w-96 h-72" />
                <div className="space-y-2 flex flex-col justify-center">
                  <h2 className="text-2xl text-amarilloLogo font-bold">Apadrina una Familia</h2>
                  <p className="text-grisLogo text-xl dark:text-gray-400">
                  "Apadrina una Familia" es una iniciativa solidaria que permite a los donantes contribuir con $400 pesos mensuales para proporcionar dos despensas al mes a familias en situación de vulnerabilidad.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-[1fr_400px] sm:gap-8 items-center">
                <div className="space-y-2 flex flex-col justify-center">
                  <h2 className="text-2xl text-amarilloLogo font-bold">Voluntarios al Volante</h2>
                  <p className="text-grisLogo text-xl dark:text-gray-400">
                  "Voluntarios al Volante" es un programa que invita a los miembros de la comunidad a unirse como voluntarios para distribuir las despensas apadrinadas usando sus propios vehículos.
                  </p>
                </div>
                <img src={VoluntarioAlVolante} alt="Voluntarios al volante" className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center w-96 h-72" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }