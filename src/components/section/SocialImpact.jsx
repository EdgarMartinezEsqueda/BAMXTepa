import IconPan from "assets/icons/pan.png";
import IconAlimento from "assets/icons/alimento.png";
import IconConcha from "assets/icons/concha.png";
import IconDespensa from "assets/icons/despensa.png";
import IconFrutas from "assets/icons/frutas.png";
import IconTortilla from "assets/icons/tortilla.png";

const data = [  // IMPACT SOCIAL 2024
    {
        title: "Paquetes alimentarios",
        info: "58,395 paquetes",
        icon: IconDespensa
    },
    {
        title: "Alimento no perecedero",
        info: "592,311 kilogramos",
        icon: IconAlimento
    },
    {
        title: "Frutas y verduras",
        info: "419,033 kilogramos",
        icon: IconFrutas
    },
    {
        title: "Tortillas",
        info: "94,140 kilogramos",
        icon: IconTortilla
    },
    {
        title: "Bollo",
        info: "264,771 piezas",
        icon: IconPan
    },
    {
        title: "Conchas",
        info: "264,771 piezas",
        icon: IconConcha
    }
];

const SocialImpactCard = (title, info, icon, index) =>{
    return (
        <div className="block rounded-xl p-4 focus:outline-none focus:ring text-3xl max-lg:text-2xl " key={index}>
            <h2 className="p-2 h-1/3">{title}</h2>
            <div className=" rounded-full flex justify-center items-center m-auto h-1/3 w-32 ">
                <img src={icon} alt="paquete alimentario" className="w-28 h-28"/>
            </div>
            <h2 className="font-bold p-2 text-amarilloLogo h-1/3">{info.split(" ")[0]} <div div className="text-rojoLogo">{info.split(" ")[1]}</div></h2>
        </div>
    )
}
const SocialImpact = () => {
    return (
    <section className="sm:w-2/3 m-auto py-6">
        <h1 className="text-4xl text-center text-verdeLogo">Impacto social 2024</h1>
        <div className="grid grid-cols-2 sm:gap-4 md:grid-cols-3 text-center">
            { data.map((item, index) => (
                SocialImpactCard(item.title, item.info, item.icon, index)
            )) }
        </div>
    </section>
    );
}

export default SocialImpact;