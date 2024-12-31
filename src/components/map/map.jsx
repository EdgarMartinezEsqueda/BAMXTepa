import Highcharts from "highcharts/highmaps";
import HighchartsReact from 'highcharts-react-official'

import data from "./jalisco.json";

const options = {
    series: data, 
    title: {
        text: ''
    },
    legend: { enabled: false },
    credits: { enabled: false },
    tooltip: {
        shared: true,
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><td>Localidad: </td>' +
            '<td style="text-align: right"><b>{point.name}</b></td></tr>',
        footerFormat: '</table>'
    },
};
export default function Mapa(){
    return (
        <div className="md:flex md:items-center">
            <div className="p-8 lg:p-32 md:w-2/3">
                <h2 className="font-bold text-verdeLogo text-4xl max-md:text-center max-md:w-full">Municipios a los que llegamos</h2>
                <p className="text-xl mt-8">
                    En nuestro compromiso por combatir el hambre, llegamos a más de 85 comunidades en 14 municipios de la región (13 en Jalisco y 1 en Zacatecas).
                </p>
                <p className=" max-md:hidden text-xl my-1">
                    Desde pequeños poblados hasta barrios urbanos, trabajamos incansablemente para llevar esperanza y nutrición.
                </p>
            </div>
            <div className="w-full max-md:w-11/12 max-md:mx-auto lg:w-1/3">
            <HighchartsReact 
                highcharts={Highcharts}
                constructorType = {'mapChart'}
                options={options}
            />
            </div>
        </div>
    )
}