import Image from 'next/image'
import logo from "@/assets/logo/logo.png";
import Link from 'next/link'
export default function Nav() {
    return (
        <nav className='shadow-lg border-x-1'>
            <div className='flex py-4 px-2'>
                <div className='basis-1/4'>
                    <Image className='relative'
                    src={logo}
                    width={100}
                    height={100}
                    alt="Logo Banco Diocesano de Alimentos de los Altos"/>
                </div>
                <ul className='basis-3/4 flex flex-wrap'>
                    <li className='w-30 text-center'>
                        <Link href="/">Inicio</Link>
                    </li>
                    <li className='basis-1/4 text-center'>
                        <Link href="/nosotros">Nosotros</Link>
                    </li>
                    <li className='basis-1/4 text-center'>
                        <Link href="/donacion">Donación</Link>
                    </li>
                    <li className='basis-1/4 text-center'>
                        <Link href="/contacto">Contacto</Link>
                    </li>
                    <li className='basis-1/4 text-center'>
                        <Link href="/programas">Programas</Link>
                    </li>
                    <li className='basis-1/4 text-center'>
                        <Link href="/voluntariado">Voluntariado</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
  }
  