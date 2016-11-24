import React from "react";

import { filterBy, prepForBarChart, getAllUniqBy } from "../libs/aggregation";

const Filter = ( { data, dispatch } ) => {

  const onFilterClick = ( e ) => {
    console.log( "filter clicked", e.target.value )
    dispatch( { type: "UPDATE_DATASET", emissionName: e.target.value } )
  }

  var emissionNames = getAllUniqBy( data, "emission" );

  const buttons = emissionNames.map( ( emissionName, index ) => {
    return( <button key={index} onClick={ onFilterClick } value={ emissionName } >{ emissionName }</button> )
  })

  return(
    <div>
      { buttons }
    </div>
  )

}

export default Filter
