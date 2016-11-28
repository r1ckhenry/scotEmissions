import React, { Component } from "react";
import ReactDOM from "react-dom"
import Chart from 'chart.js'

import { arrayToUniqValuesByKey, arrayFilteredByConditions } from "../libs/aggregation";

class ChartArea extends Component {

  initializeChart() {
    const labels = arrayToUniqValuesByKey( this.props.data, "name" )

    const chartData = {
      labels: labels,
      datasets: [
        {
          data: this.getBarData(),
        }
      ]
    };

    const chartOptions = {
      scales: {
          xAxes: [{
              stacked: true,
              ticks: {
                autoSkip: false,
                maxRotation: 0,
                minRotation: 90
              }
          }],
          yAxes: [{
              stacked: true
          }]
      }
    }

    const el = ReactDOM.findDOMNode( this );
    const ctx = el.getContext( "2d" );
    const chart = new Chart( ctx, {
        type: 'bar',
        data: chartData,
        options: chartOptions
      } )

    this.props.dispatch( { type: "ADD_CHART", chart } );
  }

  componentDidMount() {
    this.initializeChart()
  }

  getBarData() {
    const dataFilteredByConditons = arrayFilteredByConditions( this.props.data, [[ "year", "1998" ], [ "emission", this.props.emissionName ]] );
    const dataMappedByKey = arrayToUniqValuesByKey( dataFilteredByConditons, "value" );
    return dataMappedByKey;
  }

  render() {

    if ( this.props.chart ) {
      const chart = this.props.chart;
      chart.data.datasets[0].data = this.getBarData();
      chart.update();
    }

    return(
      React.DOM.canvas({id: "chart", style:{ height:"100%" }})
    )
  }



  // const ctx = document.getElementById( "chart" );
  //
  // if ( ctx ) {
  //
  //   ctx.width = "100%";
  //
  //   const chartData = arrayFilteredByConditions( data, [[ "year", "1998" ], [ "emission", emissionName ]] );
  //   const chartDataValues = arrayToUniqValuesByKey( chartData, "value" );
  //   const chartLabels = arrayToUniqValuesByKey( data, "name" )
  //
  //   var chartDataInfo = {
  //     labels: chartLabels,
  //     datasets: [
  //       {
  //         data: chartDataValues,
  //       }
  //     ]
  //   };
  //
  //   const chartOptions = {
  //     scales: {
  //         xAxes: [{
  //             stacked: true,
  //             ticks: {
  //               autoSkip: false,
  //               maxRotation: 0,
  //               minRotation: 90
  //             }
  //         }],
  //         yAxes: [{
  //             stacked: true
  //         }]
  //     }
  //   }
  //
  //   Chart.defaults.global.defaultFontColor = "#fff";
  //   Chart.defaults.global.defaultFontFamily = "'Lato', sans-serif";
  //   Chart.defaults.global.legend.display = false;
  //
  //   const chartDisplay = new Chart(ctx, {
  //     type: 'bar',
  //     data: chartDataInfo,
  //     options: chartOptions
  //   });
  //
  //
  // }

}

export default ChartArea;
