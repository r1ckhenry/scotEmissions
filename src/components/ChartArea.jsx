import React from "react";
import Chart from 'chart.js'

import { arrayToUniqValuesByKey, arrayFilteredByConditions } from "../libs/aggregation";

const ChartArea = ( { data, chart, dispatch } ) => {


  const onFilterClick = ( e ) => {

    if ( chart ) {
      chart.destroy();
    }

    const ctx = document.getElementById( "chart" )

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
              stacked: true
          }],
          yAxes: [{
              stacked: true
          }]
      }
    }

    const chartDisplay = new Chart(ctx, {
      type: 'bar',
      data: chartDataInfo,
      options: chartOptions
    });

    dispatch( { type: "UPDATE_CHART", chartDisplay } )

  }
  const chartDisplay = React.DOM.canvas({id: "chart", style: {height: "500px"}})
  const emissionNames = arrayToUniqValuesByKey( data, "emission" );

  const buttons = emissionNames.map( ( emissionName, index ) => {
    return( <button key={index} onClick={ onFilterClick } value={ emissionName } >{ emissionName }</button> )
  })


  return(
    <main>
      <div className="button-split">
        { buttons }
      </div>
      { chartDisplay }
    </main>
  )


}

export default ChartArea;
