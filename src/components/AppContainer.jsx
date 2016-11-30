import React, { Component } from "react";

import Header from "./Header";
import Filter from "./Filter";
import Range from "./Range";
import ChartArea from  "./ChartArea";

import { arrayToUniqValuesByKey, arrayFilteredByConditions } from "../libs/aggregation";

import { connect } from 'react-redux'

class AppContainer extends Component {

  // updateChart() {
  //
  //   const ctx = document.getElementById( "chart" );
  //   ctx.width = "100%";
  //
  //   const chartData = arrayFilteredByConditions( this.props.data, [[ "year", "1998" ], [ "emission", this.props.emissionName ]] );
  //   const chartDataValues = arrayToUniqValuesByKey( chartData, "value" );
  //   const chartLabels = arrayToUniqValuesByKey( this.props.data, "name" )
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
  //   this.props.dispatch( { type: "UPDATE_CHART", chartDisplay } );
  // }

  onRangeChange( e ) {
    this.props.dispatch( { type: "UPDATE_YEAR", year: e.target.value } );
  }

  onFilterClick( e ) {
    this.props.dispatch( { type: "UPDATE_EMISSION_NAME", emissionName: e.target.value } );

    // const chart = this.props.chart;
    // chart.data.datasets[0].data = this.getBarData();
    // chart.update();
    // if ( this.props.chart ) {
    //   this.props.chart.destroy();
    // }

    // this.updateChart();

  }

  componentDidMount() {
    // this.updateChart()
  }

  render() {
    console.log( this.props, "this props render" )
    // this.updateChart()
    return(
      <div>
        <Header title="Scotland's Emissions" inverseTitle="in graphs" subtitle="This is some placeholder text" />
        <Filter data={ this.props.data } emissionName={ this.props.emissionName } onFilterClick={ this.onFilterClick.bind( this ) } />
        <main className="main">
          <ChartArea
            data={ this.props.data }
            year={ this.props.year }
            emissionName={ this.props.emissionName }
            chart={ this.props.chart }
            dispatch={ this.props.dispatch } />
        </main>
        <Range onRangeChange={ this.onRangeChange.bind( this ) } years={ this.props.years } />
      </div>
    )
  }

}

const mapStateToProps = ( state ) => {
  // console.log( state, "state" )
  const years = arrayToUniqValuesByKey( state.data, "year" );
  return Object.assign( {}, state, { years: years } )
}

export default connect( mapStateToProps )( AppContainer );
