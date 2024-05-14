const Banner = () => {
  return (
    <section className="relative bg-banner bg-cover bg-center bg-no-repeat" >
      <div className="absolute inset-0 bg-primary/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/95 " ></div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8" >
        <div className="max-w-xl text-center sm:text-left text-white">
          <h1 className="text-3xl font-extrabold sm:text-5xl ">
              Alimento que
              <strong className="block font-extrabold text-rojoLogo">
              impulsa
              </strong>
              el desarrollo
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            Cada gesto de solidaridad se convierte en alimento para quienes más lo necesitan. ¡Únete a nuestra misión!
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a href="/productos" className="block w-full rounded bg-verdeLogo px-12 py-3 text-sm font-bolder text-white shadow hover:bg-verdeLogo/70 focus:outline-none focus:ring active:bg-verdeLogo-500 sm:w-auto " >
                Saber más
              </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;