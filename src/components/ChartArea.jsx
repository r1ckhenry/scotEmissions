import React, { Component } from "react";
import ReactDOM from "react-dom"
import Chart from 'chart.js'

import { arrayToUniqValuesByKey, arrayFilteredByConditions } from "../libs/aggregation";

class ChartArea extends Component {

  initializeChart() {
    const labels = arrayToUniqValuesByKey( this.props.data, "year" )
    const datasets = this.getData();
    console.log( datasets, "datasets" )

    const chartData = {
      labels: labels,
      datasets: datasets
    };

    const chartOptions = {
      scales: {
          yAxes: [
            {
              ticks: {
                fontColor: "#ffffff"
              }
            }
          ],
          xAxes: [{
              ticks: {
                fontColor: "#ffffff",
                autoSkip: false,
                maxRotation: 0,
                minRotation: 0
              }
          }]
      }
    }

    const el = ReactDOM.findDOMNode( this );
    el.height = el.parentNode.clientHeight;
    el.width = el.parentNode.clientWidth;
    const ctx = el.getContext( "2d" );

    Chart.defaults.global.legend.display = false;

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

    console.log( "props", this.props )

    return this.props.sectorNames.map( ( sectorName, index ) => {
      const dataFilteredByConditons = arrayFilteredByConditions( this.props.data, [["name", sectorName],[ "emission", this.props.emissionName ]] );
      const dataMappedByKey = arrayToUniqValuesByKey( dataFilteredByConditons, "value" );
      return { data: dataMappedByKey, fill: false, borderColor: this.props.sectorColors[index], label: sectorName }
    })
  }

  render() {

    // const height = ReactDOM.findDOMNode( this ).parentNode.clientHeight;

    if ( this.props.chart ) {
      const chart = this.props.chart;
      chart.data.datasets = this.getData();
      chart.update();
    }

    return(
      <canvas></canvas>
      // React.DOM.canvas({id: "chart", style:{ width: 200, height: 200 } })
    )
  }

}

export default ChartArea;
