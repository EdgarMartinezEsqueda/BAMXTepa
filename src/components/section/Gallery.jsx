// const images = Object.keys( import.meta.glob("../../assets/gallery/*") ).map( url => new URL(url, import.meta.url).href ); // get all images from the gallery folder
const images = [...Array(7).keys()].map( n => new URL(`../../assets/gallery/Image_${n+1}.webp`, import.meta.url).href ); // get only 6 images from the gallery folder

const Gallery = () => {
    return (
      <section className="overflow-hidden text-neutral-700 bg-bgClaro py-8">
        <div className="container mx-auto lg:px-32 lg:pt-24 text-center">
          <h2 className="font-bold text-4xl text-verdeLogo">Galería de imagenes</h2>
          <p className="font-normal mt-4 text-xl">Explora nuestro trabajo y impacto en la comunidad a través de estas imágenes.</p>
        </div>
        <div className="container mx-auto px-5 py-4 lg:px-32 lg:pt-8">
          <div className="-m-1 flex flex-wrap max-md:flex-col md:-m-2">
            <div className="flex sm:w-1/2 h-1/4 flex-wrap">
              <div className="w-1/2 p-1 md:p-2">
                <img alt="gallery" className="block h-full w-full rounded-lg max-h-80 object-cover object-center" src={ images[2] } />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img alt="gallery" className="block h-full w-full rounded-lg max-h-80 object-cover object-center" src={ images[0] } />
              </div>
              <div className="w-full p-1 md:p-2">
                <img alt="gallery" className="block h-full w-full rounded-lg max-h-80 object-cover object-center" src={ images[1] } />
              </div>
            </div>
            <div className="flex sm:w-1/2 h-1/ flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img alt="gallery" className="block h-full w-full rounded-lg max-h-80 object-cover object-center" src={ images[3] } />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img alt="gallery" className="block h-full w-full rounded-lg max-h-80 object-cover object-center" src={ images[4] } />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img alt="gallery" className="block h-full w-full rounded-lg max-h-80 object-cover object-center" src={ images[5] } />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Gallery;