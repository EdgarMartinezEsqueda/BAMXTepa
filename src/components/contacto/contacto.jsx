import imagenContacto from "assets/home/image_3.webp"

export default function Home() {
  return (
    <section className="text-gray-700 body-font relative">
      <div className="absolute inset-0 bg-gray-300">
        <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0Banco%20de%20Alimentos%20de%20Tepa&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" className="grayscale contrast-125 opacity-40"></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <form className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10" action="/" method="POST">
          <h2 className="text-gray-900 text-xl mb-1 font-bold">Tu opinión nos importa</h2>
          <p className="leading-relaxed mb-5 text-gray-600">Queremos escucharte: tus sugerencias, ideas o comentarios nos ayudan a crecer. </p>
          <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Ingrese su correo electrónico" type="email"/>
          <textarea className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none" placeholder="Escribe tu mensaje"></textarea>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Enviar</button>
          <p className="text-xs text-gray-500 mt-3">Nos pondremos en contacto contigo si es necesario. Juntos, podemos hacer la diferencia.</p>
          <strong className="text-verdeLogo text-center text-xl">¡Gracias por tu apoyo!</strong> 
        </form>
      </div>
    </section>
  )
}
