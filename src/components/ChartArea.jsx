import React from "react";
import Chart from 'chart.js'

import { arrayToUniqValuesByKey, arrayFilteredByConditions } from "../libs/aggregation";

const ChartArea = ( { data, chart, dispatch } ) => {

  const chartDisplay = React.DOM.canvas({id: "chart", style:{ height:"100%" }})


  // const emissionNames = arrayToUniqValuesByKey( data, "emission" );
  //
  // const buttons = emissionNames.map( ( emissionName, index ) => {
  //   return( <button className="button" key={index} onClick={ onFilterClick } value={ emissionName } >{ emissionName }</button> )
  // })


  return(
    <main className="container">
      {/*<div className="button-split">
        { buttons }
      </div>*/}
      { chartDisplay }
    </main>
  )


}

export default ChartArea;
