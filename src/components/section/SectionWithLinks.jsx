import CookieIcon from '@mui/icons-material/CookieOutlined';
import CakeIcon from '@mui/icons-material/CakeOutlined';
import BakeryDiningIcon from '@mui/icons-material/BakeryDiningOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import LocalPizzaOutlinedIcon from '@mui/icons-material/LocalPizzaOutlined';
import BreakfastDiningOutlinedIcon from '@mui/icons-material/BreakfastDiningOutlined';

const SectionWithLinks = () => {
    return (
      <section className="bg-bgClaro">
        <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16" >
            <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
              <h2 className="text-3xl font-bold sm:text-4xl">Encuentra tu pan para cualquier ocasión</h2>
              <p className="mt-4 text-gray-600">
                Nos esforzamos en ofrecer una amplia variedad de panes frescos y deliciosos que se adaptan a cualquier ocasión. 
                Ya sea que necesites un pan crujiente y fresco para acompañar tu comida diaria o algo único para una celebración especial, <strong className="text-rosaMexicano">¡nuestra panadería tiene el pan perfecto para ti!</strong>
              </p>
              <a href="/productos" className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400" >
                Comenzar
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="/productos/pan" >
                <span className="inline-block rounded-full bg-gray-50 p-3">
                  <BreakfastDiningOutlinedIcon/>
                </span>
                <h2 className="mt-2 font-bold">Pan</h2>
                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Desde pan blanco hasta pan integral, pan francés, baguettes, pan de centeno, pan de masa madre, entre otros.
                </p>
              </a>

              <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="/productos/pasteles" >
                <span className="inline-block rounded-full bg-gray-50 p-3">
                  < CakeIcon />
                </span>
                <h2 className="mt-2 font-bold">Pasteles y Tartas</h2>
                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Pasteles de cumpleaños, tartas de frutas, tartas de queso, pasteles de bodas y otros postres dulces.
                </p>
              </a>

              <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="/productos/individuales" >
                <span className="inline-block rounded-full bg-gray-50 p-3">
                  < CookieIcon />
                </span>
                <h2 className="mt-2 font-bold">Individuales</h2>
                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Cupcakes, macarons, brownies, donas, muffins, entre otros.
                </p>
              </a>

              <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="/productos/bolleria" >
                <span className="inline-block rounded-full bg-gray-50 p-3">
                  < BakeryDiningIcon />
                </span>
                <h2 className="mt-2 font-bold">Bolleria</h2>
                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Croissants, pan de chocolate, danishes, hojaldres, panettone, entre otros.
                </p>
              </a>

              <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="/productos/salados" >
                <span className="inline-block rounded-full bg-gray-50 p-3">
                  <LocalPizzaOutlinedIcon/>
                </span>
                <h2 className="mt-2 font-bold">Salados</h2>
                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Pastes, empanadas, croissants rellenos, sándwiches, quiches, pizzas y otros alimentos salados.
                </p>
              </a>

              <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="/productos/especiales" >
                <span className="inline-block rounded-full bg-gray-50 p-3">
                  <AddCircleOutlineOutlinedIcon />
                </span>
                <h2 className="mt-2 font-bold">Especiales</h2>
                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Panes sin gluten, panes veganos, panes de ajo, pan de cebolla, pan de avena, entre otros.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    )
}

export default SectionWithLinks;