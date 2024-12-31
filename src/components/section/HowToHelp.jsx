import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import PaidIcon from '@mui/icons-material/Paid';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

const ayudaConEnlace = (Icon, modoAyuda, descripcion, enlace, index) =>{
  return (
    <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" key={index}>
      <h2 className="mt-2 font-normal text-amarilloLogo">{ modoAyuda }</h2>
      <a className="inline-block rounded-full bg-gray-50 text-rojoLogo" href={enlace}>
        {< Icon />}
      </a>
      <p className="mt-2 font-normal">{ descripcion }</p>
    </div>
  )
}

const HowToHelp = () => {
  const ayuda = [
    { 
      Icon: PaidIcon,
      title: "Donaciones económicas",
      description: "Aporta para la compra de alimentos esenciales y mantener nuestras operaciones activas.", 
      donateLink: "/donar" 
    },
    { 
      Icon: FoodBankIcon,
      title: "Donación de Alimentos",
      description: "Contribuye con alimentos para garantizar que más familias tengan acceso a comida saludable.", 
      donateLink: "/contacto" 
    },
    { 
      Icon: VolunteerActivismIcon,
      title: "Voluntariado",
      description: "Dona tu tiempo y energía para ayudar con la recolección, clasificación o entrega de alimentos.", 
      donateLink: "/contacto" 
    },
    { 
      Icon: MiscellaneousServicesIcon,
      title: "Servicio",
      description: "Comparte tu experiencia para fortalecer nuestra misión: desde transporte hasta diseño.", 
      donateLink: "/contacto" 
    },
  ];
    return (
    <section className="p-20">
      <h1 className="font-omnes font-bold text-verdeLogo text-3xl max-lg:text-center">Haz la Diferencia: Súmate a Nuestra Misión</h1>
      <div className="flex">
        <div className="text-2xl lg:pr-12 w-full">
          <div>
            <p>Con tu apoyo, podemos,<strong className="bg-amarilloLogo text-white px-2 rounded-md">transformar vidas</strong> y <strong className="bg-amarilloLogo text-white px-2 rounded-md">combatir el hambre</strong>en nuestra comunidad. Descubre cómo puedes contribuir y sé parte del cambio.</p>
          </div>
          <div className="grid gap-4 lg:grid-cols-2 text-center">
            { ayuda.map((item, index) => ( ayudaConEnlace( item.Icon, item.title, item.description, item.donateLink, index) )) }
          </div>
        </div>
        <div className="md:w-1/3 max-lg:hidden">
          <div className="bg-happyGirl w-full h-full bg-center bg-cover rounded-full" alt="" />
        </div>
      </div>
      
    </section>
    );
}

export default HowToHelp;