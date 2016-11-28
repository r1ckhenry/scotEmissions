import React from "react";

import Header from "./Header";
import Filter from "./Filter";
import ChartArea from  "./ChartArea";

import { arrayToUniqValuesByKey, arrayFilteredByConditions } from "../libs/aggregation";

import { connect } from 'react-redux'

const AppContainer = ( { data, chart, dispatch } ) => {

  const onFilterClick = ( e ) => {

    if ( chart ) {
      chart.destroy();
    }

    const ctx = document.getElementById( "chart" );
    ctx.width = "100%";

    const chartData = arrayFilteredByConditions( data, [[ "year", "1998" ], [ "emission", e.target.value ]] );
    const chartDataValues = arrayToUniqValuesByKey( chartData, "value" );
    const chartLabels = arrayToUniqValuesByKey( data, "name" );

    var chartDataInfo = {
      labels: chartLabels,
      datasets: [
        {
          data: chartDataValues,
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

    Chart.defaults.global.defaultFontColor = "#fff";
    Chart.defaults.global.defaultFontFamily = "'Lato', sans-serif";
    Chart.defaults.global.legend.display = false;

    const chartDisplay = new Chart(ctx, {
      type: 'bar',
      data: chartDataInfo,
      options: chartOptions
    });

    dispatch( { type: "UPDATE_CHART", chartDisplay } )

  }



















  return(
    <div>
      <Header title="Scotland's Emissions" inverseTitle="in graphs" subtitle="This is some placeholder text" />
      <Filter data={ data } dispatch={ dispatch } onFilterClick={ onFilterClick } />
      <ChartArea data={ data } chart={ chart } dispatch={ dispatch } />
      {/*<ChartArea data={ chartDataInfo } options={ chartOptions } />*/}
    </div>
  )

}

const mapStateToProps = ( state ) => {
  console.log( state, "state" )
  return state
}

export default connect( mapStateToProps )( AppContainer );
