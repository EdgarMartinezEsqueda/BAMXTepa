import Logo from "assets/logo/logo.png";

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => { 
  return (
    <header id="site-header" aria-label="Site Header" className="sticky top-0 py-2 z-10 bg-gray-100 ">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8" >
        <div className="flex items-center gap-4">
          <a href="/" className="flex">
            <span className="sr-only">Logo Banco de Alimentos</span>
            <span className="inline-block w-44 ">
              <img src={Logo} width={100} height={100} alt="Logo Banco Diocesano de Alimentos de los Altos" />
            </span>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-end gap-8">
          <nav aria-label="Site Nav" id="navbar" className={`fixed top-0 left-0 right-0 bottom-0 flex text-center justify-center flex-col text-grisLogo max-lg:opacity-80 max-lg:w-screen max-lg:h-screen max-lg:top-0 max-lg:left-0 lg:static lg:flex-row lg:gap-4 text-xl max-md:text-lg lg:font-bold lg:uppercase lg:tracking-wide`} >
            <a href="/nosotros" className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-amarilloLogo opacity-100" >
              Nosotros
            </a>
            <a href="/programas" className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-amarilloLogo opacity-100" >
              Programas
            </a>
            <a href="/voluntario" className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-amarilloLogo opacity-100" >
              Voluntariado
            </a>
            <a href="/donar" className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-amarilloLogo opacity-100" >
              Donación
            </a>
            <a href="/contacto" className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-amarilloLogo opacity-100" >
              Contacto
            </a>
          </nav>
    
        </div>
      </div>
    </header>
  ); 
}; 

export default Header;