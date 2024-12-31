
export default function Donate() {
  return (
    <div className="lg:max-w-5xl py-12 md:py-24 lg:py-32 text-2xl max-lg:m-12 mx-auto">
      <div className="sm:grid lg:grid-cols-2 gap-8 md:gap-12 ">
        <div className="space-y-4 flex flex-col justify-center">
          <h1 className=" font-omnes text-4xl font-bold tracking-tighter text-verdeLogo">¡Haz la Diferencia Hoy!</h1>
          <p className="text-gray-500 md:text-2xl/relaxed dark:text-gray-400">
            Apoyamos a más de 6,000 familias mensualmente en Los Altos de Jalisco y Nochistlán, Zacatecas.
          </p>
          <p className="text-gray-500 md:text-2xl/relaxed dark:text-gray-400">
            Con tu ayuda, podemos continuar nuestra misión de combatir el hambre y brindar esperanza a quienes más lo necesitan.
          </p>
          <div className="space-y-2">
            <div className="sm:flex items-center justify-between">
              <p className="text-amarilloLogo">CLABE Interbancaria:</p>
              <div className="flex items-center">
                <p className="sm:px-4">{import.meta.env.VITE_clabe}</p>
                <button variant="ghost" size="icon" onClick={() => navigator.clipboard.writeText(import.meta.env.VITE_clabe)} className="hover:text-verdeLogo" >
                  <ContentCopyIcon className="h-5 w-5 max-sm:ml-4" /> 
                </button>
              </div>
            </div>
            <div className="sm:flex items-center justify-between">
              <p className="text-amarilloLogo">Cuenta BANBAJIO:</p>
              <div className="flex items-center ">
                <p className="sm:px-4">{import.meta.env.VITE_cuenta}</p>
                <button variant="ghost" size="icon" onClick={() => navigator.clipboard.writeText(import.meta.env.VITE_cuenta)} className="hover:text-verdeLogo" >
                  <ContentCopyIcon className="h-5 w-5 max-sm:ml-4" />
                </button>
              </div>
            </div>
            <div className="sm:flex items-center justify-between">
              <p className="text-amarilloLogo">Paypal</p>
                <div className="flex items-end ">
                  <a className="sm:px-4 text-azulCielo" href={import.meta.env.VITE_paypal} target="_blank">Donar</a>
                </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-xl">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Nuestra Misión</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Nuestro objetivo es combatir el hambre y la inseguridad alimentaria, rescatando alimentos en toda la región para distribuirlos entre familias, comunidades e instituciones.
            </p>
            <p className="text-gray-500 dark:text-gray-400 max-sm:hidden">
              Cada donación, sin importar el monto, contribuye a continuar nuestra labor y ampliar nuestro impacto. Nos comprometemos a usar tu apoyo de manera responsable y transparente, asegurando que cada peso se traduzca en alimentos y esperanza para quienes lo necesitan.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Gracias por confiar en nosotros y ser parte de este cambio positivo. ¡Hagamos la diferencia, juntos!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ContentCopyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
}
