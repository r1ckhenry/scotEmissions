import React from "react";

import { arrayToUniqValuesByKey } from "../libs/aggregation";

const Filter = ( { data, dispatch } ) => {

  // const onFilterClick = ( e ) => {
  //   console.log( "filter clicked", e.target.value )
  //   dispatch( { type: "UPDATE_EMISSION_NAME", emissionName: e.target.value } )
  // }
  //
  // var emissionNames = arrayToUniqValuesByKey( data, "emission" );
  //
  // const buttons = emissionNames.map( ( emissionName, index ) => {
  //   return( <button key={index} onClick={ onFilterClick } value={ emissionName } >{ emissionName }</button> )
  // })
  //
  // return(
  //   <div>
  //     { buttons }
  //   </div>
  // )

}

export default Filter
