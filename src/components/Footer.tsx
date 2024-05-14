import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo/logo.png";

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
                <Image src={logo} alt="Logo Banco de Alimentos" className="h-16"/>
              </div>
              <p className="mt-6 max-w-md text-center leading-relaxed text-gris sm:max-w max-lg:w-screen max-lg:flex lg:text-left max-lg:p-2" >
              En nuestra panadería, cada mordisco de nuestro pan es una experiencia única que te lleva a un viaje de sabores y texturas, podrás descubrir la complejidad y el equilibrio perfecto de nuestros ingredientes.
              </p>
              <ul className="mt-8 flex  gap-6 lg:justify-start md:gap-8">
                <li>
                  <a href="www.facebook.com" rel="noreferrer" target="_blank" className="text-rosaMexicano transition hover:text-rosaMexicano/75" >
                    <span className="sr-only">Facebook</span>
                   <FacebookOutlinedIcon/>
                  </a>
                </li>
                <li>
                  <a href="www.instagram.com" rel="noreferrer" target="_blank" className="text-rosaMexicano transition hover:text-rosaMexicano/75" >
                    <span className="sr-only">Instagram</span>
                    <InstagramIcon/>
                  </a>
                </li>
                <li>
                  <a href="www.twitter.com" rel="noreferrer" target="_blank" className="text-rosaMexicano transition hover:text-rosaMexicano/75" >
                    <span className="sr-only">Twitter</span>
                    <TwitterIcon/>
                  </a>
                </li>
              </ul>
            </div>
      
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2" >      
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">Productos</p>
                <nav aria-label="Footer Services Nav" className="mt-8">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <a className="text-gris transition hover:text-gris/75" href="/productos/pasteles" >
                        Pasteles y Tartas
                      </a>
                    </li>
                    <li>
                      <a className="text-gris transition hover:text-gris/75" href="/productos/bolleria" >
                        Bollería
                      </a>
                    </li>
                    <li>
                      <a className="text-gris transition hover:text-gris/75" href="/productos/salados" >
                        Salados
                      </a>
                    </li>
                    <li>
                      <a className="text-gris transition hover:text-gris/75" href="/productos/especiales" >
                        Especiales
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
      
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">Puede interesarte</p>
                <nav aria-label="Footer Helpful Nav" className="mt-8">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <a className="text-gris transition hover:text-gris/75" href="/nosotros" >
                        Nuestra Historia
                      </a>
                    </li>
                    <li>
                      <a className="text-gris transition hover:text-gris/75" href="/faqs" >
                        Preguntas frecuentes
                      </a>
                    </li>
                    <li>
                      <a className="text-gris transition hover:text-gris/75" href="/contacto" >
                        Atención al cliente
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
      
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">Contáctanos</p>
      
                <ul className="mt-8 space-y-4 text-sm truncate">
                  <li>
                    <a className="flex items-center justify-center gap-1.5 sm:justify-start text-rosaMexicano" href="mailto:edgar.esqueda@outlook.com" >
                      < MailOutlineIcon/>
                      <span className="text-gris">edgar.esqueda@outlook.com</span>
                    </a>
                  </li>
      
                  <li>
                    <a className="flex items-center justify-center gap-1.5 sm:justify-start text-rosaMexicano" href="/" >
                      < PhoneIcon />
                      <span className="text-gris">012345678</span>
                    </a>
                  </li>
      
                  <li className="flex items-start justify-center gap-1.5 sm:justify-start text-rosaMexicano" >
                    < PlaceIcon />
                    <address className="-mt-0.5 not-italic text-gris">
                      Tepatitlán, Jalisco
                    </address>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      
          <div className="mt-12 border-t border-gray-100 pt-6">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <p className="text-sm text-gray-500">
                <span className="block sm:inline">Todos los derechos reservados</span>
                <span>&middot;</span>
                <a className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                  href="/politica" >
                  Política de privacidad
                </a>
              </p>
      
              <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                &copy; 2024 Banco de Alimentos de los Altos | Todos los derechos reservados
              </p>
            </div>
          </div>
        </div>
      </footer> 
    );
};

export default Footer;