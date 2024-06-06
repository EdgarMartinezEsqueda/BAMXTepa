
export default function Donate() {
  return (
    <div className="w-full max-w-5xl mx-auto py-12 md:py-24 lg:py-32 text-2xl">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tighter md:text-4xl/tight text-verdeLogo">¡Ayúdanos a hacer la diferencia!</h1>
          <p className="text-gray-500 md:text-2xl/relaxed dark:text-gray-400">
            En el Banco Diocesano de Alimentos de los Altos distribuímos ayudamos a más de 4,700 familias de la zona de Los Altos de Jalisco y Nochistlán (en el estado de Zacatecas).
          </p>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p>CLABE Interbancaria:</p>
              
              <div className="flex items-center ">
                <p className="px-4">{import.meta.env.VITE_clabe}</p>
                <button
                variant="ghost"
                size="icon"
                onClick={() => navigator.clipboard.writeText(import.meta.env.VITE_cuenta)}
                className="hover:text-verdeLogo"
              >
                <ContentCopyIcon className="h-5 w-5" />
              </button></div>
            </div>
            <div className="flex items-center justify-between">
              <p>Cuenta BANBAJIO:</p>
              <div className="flex items-center ">
                <p className="px-4">{import.meta.env.VITE_cuenta}</p>
                <button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigator.clipboard.writeText(import.meta.env.VITE_cuenta)}
                  className="hover:text-verdeLogo"
                >
                  <ContentCopyIcon className="h-5 w-5" />
                </button>
              </div>
              
            </div>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 md:p-8 text-xl">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Nuestra Misión</h3>
            <p className="text-gray-500 dark:text-gray-400">
            Nuestro objetivo principal es combatir el hambre y la inseguridad alimentaria en la región, rescatando alimentos a lo largo de toda la región para distribuirlos a familias, comunidades e instituciones
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Su aportación, sea cual sea la cantidad, puede ayudarnos a continuar nuestra labor y ampliar nuestro alcance. Nos comprometemos a utilizar su donación de forma responsable y transparente para garantizar que tenga el mayor impacto posible.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Gracias por considerar una donación al Banco de Alimentos de Tepatitlán. Juntos, podemos marcar la diferencia.
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
