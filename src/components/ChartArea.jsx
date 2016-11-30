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
          xAxes: [{
              ticks: {
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
    const sectorNames = arrayToUniqValuesByKey( this.props.data, "name" );
    const sectorColors = [ "#48CFAD", "#967ADC", "#4A89DC", "#ED5565", "#656D78", "#FFCE54", "#4FC1E9", "#FC6E51", "#A0D648", "#EC87C0" ]

    return sectorNames.map( ( sectorName, index ) => {
      const dataFilteredByConditons = arrayFilteredByConditions( this.props.data, [["name", sectorName],[ "emission", this.props.emissionName ]] );
      const dataMappedByKey = arrayToUniqValuesByKey( dataFilteredByConditons, "value" );
      return { data: dataMappedByKey, fill: false, borderColor: sectorColors[index], label: sectorName }
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
