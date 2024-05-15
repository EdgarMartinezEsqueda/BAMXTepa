import Highcharts from "highcharts/highmaps";
import HighchartsReact from 'highcharts-react-official'

import data from "./jalisco.json";

const options = {
    series: data, 
    title: {
        text: ''
    },
    legend: { enabled: false },
    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },
};
console.log(data);
export default function Mapa(){
    return (
        <div className="bg-bgClaro">
        <HighchartsReact 
        highcharts={Highcharts}
        constructorType = {'mapChart'}
        options={options}
        />
        </div>
    )
}