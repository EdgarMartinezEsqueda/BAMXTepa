import HandshakeIcon from '@mui/icons-material/Handshake';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import BackHandIcon from '@mui/icons-material/BackHand';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
const SectionWithLinks = () => {
    return (
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 pb-8 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16" >
            <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
              <h2 className="text-4xl font-bold">Nuestro valores</h2>
              <p className="mt-4 text-gray-600 text-xl">
                Nuestros valores son nuestra guía y nuestra inspiración. Nos comprometemos a actuar con integridad, empatía y respeto, buscando siempre el bienestar de las comunidades a las que servimos. Son la base de nuestra identidad y de cómo impactamos en el mundo. 
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 text-center">
              <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="/" >
                <span className="inline-block rounded-full bg-gray-50 p-3 text-rojoLogo">
                  <HandshakeIcon/>
                </span>
                <p className="mt-2 font-bold">Apoyo al prójimo</p>
              </div>

              <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="/" >
                <span className="inline-block rounded-full bg-gray-50 p-3 text-rojoLogo">
                  < FavoriteIcon />
                </span>
                <p className="mt-2 font-bold">Gratitud</p>
              </div>

              <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="/" >
                <span className="inline-block rounded-full bg-gray-50 p-3 text-rojoLogo">
                  < TaskAltIcon />
                </span>
                <p className="mt-2 font-bold"> Honestidad</p>
              </div>

              <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="/" >
                <span className="inline-block rounded-full bg-gray-50 p-3 text-rojoLogo">
                  < Diversity2Icon />
                </span>
                <p className="mt-2 font-bold"> Solidaridad</p>
              </div>

              <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="/" >
                <span className="inline-block rounded-full bg-gray-50 p-3 text-rojoLogo">
                  <BackHandIcon/>
                </span>
                <p className="mt-2 font-bold"> Voluntad </p>
              </div>

              <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="/" >
                <span className="inline-block rounded-full bg-gray-50 p-3 text-rojoLogo">
                  <VolunteerActivismIcon />
                </span>
                <p className="mt-2 font-bold">Compromiso</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default SectionWithLinks;