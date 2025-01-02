import Diversity1Icon from '@mui/icons-material/Diversity1';
import FamilyRestroomOutlinedIcon from '@mui/icons-material/FamilyRestroomOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import FoodBankOutlinedIcon from '@mui/icons-material/FoodBankOutlined';

const data = [  // IMPACT SOCIAL 2024
    {
        title: "Familias",
        info: "+6,000",
        icon: FamilyRestroomOutlinedIcon
    },
    {
        title: "Personas",
        info: "+24,000",
        icon: Diversity1Icon
    },
    {
        title: "Instituciones",
        info: "15",
        icon: StoreOutlinedIcon
    },
    {
        title: "Alimento acopiado",
        info: "100,000KG",
        icon: FoodBankOutlinedIcon
    }
];

const SocialImpactCard = (title, info, Icon, index) =>{
    return (
        <div className="block rounded-xl p-4 focus:outline-none focus:ring" key={index}>
            <span className="inline-block text-amarilloLogo hover:text-rojoLogo">
                {< Icon className="text-large" />}
            </span>
            <p className="mt-2 text-3xl font-bold">{ info }</p>
            <p className="mt-2 text-xl font-normal">{ title }</p>
        </div>
    )
}
const SocialImpact = () => {
    return (
    <section className="sm:w-2/3 m-auto">
        <div className="grid grid-cols-2 sm:gap-4 md:grid-cols-4 text-center">
            { data.map((item, index) => (
                SocialImpactCard(item.title, item.info, item.icon, index)
            )) }
        </div>
    </section>
    );
}

export default SocialImpact;