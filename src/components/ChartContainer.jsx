import React, { Component } from "react";
import ReactDOM from "react-dom"
import Chart from 'chart.js'

import chartOptions from "../libs/chartOptions"

import { arrayToUniqValuesByKey, arrayFilteredByConditions } from "../libs/aggregation";

class ChartContainer extends Component {

  initializeChart() {
    const labels = arrayToUniqValuesByKey( this.props.data, "year" )
    const datasets = this.getData();

    const chartData = {
      labels: labels,
      datasets: datasets
    };

    const el = ReactDOM.findDOMNode( this );
    el.height = el.parentNode.clientHeight;
    el.width = el.parentNode.clientWidth;
    const ctx = el.getContext( "2d" );

    Chart.defaults.global.legend.display = false;

    Chart.defaults.global.tooltips.backgroundColor = "rgba( 255, 255, 255, 1 )"
    Chart.defaults.global.tooltips.bodyFontColor = "#777777"
    Chart.defaults.global.tooltips.titleFontColor = "#777777"
    Chart.defaults.global.tooltips.titleFontStyle = "normal"
    Chart.defaults.global.tooltips.bodyFontStyle = "lighter"
    Chart.defaults.global.tooltips.caretSize = 0
    Chart.defaults.global.tooltips.cornerRadius = 0
    Chart.defaults.global.tooltips.displayColors = false
    Chart.defaults.global.elements.point.radius = 4;
    Chart.defaults.global.elements.point.hoverRadius = 5;


    const chart = new Chart( ctx, {
        type: 'line',
        data: chartData,
        options: chartOptions
      } )

    this.props.dispatch( { type: "ADD_CHART", chart } );
  }

  componentDidMount() {
    this.initializeChart()
  }

  getData() {
    const data = this.props.sectorNames.map( ( sectorName, index ) => {
      const dataFilteredByConditons = arrayFilteredByConditions( this.props.data, [["name", sectorName],[ "emission", this.props.emissionName ]] );
      const dataMappedByKey = arrayToUniqValuesByKey( dataFilteredByConditons, "value" );
      return { data: dataMappedByKey, fill: false, borderColor: this.props.sectorColors[index], label: sectorName }
    })
    return data
  }

  render() {
    if ( this.props.chart ) {
      const chart = this.props.chart;
      chart.data.datasets = this.getData();
      chart.update();
    }

    return(
      <canvas></canvas>
    )
  }

}

export default ChartContainer;
