

export default function Home() {
  return (
<section>
  <div className="relative w-full h-96"><img className="absolute h-full w-full object-cover object-center" src="https://scontent.fgdl14-1.fna.fbcdn.net/v/t39.30808-6/277574920_1886141125118487_6405027824439256273_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dY1n_NUplxoQ7kNvgEtSaSd&_nc_ht=scontent.fgdl14-1.fna&oh=00_AYAcO45QFnlRR9c_J7-DCa4qnHjNoEj-cFYX3DVF-b1Rgw&oe=66779A5D" alt="nature image" />
    <div className="absolute inset-0 h-full w-full bg-black/50"></div>
    <div className="relative pt-28 text-center">
      <h2 className="block antialiased tracking-normal font-semibold leading-[1.3] text-white mb-4 text-3xl lg:text-4xl">Información de contacto</h2>
      <p className="block antialiased text-2xl leading-relaxed text-white mb-9 opacity-90 px-8">Para cualquier consulta o información adicional, no dudes en contactarnos.
</p>
    </div>
  </div>
  <div className="-mt-16 mb-8 px-8 ">
    <div className="container mx-auto">
      <div className="py-12 flex justify-center rounded-xl border border-white bg-white shadow-md shadow-black/5 saturate-200">
        <div className="my-8 grid gap-6 px-4 w-1/3 max-lg:hidden">
          <div className="flex items-center gap-4 w-5/6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fdb913" aria-hidden="true" className="!h-6 !w-6">
              <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
            </svg>
            <div>
              <p className="block antialiased text-base leading-relaxed text-inherit font-bold ">Terrerito #1326, La Puerta, Tepatitlán de Morelos</p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8870.840153673575!2d-102.73728981295088!3d20.802255106717674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429262b38e504dd%3A0xf4f3353f8d429646!2sBANCO%20DE%20ALIMENTOS%20DE%20TEPA!5e0!3m2!1ses-419!2smx!4v1717772693578!5m2!1ses-419!2smx" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full"></iframe>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fdb913" aria-hidden="true" className="h-6 w-6">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd"></path>
            </svg>
            <p className="block antialiased text-base leading-relaxed text-inherit font-bold">378 782 5552</p>
          </div>
          <div className="flex items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fdb913" aria-hidden="true" className="h-6 w-6">
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"></path>
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"></path>
            </svg>
            <p className="block antialiased text-base leading-relaxed text-inherit font-bold">direcciongeneral@batepa.mx</p>
          </div>
        </div>
        <div className="py-4 w-3/4 lg:w-1/2">
          <form action="#" className="space-y-8">
              <div>
                  <label htmlFor="email" className="block mb-2 text-2xl text-gray-900 dark:text-gray-300">Tu correo</label>
                  <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="tu@correo.com" required/>
              </div>
              <div>
                  <label htmlFor="subject" className="block mb-2 text-2xl text-gray-900 dark:text-gray-300">Asunto</label>
                  <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Déjanos saber en que podemos ayudarte" required/>
              </div>
              <div className="sm:col-span-2">
                  <label htmlFor="message" className="block mb-2 text-2xl text-gray-900 dark:text-gray-400">Tu mensaje</label>
                  <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Deja tu comentario..."></textarea>
              </div>
              <button type="submit" className="py-3 px-5 text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-verdeLogo max-md:w-full">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
