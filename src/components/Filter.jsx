import React from "react";

import { arrayToUniqValuesByKey } from "../libs/aggregation";

const Filter = ( { data, onFilterClick, emissionName } ) => {

  var allEmissionNames = arrayToUniqValuesByKey( data, "emission" );

  const buttons = allEmissionNames.map( ( indEmissionName, index ) => {
    let classes = indEmissionName === emissionName ? "button button-active" : "button"
    return( <button key={index} className={ classes } onClick={ onFilterClick } value={ indEmissionName } >{ indEmissionName }</button> )
  })

  return(
    <nav className="nav">
      <div className="button-split">
        { buttons }
      </div>
    </nav>
  )

}

export default Filter
