import React from 'react';
import tokenomicsChartAvif from '../../../assets/images/landing/chart.avif'

/* chart imports */

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { useEffect } from 'react';



const Tokenomics = () => {

    useEffect(()=>{
        // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("chartdiv", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.legend = new am4charts.Legend();


    chart.data = [
        {
            country: "Marketing tokens",
            amount: "5.000,000,000 $ZOO",
            litres: 18,
            color: am4core.color("#e7b649")
        },
        {
            country: "Airdrop to incentivize adoption",
            amount: "5.000,000,000 $ZOO",
            litres: 18,
            color: am4core.color("#f9d98d")
        },
        {
            country: "Liquid market",
            amount: "40.000,000,000 $ZOO",
            litres: 144,
            color: am4core.color("#13a455")
        },
        {
            country: "Presale",
            amount: "20.000,000,000 $ZOO",
            litres: 72,
            color: am4core.color("#f8ce78")
        },
        {
            country: "Team collection",
            amount: "15.000,000,000 $ZOO",
            litres: 54,
            color: am4core.color("#e9ae31")
        },
        {
            country: "Burn system",
            amount: "10.000,000,000 $ZOO",
            litres: 35,
            color: am4core.color("#f5d07f")
        },
        {
            country: "Advisor team",
            amount: "5.000,000,000 $ZOO",
            litres: 19,
            color: am4core.color("#17b35e")
        },
    ];

    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";

    series.labels.template.properties.fontFamily= "Circular"
    series.labels.template.properties.fontSize = "1.5em"
    series.labels.template.fill = "#fff"
    series.labels.template.text = '{category}\n[#86ffa1]{amount}'

    
    series.hiddenInLegend = true
    series.slices.template.propertyFields.fill = "color";

    series.ticks.template.strokeWidth = 2;
    series.ticks.template.stroke = "#fff"
    series.ticks.template.strokeOpacity = 0.7;
    series.ticks.template.margin = 10;

    let fillModifier = new am4core.LinearGradientModifier();
    fillModifier.opacities = [1, 0.9];
    fillModifier.offsets = [0.5, 0.8];
    //fillModifier.gradient.rotation = 90;
        
    series.slices.template.fillModifier = fillModifier
   

    })

    return (
        <div className='tokenomicsWrapper'>
            <h5 className='introductionTitle'>Tokenomics</h5>
            <div className='tokenomicsChartWrapper'>
            <div id="chartdiv" style={{ width: "100%", height: "500px", marginBottom: "10%"}}></div>
            </div>
        </div>
    );
}

export default Tokenomics;