import HandshakeIcon from '@mui/icons-material/Handshake';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import BackHandIcon from '@mui/icons-material/BackHand';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const valoresConIcono = (Icon, valor, index) =>{
  return (
    <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" key={index}>
      <span className="inline-block rounded-full bg-gray-50 p-3 text-rojoLogo">
        {< Icon />}
      </span>
      <p className="mt-2 font-normal">{ valor }</p>
    </div>
  )
}

const SectionWithLinks = () => {
  const valores = [
    { Icon: HandshakeIcon, valor: "Apoyo al prójimo"},
    { Icon: FavoriteIcon, valor: "Gratitud"},
    { Icon: TaskAltIcon, valor: "Honestidad"},
    { Icon: Diversity2Icon, valor: "Solidariad"},
    { Icon: BackHandIcon, valor: "Voluntad"},
    { Icon: VolunteerActivismIcon, valor: "Compromiso"}
  ];
  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 pb-8 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16" >
          <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
            <h2 className="text-4xl font-bold text-verdeLogo">Nuestro valores</h2>
            <p className="mt-4 text-gray-600 text-xl">
              Nuestros valores son la base de nuestra misión y guía en nuestro camino: 
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 text-center">
            { valores.map((item, index) => ( valoresConIcono( item.Icon, item.valor, index) )) }
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionWithLinks;