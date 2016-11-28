import React from "react";

import { arrayToUniqValuesByKey } from "../libs/aggregation";

const Filter = ( { data, dispatch, onFilterClick } ) => {

  var emissionNames = arrayToUniqValuesByKey( data, "emission" );

  const buttons = emissionNames.map( ( emissionName, index ) => {
    return( <button key={index} className="button" onClick={ onFilterClick } value={ emissionName } >{ emissionName }</button> )
  })

  return(
    <nav className="nav">
      <div className="button-split">
        { buttons }
      </div>
      <form>
        <button>Up</button>
        <input type="number" min="0" max="10" step="2" />
        <button>Down</button>
      </form>
    </nav>
  )

}

export default Filter
