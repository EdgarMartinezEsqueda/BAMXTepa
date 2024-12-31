import logo from "assets/logo/logo.png";
import logoBN from "assets/logo/logoModoOscuro.png";

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';

const Footer = () => {
    return (
        <footer aria-label="Site Footer" className="bg-footer">
        <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className=" max-lg:flex max-lg:flex-col justify-center items-center">
              <div className="flex justify-center text-teal-600 ">
                <a href="/">
                  <img src={ logoBN } alt="Banco Diocesano de los Altos" className="h-24"/>
                </a>
              </div>
              <p className="mt-6 max-w-md text-center leading-relaxed text-gris sm:max-w max-lg:w-screen max-lg:flex lg:text-left max-lg:p-2" >
              Unidos por la solidaridad, alimentando esperanzas. ¡Gracias por apoyar nuestra misión de combatir el hambre en nuestra comunidad!
              </p>
              <ul className="mt-8 flex  gap-6 lg:justify-start md:gap-8">
                <li>
                  <a href="https://www.facebook.com/BAMXTepatitlan" rel="noreferrer" target="_blank" className="text-amarilloLogo transition hover:text-amarilloLogo/75" >
                    <span className="sr-only">Facebook</span>
                   <FacebookOutlinedIcon/>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/bamxtepatitlan/" rel="noreferrer" target="_blank" className="text-amarilloLogo transition hover:text-amarilloLogo/75" >
                    <span className="sr-only">Instagram</span>
                    <InstagramIcon/>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/bamxtepatitlan" rel="noreferrer" target="_blank" className="text-amarilloLogo transition hover:text-amarilloLogo/75" >
                    <span className="sr-only">Twitter</span>
                    <TwitterIcon/>
                  </a>
                </li>
              </ul>
            </div>
      
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2" >         
              <div className="text-center sm:text-left max-sm:hidden">
                <p className="text-lg font-bolder text-white">Puede interesarte</p>
                <nav aria-label="Footer Helpful Nav" className="mt-8">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <a className="text-gris transition hover:text-gris/75" href="/nosotros" >
                        Nosotros
                      </a>
                    </li>
                    <li>
                      <a className="text-gris transition hover:text-gris/75" href="/faqs" >
                        Preguntas frecuentes
                      </a>
                    </li>
                    <li>
                      <a className="text-gris transition hover:text-gris/75" href="/donar" >
                        Donación
                      </a>
                    </li>
                    <li>
                      <a className="text-gris transition hover:text-gris/75" href="/programas" >
                        Programas
                      </a>
                    </li>
                    <li>
                      <a className="text-gris transition hover:text-gris/75" href="/voluntario" >
                        Voluntariado
                      </a>
                    </li>
                    <li>
                      <a className="text-gris transition hover:text-gris/75" href="/contacto" >
                        Contacto
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
      
              <div className="text-center sm:text-left">
                <p className="text-lg font-bolder text-white">Contáctanos</p>
                <ul className="mt-8 space-y-4 text-sm ">
                  <li>
                    <a className="flex items-center justify-center gap-1.5 sm:justify-start text-rojoLogo" href="mailto:direccion@batepa.mx" >
                      < MailOutlineIcon/>
                      <span className="text-gris">direcciongeneral@batepa.mx</span>
                    </a>
                  </li>
      
                  <li>
                    <a className="flex items-center justify-center gap-1.5 sm:justify-start text-rojoLogo"  >
                      < PhoneIcon />
                      <span className="text-gris">378 782 5552</span>
                    </a>
                  </li>
      
                  <li>
                    <a  href="https://maps.app.goo.gl/bBGdrrAYg48dcdtE8" target="_blank" className="flex items-start justify-center gap-1.5 sm:justify-start text-rojoLogo">
                      < PlaceIcon />
                      <span className="text-gris">Terrerito #1326, Tepatitlán de Morelos, Jalisco</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      
          <div className="mt-12 border-t border-gray-100 pt-6">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <p className="text-sm text-gray-500">
                <span className="block sm:inline">Todos los derechos reservados | </span>
                <span>&middot;</span>
                <a className="inline-block text-teal-600 underline transition hover:text-teal-600/75" href="/politica" >
                  Política de privacidad
                </a>
              </p>
      
              <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0" >
                &copy; 2024 Banco Diocesano de los Altos
              </p>
            </div>
          </div>
        </div>
      </footer>      
    );
};

export default Footer;