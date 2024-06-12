import { useState, useEffect } from 'react';
import LoadingImage from "../../assets/loading.png"

const data = [
    { 
        "title": "2007", 
        "description": "El Banco Diocesano de Alimentos de Tepatitlán se funda, marcando el inicio de una misión para combatir el hambre en nuestra comunidad."},
    { 
        "title": "2009", 
        "description": "El Ayuntamiento de Tepatitlán nos otorga un terreno en comodato, proporcionando un espacio físico para nuestras operaciones."},
    { 
        "title": "2013", 
        "description": "Adquirimos vehículos que nos permiten extender nuestra ayuda a los municipios de la zona de Los Altos."},
    { 
        "title": "2015", 
        "description": "Inauguramos nuestro propio edificio de instalaciones, consolidando nuestra presencia y capacidad operativa."},
    { 
        "title": "2016", 
        "description": " Se inaugura nuestra panadería, ampliando los tipos de alimentos que podemos ofrecer a nuestros beneficiarios."},
    { 
        "title": "2017", 
        "description": "Se inaugura la tortillería, proporcionando un producto esencial para las mesas de nuestras familias beneficiarias."},
    { 
        "title": "2019", 
        "description": "Instalamos una planta procesadora de alimentos, lo que nos permite ofrecer productos fuera de temporada y alimentos preparados."},
    { 
        "title": "2022", 
        "description": "Obtenemos la certificación ISO 22000-2018, demostrando nuestro compromiso con la seguridad y calidad alimentaria."},
]
const images = [...Array( data.length ).keys()].map( n => new URL(`../../assets/carousel/${n}.jpg`, import.meta.url).href ); // get only 6 images from the gallery folder

const Arrow = ({ arrowStyle }) => {
  return (
    <svg
      width="16"
      height="26"
      viewBox="0 0 16 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`cursor-pointer z-50 ${arrowStyle}`}
    >
      <path
        d="M13.8462 2L2 13L13.8462 24"
        stroke="#f2f2f2"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const decreseIndex = () => {
    setCurrentIndex(prevIndex => prevIndex <= 0 ? images.length - 1 : prevIndex - 1);
  };

  const increseIndex = () => {
    setCurrentIndex(prevIndex => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
  };

  useEffect(() => {
    setLoading(true);
  }, [currentIndex]);

  return (
    <div className="w-3/4 flex justify-center items-center overflow-hidden">
      <div className="w-full relative">
        <div className="absolute inset-y-0 top-1/2 left-3 w-5 flex" onClick={decreseIndex}>
          <Arrow />
        </div>
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((img, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={loading ? LoadingImage : img}
                alt="Multiple images for slide and show"
                className="object-cover w-full lg:h-[600px] sm:h-[400px]"
                onLoad={() => setLoading(false)}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 right-2 w-5 flex top-1/2" onClick={increseIndex}>
          <Arrow arrowStyle="rotate-180" />
        </div>
        {/* text portion */}
        <div className="absolute bottom-6 inset-x-0">
          {data.map((textdata, index) => {
            if (currentIndex === index) {
              return (
                <div key={index} className="text-white flex justify-center flex-col text-center bg-verdeLogo/[0.7]">
                  <h2 className="text-3xl">{textdata.title}</h2>
                  <span className="text-xl">
                    <p>{textdata.description}</p>
                  </span>
                </div>
              );
            } else return null;
          })}
        </div>
        {/* custom dot portion */}
        <div className="absolute bottom-2 inset-x-0 flex flex-row gap-2 justify-center">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 ${currentIndex === index ? 'bg-gray-400' : 'bg-gray-600'} rounded-[50%] cursor-pointer`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;