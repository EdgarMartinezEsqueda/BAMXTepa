import BlogCard from "./BlogCard";
// La idea aquí es que con ayuda de alguna API (como graph de meta) obtener las ultimas n publicaciones de la página de facebook
// Pero en lo que eso pasa, pues a hacer a mano para ver como quedaría

const Blog = () => {
    return (
      <div className="bg-white font-light">
        <h2 className="text-center text-4xl font-bold tracking-tight pt-12 text-verdeLogo">
            Nuestro Blog
          </h2>
        <div className="flex flex-wrap w-full mx-auto justify-center items-center lg:px-0 px-4 lg:py-16 py-2">
            <BlogCard data = { {
              content: "Durante el mes de mayo luchamos contra el hambre a través de nuestra colecta #KilosPorLaNutricion buscando la donación de alimento básico como: frijol, arroz, aceite, lentejas, etc 🍚🤗\nConoce cómo estos son de suma importancia para los Bancos de Alimentos y para las comunidades atendidas a través de la Red BAMX 💪 \n#RedBAMX #AlimentoBasico",
              uri: "https://scontent.fgdl5-4.fna.fbcdn.net/v/t39.30808-6/436470151_741637214836499_5119443060105487322_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QcG5TpVdoncQ7kNvgHnNRkN&_nc_ht=scontent.fgdl5-4.fna&oh=00_AYCE8NA9fl-XdTC6FxTnxdWiGqGvDzd0k3ygFtH5yyRYzQ&oe=66497E42",
              redirect: ""
            } } />
            <BlogCard data = { {
              content: "El trabajo duro siempre da buenos frutos, y en este Día del Trabajo queremos compartir contigo algunos de nuestros los resultados del informe 2023.\n¡Descubre nuestras metas alcanzadas! 🌟\n#RedBAMX #NosLlenaAlimentar #Logros",
              uri: "https://scontent.fgdl5-2.fna.fbcdn.net/v/t39.30808-6/440795429_733248652342022_7260290730274891263_n.jpg?stp=c0.5000x0.3300f_dst-jpg_e15_p1115x1115_q60_tt1_u&efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV91cmwifQ&_nc_cid=0&_nc_ad=z-m&_nc_rml=0&_nc_ht=scontent.fgdl5-2.fna&_nc_cat=107&_nc_ohc=97CmZZnf5kwQ7kNvgEnyueH&ccb=1-7&_nc_sid=5f2048&oh=00_AYAa1fiHdG3m0qW4gBEyuj9xT3qKKNfOslvuXqdVn-S8sQ&oe=664984D3",
              redirect: ""
            } } />
            <BlogCard data = { {
              content: "¡La alimentación es un derecho básico de todos l@s niñ@s! 💪 Conviértete en un #InversionistaBAMX y sigamos invirtiendo en la alimentación de estas nuevas generaciones 🙌🍏\nObtén todos los detalles dando click en el link de nuestra bio o en www.bamx.org.mx/dona-efectivo/ \n#DiadelNiño #HambreCero #Superheroes #RedBAMX",
              uri: "https://scontent.fgdl5-4.fna.fbcdn.net/v/t39.30808-6/440962516_733246639008890_5158948751424600647_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bSp8P7xp_1YQ7kNvgHV3AhD&_nc_oc=Adi2Ifhd3efRHm-ik_CUVGTNnUONBOiO6wZcDM39zdShuGx47wIFLcyWfxAEX88c7GA&_nc_ht=scontent.fgdl5-4.fna&oh=00_AYAR2LLaRX2O2NV-77TZ_h1PpY8EBLFMJDYL4cbi7R8pjw&oe=6649775A",
              redirect: ""
            } } />
            <BlogCard data = { {
              content: "🌎🌿¡Celebra el Día de la Tierra desde la comodidad de tu hogar! Recuerda que las pequeñas acciones generan un gran impacto🌸#DiadelaTierra#RedBAMXVerde#Sostenibilidad",
              uri: "https://scontent.fgdl5-4.fna.fbcdn.net/v/t39.30808-6/439647005_729102976089923_6301917238654910712_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1RHrXMf4M1MQ7kNvgF31KSt&_nc_ht=scontent.fgdl5-4.fna&oh=00_AYDLX29byOxpGz2OwWh4mprBC7gcLhPoxu_onQ5QwPtLng&oe=66497975",
              redirect: ""
            } } />
        </div>
      </div>
    );
};

export default Blog;
